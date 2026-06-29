"use client";

import { useParams } from "next/navigation";
import { getTemplateComponent, templateMetadata } from "../templateLoader";
import Link from "next/link";
import { useMemo } from "react";

export default function TemplateDemoPage() {
  const params = useParams();
  const slug = params.slug;
  const TemplateComponent = useMemo(() => getTemplateComponent(slug), [slug]);
  const metadata = templateMetadata[slug];

  if (!TemplateComponent || !metadata) {
    return (
      <main className="bg-slate-50 min-h-screen text-slate-900">
        <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="rounded-4xl bg-white p-8 shadow-xl">
            <div className="rounded-3xl bg-rose-50 p-6 text-center">
              <p className="text-sm font-semibold text-rose-700">Template not found</p>
              <p className="mt-2 text-sm text-rose-600">The template you're looking for doesn't exist or is unavailable.</p>
              <Link href="/templates" className="mt-4 inline-block rounded-full bg-[#861E1D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                Back to templates
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-4xl bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Template preview</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{metadata.title}</h1>
                {(metadata.indprice != null || metadata.usaprice != null) && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                    Paid template
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-600">{metadata.description}</p>
              {(metadata.indprice != null || metadata.usaprice != null) && (
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {metadata.indprice != null ? `₹ ${metadata.indprice}` : ""}
                  {metadata.indprice != null && metadata.usaprice != null ? " | " : ""}
                  {metadata.usaprice != null ? `US $${metadata.usaprice}` : ""}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/template/demo?templateId=${slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Demo
              </Link>
              {(metadata.indprice != null || metadata.usaprice != null) && (
                <Link
                  href={`/payment?templateId=${slug}`}
                  className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
                >
                  Buy Now
                </Link>
              )}
              <Link
                href="/templates"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Back
              </Link>
              <Link
                href="/template"
                className="rounded-full bg-[#861E1D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Browse all
              </Link>
            </div>
          </div>

          {/* <div className="mt-8 rounded-3xl border border-slate-200 overflow-hidden bg-slate-50">
            <div className="relative">
              <TemplateComponent isDemo={true} />
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                 <p className="absolute top-[1%] left-[5%] text-4xl font-semibold text-[#A40606] rotate-[-25deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute top-[10%] left-[5%] text-4xl font-semibold text-[#A40606] rotate-[-25deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute top-[35%] right-[8%] text-4xl font-semibold text-white/15 rotate-[30deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute top-[60%] left-[12%] text-4xl font-semibold text-white/15 rotate-[-20deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute bottom-[15%] right-[6%] text-4xl font-semibold text-white/15 rotate-[25deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute bottom-[35%] left-[8%] text-4xl font-semibold text-white/15 rotate-[-30deg] whitespace-nowrap">InviteArc</p>
                <p className="absolute top-[50%] left-1/2 text-4xl font-semibold text-white/15 rotate-[-45deg] whitespace-nowrap">InviteArc</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
