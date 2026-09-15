import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "../components/LayoutWrapper";
import DisableInspect from "../components/DisableInspect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://invitearc.com/"),

  openGraph: {
    title: "InviteArc | Luxury Website and Video Invitation",
    description: "Create premium online wedding invitations, event pages, galleries & countdowns. Modern website invites for all occasions",
    url: "https://invitearc.com/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "InviteArc | Luxury Website and Video Invitation",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "InviteArc | Luxury Website and Video Invitation",
    description: "Create premium online wedding invitations, event pages, galleries & countdowns. Modern website invites for all occasions",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://invitearc.com/og.jpg",
    "og:image:type": "image/jpeg",
  },


};









export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
<DisableInspect />
          <Toaster position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}