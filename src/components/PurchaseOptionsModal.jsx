"use client";

import {
  ArrowRight,
  Check,
  Crown,
  LaptopMinimal,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const formatPrice = (amount, country) =>
  country === "IN" ? `₹ ${amount}` : `$ ${amount}`;

export default function PurchaseOptionsModal({
  open,
  template,
  country,
  processing = false,
  onClose,
  onPay,
}) {
  if (!open || !template) return null;

  const selfPrice = country === "IN" ? template.indprice : template.usaprice;
  const expertPrice = country === "IN" ? selfPrice + 1000 : selfPrice + 20;

  return (
    <div className="fixed inset-x-0 bottom-0 top-24 z-60 grid place-items-center overflow-y-auto bg-[#171b1a]/75 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <section className="relative z-10 my-0 max-h-[calc(100dvh-7rem)] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/70 bg-[#fcfbf7] px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:max-h-[calc(100dvh-7rem)] sm:rounded-[1.75rem] sm:px-9 sm:py-8 lg:px-10 lg:py-9">
        <div className="flex items-start justify-between gap-5">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9b806e] sm:text-xs">
              <span className="h-px w-8 bg-[#e6d9ce]" />
              Choose your experience
              <span className="h-px w-8 bg-[#e6d9ce]" />
            </div>
            <h2 className="mt-3 font-georgia font-bold text-2xl leading-[1.05] tracking-[-0.035em] text-[#161a19] lg:text-[1.75rem]">
              How would you like to create {template.title}?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#9296a0] sm:text-base">
              Select an option below and continue securely to payment.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full cursor-pointer border border-[#e5e8e5] bg-white text-[#6f7880] shadow-[0_4px_14px_rgba(30,40,35,0.08)] transition hover:bg-[#f3f4f1] sm:right-7 sm:top-7"
            aria-label="Close purchase options"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-7 grid gap-8 md:grid-cols-2 lg:mt-8 lg:gap-6">
          <article className="group flex flex-col rounded-[1.35rem] border border-[#f7bd7c] bg-[#fffefa] p-6 shadow-[0_8px_24px_rgba(48,59,43,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(48,59,43,0.09)] sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A8753C]">Option 01</p>
                <h3 className="mt-3 font-georgia text-xl md:text-2xl leading-none tracking-[-0.03em] text-[#171b19] font-medium">Self edit</h3>
                 <div className="mt-4 h-px w-7 bg-[#a8b499]" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bFg-[#faf3eb] text-[#A8753C]">
                <LaptopMinimal size={30} strokeWidth={1.35} />
              </div>
            </div>
           
            <p className="mt-5 min-h-10 max-w-md text-sm leading-6 text-[#5f6971]">
              Best for those who want the template as is.
            </p>
            <ul className="mt-1 space-y-3 text-sm text-[#4e5960]">
              <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#faf3eb] text-[#A8753C]"><Check size={13} strokeWidth={2.5} /></span> Full template editor access</li>
              <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#faf3eb] text-[#A8753C]"><Check size={13} strokeWidth={2.5} /></span> Publish and share instantly</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <span className="font-georgia md:text-2xl text-xl font-bold tracking-[-0.02em] text-[#151918]">{formatPrice(selfPrice, country)}</span>
              <button type="button" onClick={() => onPay("self-edit")} disabled={processing} className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-[#A8753C] px-6 py-3 text-sm font-semibold text-[#A8753C] shadow-[0_8px_18px_rgba(90,117,55,0.2)] transition hover:text-white hover:bg-[#A8753C] disabled:opacity-50 cursor-pointer">
                {processing ? "Processing..." : "Pay now"} <ArrowRight size={17} />
              </button>
            </div>
          </article>

          <article className="relative flex flex-col rounded-[1.35rem] border border-[#f7bd7c]  p-6 shadow-[0_8px_24px_rgba(133,57,48,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(133,57,48,0.11)] sm:p-7">
            <div className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-#fff x-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] border-2 border-[#a54840] px-6 bg-white text-[#a54840] shadow-lg sm:right-7"><Crown size={13} className="mr-1 inline" fill="currentColor" /> Popular</div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a54840]">Option 02</p>
                <h3 className="mt-3 max-w-60 font-georgia text-xl md:text-2xl leading-[1.05] tracking-[-0.03em] text-[#171b19]">Let Our Expert Team Edit For You</h3>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fbe8e3] text-[#ad5a4f]">
                <UsersRound size={30} strokeWidth={1.35} />
              </div>
            </div>
            <p className="mt-5 min-h-10 max-w-md text-sm leading-6 text-[#5f6971]">
              Best for those who want minor design updates.
            </p>
            <ul className="mt-1 space-y-3 text-sm text-[#4e5960]">
              <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f5d9d3] text-[#a54840]"><Check size={13} strokeWidth={2.5} /></span> Personalization by our experts</li>
              <li className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f5d9d3] text-[#a54840]"><Check size={13} strokeWidth={2.5} /></span> Review-ready invitation delivery</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <span className="font-georgia md:text-2xl text-xl font-bold tracking-[-0.02em] text-[#151918]">{formatPrice(expertPrice, country)}</span>
              <button type="button" onClick={() => onPay("expert")} disabled={processing} className="inline-flex items-center gap-2 rounded-full bg-[#A8753C] border-2 border-[#A8753C] px-6 py-3 text-sm font-semibold cursor-pointer text-white shadow-[0_8px_18px_rgba(153,31,27,0.22)] transition hover:bg-[#A8753C] disabled:opacity-50">
                {processing ? "Processing..." : "Pay now"} <ArrowRight size={17} />
              </button>
            </div>
          </article>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#92969b] sm:text-xs">
          <span className="h-px w-14 bg-[#e5ddd7]" />
          <ShieldCheck size={17} strokeWidth={1.7} /> Secure and trusted payment
          <span className="h-px w-14 bg-[#e5ddd7]" />
        </div>
      </section>
    </div>
  );
}