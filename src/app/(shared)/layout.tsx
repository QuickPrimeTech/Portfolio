import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import { Toaster } from "sonner";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <Navbar />
      <main>
        {children}
        <WhatsAppButton />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </>
  );
}
