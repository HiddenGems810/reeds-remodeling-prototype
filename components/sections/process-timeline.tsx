"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/mock-data";

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-transparent py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A clear, reliable process so you always know what comes next.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-start bg-surface p-8 sm:p-10 rounded-lg shadow-sm hover:shadow-lg border border-border-strong hover:border-primary/50 transition-all"
              >
                <div className="z-10 flex h-16 w-16 mb-8 shrink-0 items-center justify-center rounded-sm bg-primary/5 font-mono font-bold text-2xl text-primary shadow-sm border border-border-strong group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.step}
                </div>
                
                <div>
                  <h4 className="font-display font-bold text-2xl text-primary mb-4">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
