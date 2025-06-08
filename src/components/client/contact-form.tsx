"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  return (
    <Card className="bg-white/10 border border-white/20 rounded-xl shadow-lg w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-white text-center">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form
          onSubmit={(e) => e.preventDefault()}
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
                name="name"
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
                name="email"
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
              name="restaurant"
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
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
