import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import { Toaster } from "sonner";
import { PostHogProvider } from "./providers";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "QuickPrimeTech - Get your website running with no upfront cost",
  description:
    "We design high-converting, custom restaurant websites at no upfront cost. Our expert team builds tailored websites that showcase your brand, attract more customers, and help grow your business — fast. Get your free restaurant website today and give your business the online presence it deserves.",
  generator: "QuickPrimeTech Agency",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749102720/opengraph-image_lmiplo.png",
      },
    ],
    title: "QuickPrimeTech - Free Restaurant Websites",
    description:
      "Build high-converting, custom restaurant websites with QuickPrimeTech at no upfront cost.",
    url: "https://quickprimetech.vercel.app",
    siteName: "QuickPrimeTech",
    locale: "en_US",
    type: "website",
  },
  // --- Twitter Card Metadata (NEW ADDITION) ---
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title:
      "QuickPrimeTech: Get your restaurant webisite without any upfront cost",
    description:
      "Transform your restaurant online presence with QuickPrimeTech. Custom websites, no upfront cost. Get started today!",
    images: {
      url: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749102720/opengraph-image_lmiplo.png",
      alt: "QuickPrimeTech: Grow Your Restaurant Business Online Through Stunning Webistes",
      width: 1200,
      height: 630,
    },
  },
  other: {
    "google-site-verification": "svtKqX6-WvwK1_3MBBYLIFz6HNAWrnX6U7VaNZnd2CE",
  },
};
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const roboto = Poppins({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${dmSans.variable} font-sans`}>
        <PostHogProvider>
          <Navbar />
          <main>
            {children}
            <WhatsAppButton />
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </PostHogProvider>
      </body>
    </html>
  );
}
