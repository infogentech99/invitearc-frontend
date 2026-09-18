"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";

const razorpayScriptUrl = "https://checkout.razorpay.com/v1/checkout.js";

const loadRazorpayScript = () =>
  new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      `script[src="${razorpayScriptUrl}"]`,
    );

    if (existingScript) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = razorpayScriptUrl;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Unable to load Razorpay"));
    document.body.appendChild(script);
  });

export default function CustomPaymentPage() {
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("IN");
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const isIndia = country === "IN";
  const currencySymbol = isIndia ? "₹" : "$";

  useEffect(() => {
    fetch("/api/country")
      .then((response) => response.json())
      .then((data) => setCountry(data.country || "IN"))
      .catch(() => setCountry("IN"));
  }, []);

  const handlePayNow = async (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setMessageType("error");
      setMessage("Please enter a valid amount.");
      return;
    }

    setProcessing(true);
    setMessage("");

    try {
      await loadRazorpayScript();
      const response = await axios.post(
        `${config.api.baseUrl}/api/client-templates/custom-payment/create-order`,
        { amount: numericAmount, country },
      );
      const order = response.data?.data;

      if (!order || !window.Razorpay) {
        throw new Error("Unable to create payment order.");
      }

      const razorpay = new window.Razorpay({
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "InviteArc",
        description: "Custom payment",
        image: `${window.location.origin}/logo.png`,
        handler: async (paymentResponse) => {
          try {
            await axios.post(
              `${config.api.baseUrl}/api/client-templates/custom-payment/verify`,
              {
                razorpayOrderId: paymentResponse.razorpay_order_id,
                razorpayPaymentId: paymentResponse.razorpay_payment_id,
                razorpaySignature: paymentResponse.razorpay_signature,
              },
            );
            setMessageType("success");
            setMessage("Payment successful. Thank you!");
          } catch (error) {
            console.error(error);
            setMessageType("error");
            setMessage("Payment verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: () => {
            setMessageType("info");
            setMessage("Payment cancelled.");
          },
        },
        theme: { color: "#861E1D" },
      });

      razorpay.on("payment.failed", () => {
        setMessageType("error");
        setMessage("Payment failed. Please try again.");
      });
      razorpay.open();
    } catch (error) {
      console.error(error);
      setMessageType("error");
      setMessage(error.response?.data?.message || error.message || "Unable to open payment.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf2] px-5 py-10 text-[#6d2525]">
      <section className="w-full max-w-md rounded-3xl border border-[#ead7bb] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(109,37,37,0.35)] sm:p-9">
        {/* <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#a8753c]">
          InviteArc
        </p> */}
         <div className="flex justify-center">
            <img
            src="/assets/INLOGO.png"
            alt="InviteArc"
            className="h-20 w-auto object-contain"
          />
         </div>
        <h1 className="mt-4 text-center font-georgia text-3xl font-bold">Custom Payment</h1>
        <p className="mt-3 text-center text-sm leading-6 text-slate-500">
            Enter the amount you want to pay securely through Razorpay.
        </p>

        <form onSubmit={handlePayNow} className="mt-8">
          <label htmlFor="custom-payment-amount" className="text-sm font-semibold text-slate-700 font-georgia">
            Payment amount ({isIndia ? "INR" : "USD"})
          </label>
          <div className="mt-2 flex items-center overflow-hidden rounded-2xl border border-[#e2cdb1] bg-[#fffaf2] focus-within:border-[#861E1D]">
            <span className="px-4 text-lg text-[#861E1D]">{currencySymbol}</span>
            <input
              id="custom-payment-amount"
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter amount"
              className="w-full bg-transparent px-2 py-4 text-lg text-slate-900 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={processing}
            className="mt-6 w-full rounded-full bg-[#861E1D] px-6 py-3.5 cursor-pointer text-sm font-semibold text-white transition hover:bg-[#6d1717] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {processing ? "Opening payment..." : "Pay now"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-5 text-center text-sm ${
              messageType === "error"
                ? "text-red-600"
                : messageType === "success"
                  ? "text-green-700"
                  : "text-slate-500"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
