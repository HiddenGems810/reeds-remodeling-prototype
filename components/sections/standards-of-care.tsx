"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Shield, MessageSquare, Award, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Flawless Site Protection",
    description: "Drop cloths, plastic masking, and floor runners before a single tool is brought inside."
  },
  {
    icon: MessageSquare,
    title: "Constant Communication",
    description: "Daily progress updates so you never have to wonder what's happening in your own home."
  },
  {
    icon: Award,
    title: "Uncompromising Craft",
    description: "We don't cut corners on prep. Every surface is sanded, patched, and primed for a lifetime finish."
  },
  {
    icon: Sparkles,
    title: "Immaculate Clean Up",
    description: "We vacuum, sweep, and pack out all debris daily. Your home stays a home, not a construction site."
  }
];

export function StandardsOfCare() {
  return (
    <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4">The Reeds Standard</span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-primary-foreground">
            We respect your home as much as the craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="bg-accent/20 p-4 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary-foreground">{pillar.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
