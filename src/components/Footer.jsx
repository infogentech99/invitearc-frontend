'use client'

import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/share") || pathname.startsWith("/demo")) {
    return null;
  }
  return (
    <>
      <footer className="bg-[#F8FAFC] ">
        <div className="max-w-7xl mx-auto py-16 lg:px-0 md:px-6 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold leading-none text-black">
               Ready-Made Wedding Invitation Websites
              </h2>
            </div>

            {/* Help */}
            <div className="lg:col-span-2">
              <h3 className="md:text-[16px] text-[14px] font-serif font-bold text-black">
                Need any help ? We’ve got your back.
              </h3>

              <p className="mt-5 text-gray-600">invitearc@gmail.com</p>

              <a
                href="https://www.instagram.com/theinvitearc/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#9f1d1d] text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>

            {/* Links */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-serif font-bold text-black">
                Information
              </h3>

              <ul className="mt-5 space-y-1 text-gray-700 text-[14px]">
                <li>
                  <a href="/privacy-policy">Privacy policy</a>
                </li>

                <li>
                  <a href="/refund-policy">Refund policy</a>
                </li>

                <li>
                  <a href="/terms-and-conditions">Terms & Conditions policy</a>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            {/* <div className="relative overflow-hidden rounded-[30px] border border-gray-400  p-8 lg:col-span-6 md:h-full h-105">
              <div className="max-w-full">
                <h2 className="text-3xl font-serif font-bold leading-tight text-black md:mr-50">
                  Invite Your Guests in 10 Minutes!
                </h2>

                <p className="mt-3 text-gray-600 text-[14px]">
                  Choose. Customise. Share.
                </p>

                <button className="mt-4 bg-[#9f1d1d] text-white px-8 py-3 rounded-full font-semibold text-[13px] cursor-pointer">
                  Choose a Template
                </button>
              </div>

              <img
                src="/assets/footer_couple.png"
                alt="Wedding Couple"
                className="absolute bottom-0 right-0 h-45 object-contain"
              />
            </div> */}
             <div className="lg:col-span-2">
              <h3 className="text-xl font-serif font-bold text-black">
                Our Templates
              </h3>

              <ul className="mt-5 space-y-1 text-gray-700 text-[14px]">
                <li>
                  <a href="/">Hitched</a>
                </li>

                <li>
                  <a href="/">Laavan</a>
                </li>

                <li>
                  <a href="/">Mayra</a>
                </li>
                 <li>
                  <a href="/">Vows</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#991b1b] py-4">
          <p className="text-center text-white text-lg font-georgia">
            © InviteArc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
