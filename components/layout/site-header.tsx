"use client";

import * as React from "react";
import Link from "next/link";
import { PaintRoller, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="w-full max-w-5xl bg-background/80 backdrop-blur-xl border border-border-strong rounded-full shadow-lg pointer-events-auto flex items-center justify-between px-4 py-2">
        
        {/* Left: Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 group px-2">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-full transition-transform group-hover:scale-105 shadow-sm">
            <PaintRoller className="h-4 w-4" />
          </div>
          <div className="flex flex-col justify-center pt-0.5">
            <span className="font-display text-sm md:text-base font-bold tracking-tight text-primary leading-none mb-1">
              Reeds Painting and Remodeling Service
            </span>
            <span className="text-[9px] text-primary/60 uppercase font-bold tracking-widest hidden lg:block">
              Painting • Drywall • Remodeling • Local Project Support
            </span>
          </div>
        </Link>

        {/* Center: Navigation (Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-6 px-4">
          <Link href="#services" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="#why-reeds" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            Value
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link href="#booking">
            <Button size="sm" className="rounded-full shadow-sm font-bold tracking-wide group h-9 px-4 text-xs">
              Project Brief <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
      </div>
    </motion.header>
  );
}
