"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/preview") || pathname.startsWith("/admin");
  const hideFooter = pathname.startsWith("/dashboard/edit/");

  return (
    <>
      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <WhatsAppButton />}
      {!hideLayout && !hideFooter && <Footer />}
    </>
  );
}