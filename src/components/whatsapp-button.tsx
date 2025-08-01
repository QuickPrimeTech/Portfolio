"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircleX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { generateWhatsappLink } from "@/lib/helpers";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const message = "Hey QuickPrimeTech, I want to start my restaurant website.";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
    >
      {open && (
        <div className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-xl shadow-lg px-4 py-3 max-w-xs animate-slide-in-right">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">Chat with us</p>
              <p className="text-xs leading-snug">
                Have questions? Reach us on WhatsApp and we'll respond in less
                than 2 hours. Click the WhatsApp icon.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-destructive transition"
              aria-label="Close chat prompt"
            >
              <MessageCircleX className="size-5" />
            </button>
          </div>
        </div>
      )}

      {open ? (
        <a
          href={generateWhatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full p-4 bg-green-600 hover:bg-green-700 text-white shadow-lg transition animate-bounce-slow"
          )}
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="size-5" />
        </a>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          className={cn(
            "rounded-full px-3 py-3 h-auto bg-green-600 hover:bg-green-700 text-white shadow-lg transition animate-bounce-slow"
          )}
          aria-label="Open WhatsApp button"
        >
          <FaWhatsapp className="size-5" />
        </Button>
      )}
    </div>
  );
}
