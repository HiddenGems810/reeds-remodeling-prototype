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
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-2xl border border-primary/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto flex items-center justify-between px-5 py-3 transition-all">
        
        {/* Left: Brand Lockup */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="bg-[#1a3632] text-white p-2 rounded-xl transition-transform group-hover:scale-105 shadow-inner">
            <PaintRoller className="h-5 w-5" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-base md:text-lg font-bold tracking-tight text-[#1a3632] leading-none mb-1">
              Reeds Remodeling
            </span>
            <span className="text-[10px] text-[#1a3632]/60 uppercase font-bold tracking-widest hidden lg:block">
              Premium Painting & Surface Repair
            </span>
          </div>
        </Link>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8 bg-black/5 px-6 py-2.5 rounded-xl">
          <Link href="#services" className="text-[11px] font-bold uppercase tracking-widest text-[#1a3632]/70 hover:text-[#d97706] transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-[11px] font-bold uppercase tracking-widest text-[#1a3632]/70 hover:text-[#d97706] transition-colors">
            Our Process
          </Link>
          <Link href="#why-reeds" className="text-[11px] font-bold uppercase tracking-widest text-[#1a3632]/70 hover:text-[#d97706] transition-colors">
            The Standard
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link href="#booking">
            <Button size="sm" className="rounded-xl shadow-md font-bold tracking-wide group h-10 px-5 text-xs bg-[#1a3632] hover:bg-[#2d4a46] text-white transition-all">
              Start Project <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
      </div>
    </motion.header>
  );
}
