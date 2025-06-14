"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_y05uc3f", // your EmailJS service ID
        "template_rqumroc", // your EmailJS template ID
        formRef.current,
        "z60r8iUm1ZTw51nDT" // your EmailJS public key
      )
      .then(() => {
        toast.success("Message sent!", {
          description: "We’ll get back to you shortly.",
        });
        setLoading(false);
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error(
          "Failed to send message. Please check your internet connection."
        );
        setLoading(false);
      });
  };

  return (
    <Card className="bg-white/10 border border-white/20 rounded-xl shadow-lg w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-white text-center">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          aria-label="Contact form"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="sr-only">
                Your Name
              </Label>
              <Input
                id="name"
                name="user_name" // must match EmailJS template variable
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="sr-only">
                Email Address
              </Label>
              <Input
                id="email"
                name="user_email" // must match EmailJS template variable
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="restaurant" className="sr-only">
              Restaurant Name
            </Label>
            <Input
              id="restaurant"
              name="restaurant" // custom variable, update template accordingly
              placeholder="Restaurant Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="sr-only">
              Project Description
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-blue-600 hover:bg-gray-100"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
