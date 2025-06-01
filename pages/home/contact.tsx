import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build a Site That Feeds Your Growth
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Ready to transform your restaurant's online presence? Let's start
            with a free consultation.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 mb-8"
          >
            Schedule a Free 15-Min Call
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Or Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Input
                placeholder="Restaurant Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Textarea
                placeholder="Tell us about your project..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                rows={4}
              />
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 text-blue-100">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>hello@quickprimetech.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
