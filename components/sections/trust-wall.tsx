"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Brush, Search, Ear } from "lucide-react";

const craftsmanshipValues = [
  { icon: Brush, title: "Clean Work Areas", desc: "We protect your furniture and clean up daily." },
  { icon: Ear, title: "Clear Communication", desc: "No guessing games. You know the schedule." },
  { icon: Search, title: "Meticulous Prep", desc: "Surface preparation is the secret to longevity." },
  { icon: ShieldCheck, title: "Trusted Craft", desc: "A team you can feel comfortable having in your home." },
];

export function TrustWall() {
  return (
    <section id="testimonials" className="bg-transparent py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="masking-tape w-32 mb-6 opacity-70"></div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Client Experiences
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground font-medium">
            Real feedback from local remodeling and painting projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-surface-elevated border-2 border-border-strong shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full relative">
                  {/* Service Tag */}
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                      {testimonial.service}
                    </span>
                  </div>

                  <div className="flex gap-1.5 mb-6 text-accent">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-lg text-primary font-medium leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="pt-6 border-t-2 border-border border-dashed flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-primary leading-none mb-1">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.location}</p>
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
