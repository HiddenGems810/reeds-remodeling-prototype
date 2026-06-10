"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

const valueProps = [
  {
    icon: Clock,
    title: "Guaranteed Timelines",
    description: "We show up when we say we will, and we finish when we promise. Your time is respected from day one."
  },
  {
    icon: ShieldCheck,
    title: "Clean Workspace Guarantee",
    description: "Your home is not a construction site. We prep meticulously and clean up every single day before we leave."
  },
  {
    icon: CheckCircle2,
    title: "Fixed-Price Estimates",
    description: "No hidden fees, no surprise change orders. The price on your final estimate is the price you pay."
  }
];

export function ClientValueSection() {
  return (
    <section id="why-reeds" className="bg-transparent py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/10 px-3 py-1 mb-6 text-sm text-accent font-bold tracking-wide uppercase">
              The Reeds Difference
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl leading-tight">
              Remodeling without the headaches.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-medium leading-relaxed">
              We believe that updating your home should be exciting, not stressful. By combining strict project management with premium craftsmanship, we deliver a contracting experience that actually respects you and your property.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col gap-4"
          >
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-surface p-6 sm:p-8 rounded-lg border-2 border-border-strong shadow-sm hover:border-primary/50 transition-all hover:shadow-md flex items-start gap-6 group">
                <div className="h-14 w-14 shrink-0 rounded-full bg-primary/5 border border-border flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <prop.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2 text-xl">{prop.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
