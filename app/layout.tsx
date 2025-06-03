import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/layouts/client/navbar";
import Footer from "@/layouts/client/footer";

export const metadata: Metadata = {
  title: "QuickPrimeTech",
  description:
    "We design high-converting, custom restaurant websites at no upfront cost. Our expert team builds tailored websites that showcase your brand, attract more customers, and help grow your business — fast. Get your free restaurant website today and give your business the online presence it deserves.",
  generator: "QuickPrimeTech Agency",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-secondary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
