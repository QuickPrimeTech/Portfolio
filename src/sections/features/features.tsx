import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { CldVideoPlayer } from "@/components/cld-video-player";
import { BackgroundPattern } from "@/components/background-pattern";
import { Check } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="relative section-x section-y"
      aria-labelledby="features-header"
      aria-describedby="features-description"
    >
      <BackgroundPattern className="absolute h-full w-full inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
      >
        <Badge
          className="rounded-full px-4 py-1.5 text-sm font-medium"
          variant="secondary"
        >
          Features
        </Badge>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          id="features-header"
        >
          Everything Your Restaurant Needs
        </h2>
        <p
          className="max-w-[800px] text-muted-foreground md:text-lg"
          id="features-description"
        >
          Our comprehensive platform provides all the tools you need to manage
          your restaurant's online presence and boost your business.
        </p>
      </motion.div>

      <div className="space-y-20">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="overflow-hidden py-0 border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
              <CardContent className="p-0">
                <div
                  className={`grid md:grid-cols-2 gap-0 items-center ${
                    i % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Video Section */}
                  <div
                    className={`relative aspect-3/2 w-full ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <CldVideoPlayer
                      src={feature.publicId}
                      width="1080"
                      height="720"
                      colors={{
                        accent: "#ff6600",
                        base: "#ffffff",
                        text: "#000000",
                      }}
                      fontFace="Poppins"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section with background pattern */}
                  <div
                    className={`p-8 md:p-12 ${i % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                        {<feature.icon className="size-5" />}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Feature {String(i + 1).padStart(2, "0")}
                      </Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="size-4 text-primary mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
