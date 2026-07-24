"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import AuthModal from "./../components/AuthModal";
import TemplateGrid from "../components/TemplateGrid";
import { AuthContext } from "./../context/AuthContext";
import HowItWorks from "./../components/HowItWorks";
import Testimonial from "./../components/Testimonial";
import Faq from "./../components/Faq";
import HeroSection from "./../components/HeroSection";

const slides = [
  {
    title: "Build your perfect event invite",
    description:
      "Fast, modern invitation templates for celebrations, meetings, and launches.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    button: "Browse Templates",
    href: "/template",
  },
  {
    title: "Launch stunning RSVP pages",
    description:
      "Create beautiful, responsive templates in minutes with ready-made designs.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
    button: "See Featured Designs",
    href: "/template",
  },
  {
    title: "Invite guests with style",
    description:
      "Showcase your event with premium visuals and seamless sharing options.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    button: "Get Started",
    href: "/register",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  const router = useRouter();

  const openAuthModal = (tab) => {
    setAuthTab(tab);
    setAuthModalOpen(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[#861E1D] text-white ">
          <HeroSection/>       
        </section>

        <section
          id="templates"
          className="mx-auto max-w-375 px-6 py-20 sm:px-10 lg:px-12"
        >
          <div className="flex flex-col gap-4  md:items-center md:justify-between">
            <h2 className="mt-3 text-[28px] font-bold  md:text-[40px] font-georgia text-[#861E1D] text-center md:leading-none leading-9">
              Explore Our InviteArc Invitation Templates
            </h2>
            <p className=" md:text-[18px] text-[16px] leading-6 text-slate-600 text-center font-poppins">
              We offer modern wedding card designs that users can customize for
              weddings, engagements, birthdays, and other special celebration
              events.
            </p>
          </div>

          <TemplateGrid />
        
          <HowItWorks />
          <Testimonial/>
          <Faq id="faqs"/>
        </section>

        <section id="about" className="mx-auto">
          <div className="bg-[#861E1D] px-8 py-12 text-white shadow-xl sm:px-12">
            <div className="flex flex-col gap-6  lg:items-center lg:justify-between">
              <div className="">
                <h2 className="mt-3 text-[28px] font-bold  md:text-[40px] font-georgia text-white text-center md:leading-none leading-9">
                  Beautiful InviteArc - invites made for your celebrations.
                </h2>
                <p className=" md:text-[18px] text-[16px] leading-6 text-white text-center font-poppins mt-4">
                  Have your own design? We’ll build it for you.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openAuthModal("register")}
                className="inline-flex shrink-0 items-center justify-center rounded-full cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-[#861E1D] transition font-georgia hover:bg-slate-100"
              >
                Order a Custom Invite
              </button>
            </div>
          </div>
        </section>
      </main>
      <AuthModal
        open={authModalOpen}
        initialTab={authTab}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
