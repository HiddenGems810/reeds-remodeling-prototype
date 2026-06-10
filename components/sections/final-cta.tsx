"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-xl bg-surface p-10 md:p-16 shadow-xl border-2 border-primary/10 relative overflow-hidden"
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8 text-sm text-accent font-bold tracking-wide uppercase">
              Take The Next Step
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl leading-tight">
              Start your project the right way.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground font-medium">
              Build your project brief online. We'll review your scope and provide a clear, firm estimate before a single tool is brought inside.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#booking">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-lg hover:-translate-y-1 transition-transform bg-primary text-primary-foreground">
                  Start My Project Brief <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-2 border-border-strong bg-transparent hover:bg-primary/5 hover:border-primary/30 transition-all">
                <Phone className="mr-2 h-5 w-5 text-primary" /> Call (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
