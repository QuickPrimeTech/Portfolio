import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const dmSerifDispay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
  description:
    "Get a stunning, high-converting website built by experts — with zero upfront cost. QuickPrimeTech designs and develops custom websites for brands, startups, and businesses that want to stand out and scale fast.",
  keywords: [
    "custom website design",
    "web development agency",
    "no upfront cost website",
    "high converting websites",
    "business website design",
    "startup web design",
    "QuickPrimeTech",
    "premium web development",
    "brand website design",
    "conversion focused websites",
  ],
  openGraph: {
    title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
    description:
      "QuickPrimeTech builds beautiful, high-performing websites for modern brands. Zero upfront cost. Maximum impact. Let's build something extraordinary.",
    url: "https://quickprimetech.vercel.app",
    siteName: "QuickPrimeTech",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
        width: 1200,
        height: 630,
        alt: "QuickPrimeTech — Premium Websites Built to Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quickprimetech",
    creator: "@quickprimetech",
    title: "Premium Websites That Convert — No Upfront Cost | QuickPrimeTech",
    description:
      "Custom, conversion-focused websites for brands and businesses. Zero upfront cost. Built to impress and perform.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1749102720/opengraph-image_lmiplo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", dmSerifDispay.variable, dmSans.variable)}
    >
      <body>
        <NextTopLoader showSpinner={false} color="var(--primary)" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>{children}</PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
