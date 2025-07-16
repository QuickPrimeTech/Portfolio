import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything Your Restaurant Needs
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
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
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-0">
                  <div
                    className={`grid md:grid-cols-2 gap-0 items-center ${
                      i % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 ${
                        i % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          {React.cloneElement(feature.icon, {
                            className: "size-10",
                          })}
                        </div>
                      </div>
                      <Image
                        src={`/placeholder.svg?height=320&width=480`}
                        width={480}
                        height={320}
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-20"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`p-8 md:p-12 ${
                        i % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                          {feature.icon}
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
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="rounded-full">
                          Learn More
                          <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="rounded-full bg-transparent"
                        >
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
