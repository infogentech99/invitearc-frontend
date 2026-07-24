"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import config from "../config/config";

const previewImages = {
  wedding: "assets/preview-images/hitched.png",
  birthday: "/templates/birthday-preview.jpg",
  corporate: "/templates/corporate-preview.jpg",
  invitation: "/templates/invitation-preview.jpg",
};

export default function TemplateGrid() {
  const router = useRouter();
  const { user, token, openAuthModal } = useContext(AuthContext);
  const [apiTemplates, setApiTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("IN");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get(
          `${config.api.baseUrl}${config.api.endpoints.templates.all}`,
        );
        const data = res.data?.data;
        setApiTemplates(Array.isArray(data) ? data : data ? [data] : []);
      } catch (error) {
        console.error("Template fetch failed:", error);
        setApiTemplates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("/api/country");
        const data = await res.json();

        setCountry(data.country || "IN");
      } catch (error) {
        setCountry("IN");
      }
    };

    fetchCountry();
  }, []);

  const handlePayment = useCallback(
    async (template) => {
      if (!user) {
        localStorage.setItem("pendingTemplate", JSON.stringify(template));

        openAuthModal("login");
        return;
      }

      try {
        const response = await axios.post(
          `${config.api.baseUrl}/api/client-templates/create-order`,
          {
            templateId: template._id,
            country,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        const orderData = response.data?.data;

        if (!orderData) {
          alert("Order creation failed");
          return;
        }

        const options = {
          key: orderData.key,
          amount: orderData.amount,
          currency: orderData.currency,
          order_id: orderData.orderId,

          name: "InviteArc",
          description: `${template.title} Template`,

          image: template.previewImage,

          handler: async function (paymentResponse) {
            try {
              const verifyResponse = await axios.post(
                `${config.api.baseUrl}/api/client-templates/verify-payment`,
                {
                  razorpayOrderId: paymentResponse.razorpay_order_id,
                  razorpayPaymentId: paymentResponse.razorpay_payment_id,
                  razorpaySignature: paymentResponse.razorpay_signature,
                  templateId: template._id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                  withCredentials: true,
                },
              );

              if (verifyResponse.data.success) {
                alert("Payment Successful");
                const clientTemplate = verifyResponse.data.data;
                if (clientTemplate?._id) {
                  router.push(`/dashboard/edit/${clientTemplate._id}`);
                } else {
                  router.push("/dashboard");
                }
              }
            } catch (error) {
              console.error(error);

              alert("Payment verification failed");
            }
          },

          theme: {
            color: "#0f172a",
          },
        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();
      } catch (error) {
        console.error(error);

        alert(error.response?.data?.message || "Unable to initiate payment");
      }
    },
    [country, openAuthModal, router, token, user],
  );

  useEffect(() => {
    const pendingTemplate = localStorage.getItem("pendingTemplate");

    if (user && pendingTemplate) {
      const template = JSON.parse(pendingTemplate);

      localStorage.removeItem("pendingTemplate");

      handlePayment(template);
    }
  }, [user, handlePayment]);

  const descriptionText = (template) => {
    return template.description;
  };

  const priceText = (template) => {
    if (country === "IN") {
      return `₹ ${template.indprice}`;
    }

    return `$ ${template.usaprice}`;
  };

  // const templates = [...apiTemplates];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const templates =
    selectedCategory === "All"
      ? apiTemplates
      : apiTemplates.filter(
          (template) =>
            template.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-5 mt-12 justify-center ">
        {[
          "All",
          "Hindu Weddings",
          "Sikh Weddings",
          "Muslim Weddings",
          "Christian Weddings",
          "South-Indian Weddings",
          "For him/her",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border transition cursor-pointer ${
              selectedCategory === category
                ? "bg-[#861E1D] text-white border-[#861E1D]"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
        {loading && apiTemplates.length === 0 ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="h-48 w-full rounded-3xl bg-slate-200" />
              <div className="mt-6 h-6 w-3/4 rounded bg-slate-200" />
              <div className="mt-3 h-4 w-5/6 rounded bg-slate-200" />
              <div className="mt-8 flex items-center justify-between">
                <div className="h-5 w-24 rounded bg-slate-200" />
                <div className="h-10 w-24 rounded-full bg-slate-200" />
              </div>
            </div>
          ))
        ) : templates.length > 0 ? (
          templates.map((template) => {
            return (
              <article
                key={template.slug || template._id}
                className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.16)] transition hover:-translate-y-1 hover:shadow-[0_25px_90px_-45px_rgba(15,23,42,0.18)]"
              >
                <div className="overflow-hidden border-2 border-black rounded-4xl">
                  <Link
                    href={
                      template.isBuiltIn
                        ? `/templates/${template.slug}`
                        : `/demo/${template.slug}`
                    }
                    className="block overflow-hidden border-2 border-black rounded-4xl"
                  >
                    {template.isBuiltIn ? (
                      <div className="h-48 w-full flex items-center justify-center bg-linear-to-br from-purple-200 via-pink-200 to-blue-200">
                        <img
                          src={
                            template.previewImage ||
                            template.defaultData?.sharePreviewImage ||
                            previewImages[template.slug]
                          }
                          alt={template.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <img
                        src={
                          template.previewImage ||
                          template.defaultData?.sharePreviewImage ||
                          "/placeholder-template.jpg"
                        }
                        alt={template.title || "Template preview"}
                        className="h-full w-full object-cover "
                      />
                    )}
                  </Link>
                </div>
                <div className="mt-6 space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-900 font-georgia">
                        {template.title || "Untitled Template"}
                      </h3>
                      <span className="inline-flex rounded-full bg-[#861E1D]/5 px-3 py-1.5 text-[13px] font-semibold tracking-[0.06em] text-slate-700 whitespace-nowrap font-poppins">
                        {template.category || "Template"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 font-poppins">
                      {descriptionText(template)}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xl font-semibold text-slate-900">
                    {priceText(template)}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {template.isBuiltIn ? (
                      <>
                        <Link
                          href={`/templates/${template.slug}`}
                          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                          Preview
                        </Link>
                        <Link
                          href={`/template?category=${template.category}`}
                          className="inline-flex items-center justify-center rounded-full bg-[#861E1D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          View
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href={`/demo/${template.slug}`}
                          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                          Demo
                        </Link>
                        <button
                          onClick={() => handlePayment(template)}
                          className="inline-flex items-center justify-center rounded-full bg-[#861E1D] px-5 py-3 cursor-pointer text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                          Buy now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="flex justify-center md:col-span-4 col-span-3 items-center">
            <div className="rounded-3xl border border-slate-200 bg-white md:py-30 lg:py-45 py-15 lg:px-30 md:px-20 px-6 text-center text-slate-600 shadow-sm bg-[url('/assets/other.webp')] bg-cover bg-no-repeat">
              <p className="font-georgia md:text-5xl text-2xl font-normal text-[#861E1D]">
                Your Invitation Journey Begins Soon
              </p>
              <p className="md:mt-6 mt-2">
                We are preparing something beautiful for your special moments.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
