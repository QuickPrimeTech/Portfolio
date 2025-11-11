"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircleX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { generateWhatsappLink } from "@/lib/helpers";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [shake, setShake] = useState(false); // 👈 new shake state
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const message = "Hey QuickPrimeTech, I want to start my restaurant website.";

  // 👇 Show popup on first visit only
  useEffect(() => {
    const hasClosed = localStorage.getItem("whatsapp_popup_closed");
    if (!hasClosed) {
      setOpen(true);
      setShake(true); // start shaking
      const timer = setTimeout(() => setShake(false), 2000); // stop after 2s
      return () => clearTimeout(timer);
    }
  }, []);

  // 👇 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // 👇 Handle close click (remember choice)
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("whatsapp_popup_closed", "true");
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
    >
      {/* Popup message */}
      {open && (
        <div
          className={cn(
            "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
            "rounded-xl shadow-lg px-4 py-3 max-w-xs",
            shake && "animate-shake" // 👈 only shake briefly
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">Chat with us</p>
              <p className="text-xs leading-snug">
                Have questions? Reach us on WhatsApp and we'll respond in less
                than 2 hours. Click the WhatsApp icon.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="text-muted-foreground hover:text-destructive transition"
              aria-label="Close chat prompt"
            >
              <MessageCircleX className="size-5" />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp button (always visible) */}
      <Link
        href={generateWhatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "rounded-full h-fit p-4 bg-green-600 hover:bg-green-700 text-white shadow-lg transition animate-bounce-slow"
        )}
        aria-label="Open WhatsApp chat"
      >
        <FaWhatsapp className="size-6" />
      </Link>
    </div>
  );
}
