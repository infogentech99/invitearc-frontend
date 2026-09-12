"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import config from "../../config/config";
import { AuthContext } from "../../context/AuthContext";
import ShareLinkModal from "../../components/ShareLinkModal";
import hitchedPreview from "../../../public/assets/preview-images/hitched.webp";
import saanjhPreview from "../../../public/assets/preview-images/saanjh.webp";
import milanPreview from "../../../public/assets/preview-images/milan.webp";
import biyePreview from "../../../public/assets/preview-images/biye.webp";
import auraPreview from "../../../public/assets/preview-images/aura.webp";
import jodiPreview from "../../../public/assets/preview-images/laavan.webp";
import starlightPreview from "../../../public/assets/preview-images/starlight.webp";
import mayraPreview from "../../../public/assets/preview-images/mayra.webp";
import kalyanamPreview from "../../../public/assets/preview-images/kalyanam.webp";
import niqahPreview from "../../../public/assets/preview-images/niqah.webp";
import vowsPreview from "../../../public/assets/preview-images/vows.webp";
import beyondPreview from "../../../public/assets/preview-images/beyond.webp";
import sohalaPreview from "../../../public/assets/preview-images/sohala.webp";

export default function DashboardPage() {
  const { user, token, loading } = useContext(AuthContext);
  const [templates, setTemplates] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/dashboard");
      return;
    }

    if (!user || !token) {
      return;
    }

    const fetchMyTemplates = async () => {
      try {
        const response = await axios.get(
          `${config.api.baseUrl}${config.api.endpoints.clientTemplates.myTemplates}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setTemplates(response.data.data || []);
      } catch (err) {
        setError("Unable to load your purchased templates.");
      } finally {
        setFetching(false);
      }
    };

    fetchMyTemplates();
  }, [loading, user, token, router]);
  console.log("Calling API with token:", token);

  const previewImages = {
    hitched: hitchedPreview.src,
    saanjh: saanjhPreview.src,
    milan: milanPreview.src,
    biye: biyePreview.src,
    aura: auraPreview.src,
    jodi: jodiPreview.src,
    starlight: starlightPreview.src,
    mayra: mayraPreview.src,
    kalyanam: kalyanamPreview.src,
    niqah: niqahPreview.src,
    vows: vowsPreview.src,
    beyond: beyondPreview.src,
    sohala: sohalaPreview.src,
  };

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 font-georgia  text-center md:text-left">
                Client dashboard
              </p>
              <h1 className="mt-3 md:text-3xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl font-georgia text-center md:text-left">
                Your purchased templates
              </h1>
            </div>
            <div className="rounded-3xl bg-[#861E1D] px-4 py-3 text-sm font-semibold text-white  text-center">
              {user ? `Welcome, ${user.name}` : "Loading user..."}
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-600  text-center md:text-left">
            Manage templates you've purchased, open the editor, and publish
            shareable links.
          </p>
          {error && (
            <div className="rounded-2xl bg-rose-100 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}
        </div>

        <section className="w-full rounded-[22px] border border-[#e3e3e3] bg-white px-7 py-5 shadow-sm mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-5">
              <div className="flex md:h-18 md:w-18 h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full bg-[#f8e5e4]">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#a52a27] md:h-8 md:w-8"
                >
                  <path
                    d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M22 21V19C21.9986 17.1771 20.765 15.5866 19 15.13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3.13C17.7699 3.58596 19.0071 5.17987 19.0071 7C19.0071 8.82013 17.7699 10.414 16 10.87"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <p className="mb-1 text-[12px] font-bold uppercase tracking-[4px] text-[#bd807d] font-georgia">
                  Need Help Editing?
                </p>

                <h3 className="text-[20px] md:text-[26px] font-bold leading-tight text-[#101d3a] font-georgia">
                  Let Our Team Edit For You
                </h3>

                <p className="mt-1 text-[15px] text-[#687995]">
                  Prefer to have it done for you? Our team can customize
                  your invitation for a nominal service fee.
                </p>
              </div>
            </div>

            {/* Contact Support Button */}
            <a
              href="tel:+919910130963"
              className="group flex min-w-[290px] items-center justify-center gap-3 cursor-pointer rounded-full bg-[#a52a27] px-7 py-4 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#8f211f] hover:shadow-md"
            >
              {/* Chat Icon */}
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11.5C20 15.6421 16.4183 19 12 19C10.6507 19 9.3858 18.6818 8.2821 18.1231L4 20L5.16498 16.5025C4.43158 15.3356 4 13.9706 4 12.5C4 8.35786 7.58172 5 12 5C16.4183 5 20 7.35786 20 11.5Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Contact Support Team</span>

              {/* Arrow */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {fetching ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6"
              />
            ))
          ) : templates.length > 0 ? (
            templates.map((clientTemplate) => (
              <article
                key={clientTemplate._id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-3xl bg-slate-100">
                  <img
                    src={
                      previewImages[clientTemplate.templateId?.componentKey] ||
                      hitchedPreview.src
                    }
                    alt={clientTemplate.templateId?.title || "Template Preview"}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex flex-row gap-6 justify-stretch">
                    <h2 className=" text-xl font-semibold  font-georgia text-[#861E1D]">
                      {clientTemplate.templateId?.title || "Invitearc template"}
                    </h2>
                    <p className="inline-flex rounded-full bg-[#861E1D]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 whitespace-nowrap">
                      {clientTemplate.templateId?.category ||
                        "Purchased template"}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {"Edit the template text and publish a shareable link."}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                      {clientTemplate.isPublished ? "Published" : "Draft"}
                    </span>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/edit/${clientTemplate._id}`}
                        className="rounded-full bg-[#861E1D] px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                      >
                        Edit Template
                      </Link>
                      {clientTemplate.isPublished &&
                      clientTemplate.shareSlug ? (
                        <button
                          onClick={() => {
                            setSelectedTemplate(clientTemplate);
                            setShareModalOpen(true);
                          }}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 cursor-pointer"
                        >
                          View Share Link
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-sm">
              You have no purchased templates yet. Buy a template first to start
              editing.
            </div>
          )}
        </div>

        <ShareLinkModal
          open={shareModalOpen}
          onClose={() => {
            setShareModalOpen(false);
            setSelectedTemplate(null);
          }}
          clientTemplate={selectedTemplate}
          token={token}
        />
      </section>
    </main>
  );
}
