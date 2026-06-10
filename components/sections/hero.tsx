"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClipboardList } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[95vh] flex-col overflow-hidden bg-background pt-32 pb-16 md:pt-40">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25 motion-reduce:hidden"
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Text Content - Centered above the canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-surface/90 backdrop-blur-sm px-4 py-1.5 text-sm text-primary shadow-sm font-semibold tracking-wide uppercase">
            Reeds Painting and Remodeling Service
          </div>
          
          <h1 className="text-balance font-display font-bold tracking-tight text-primary leading-tight drop-shadow-sm">
            We organize your project <br className="hidden sm:block" />
            <span className="text-accent relative inline-block mx-2">
              before
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
            </span> 
            the first call.
          </h1>
          
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl leading-relaxed font-medium">
            From raw surfaces to finished rooms. Build your custom Project Brief below, and we&apos;ll provide a clear, accurate estimate tailored to your exact scope.
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row mt-6 justify-center">
            <Link href="#booking">
              <Button size="lg" className="w-full sm:w-auto shadow-md text-base rounded-full px-8 h-12">
                Build My Reeds Project Brief
              </Button>
            </Link>
            <Link href="#why-reeds">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base rounded-full px-8 h-12 bg-surface/80 backdrop-blur-sm border-border-strong">
                Why Choose Reeds?
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Surface Transformation Canvas (Visual Thesis) */}
        {/* Surface Transformation Canvas (Visual Thesis) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[550px] md:h-[650px] w-full max-w-6xl rounded-xl shadow-[0_20px_80px_-20px_rgba(26,54,50,0.5)] border border-border-strong overflow-hidden flex"
        >
          {/* Left Side: Raw Plaster / Prep (50%) */}
          <div 
            className="w-[50%] h-full bg-[#f8f7f4] relative flex flex-col p-8 z-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          >
            {/* Phase 01 Badge */}
            <div className="absolute top-8 left-8 bg-[#fdfbf7]/80 backdrop-blur-md text-primary px-4 py-2 text-[10px] sm:text-xs font-mono font-bold shadow-sm flex items-center gap-2 rounded-full border border-primary/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              PHASE_01: PREP
            </div>
            
            {/* Authentic Architectural Markings */}
            <div className="absolute top-1/3 left-8 text-[10px] text-primary/30 font-mono tracking-widest rotate-90 origin-left hidden sm:block">
              ELEVATION A-1
            </div>

            {/* Drywall Patches (Primer/Compound) */}
            <div className="absolute top-40 left-16 w-32 h-24 bg-white/40 mix-blend-overlay rounded-[30%_70%_70%_30%/30%_30%_70%_70%] filter blur-sm"></div>
            <div className="absolute top-48 left-32 w-24 h-32 bg-white/50 mix-blend-overlay rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-sm"></div>

            {/* Pencil Measurement Lines */}
            <div className="absolute bottom-32 left-12 h-16 w-32 border-l border-b border-primary/20 hidden sm:block">
               <span className="absolute -bottom-4 right-0 text-primary/30 font-mono text-[9px]">RAW DRYWALL</span>
               <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-primary/30 font-mono text-[9px] -rotate-90">12' - 0"</span>
            </div>

            {/* Drop Cloth Floor */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-[#e5e5e5]/80 border-t border-[#d4d4d4]/60">
              {/* Subtle wrinkles */}
              <div className="w-full h-full opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}></div>
            </div>
          </div>

          {/* Right Side: Finished Paint (50%) */}
          <div className="w-[50%] h-full bg-[#1a3632] relative flex flex-col p-8 z-20 shadow-[-15px_0_30px_-10px_rgba(0,0,0,0.6)]">
            
            {/* Paint Sheen (Soft Light Falloff) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none"></div>
            
            {/* Subtle Roller Stroke Texture */}
            <div className="absolute inset-y-0 right-1/4 w-32 bg-gradient-to-r from-transparent via-white/5 to-transparent mix-blend-overlay opacity-30 pointer-events-none"></div>

            {/* Phase 02 Badge */}
            <div className="absolute top-8 right-8 bg-[#1a3632]/50 backdrop-blur-md text-white border border-white/10 px-4 py-2 text-[10px] sm:text-xs font-mono font-bold shadow-sm flex items-center gap-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#d97706]"></div>
              PHASE_02: FINISH
            </div>

            {/* Baseboard */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-[#fdfbf7] border-t-2 border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] flex items-start">
               <div className="w-full h-1 bg-gradient-to-b from-black/5 to-transparent"></div>
            </div>

            {/* Premium Paint Swatch Fan */}
            <div className="absolute top-32 right-16 flex flex-col items-center z-30 hidden lg:flex">
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-28 bg-[#1a3632] rounded-sm shadow-2xl border-2 border-[#fdfbf7] absolute origin-bottom-right rotate-[-12deg]"
              />
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-20 h-28 bg-[#2d4a46] rounded-sm shadow-2xl border-2 border-[#fdfbf7] absolute origin-bottom rotate-[-2deg]"
              />
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-20 h-28 bg-[#d97706] rounded-sm shadow-2xl border-2 border-[#fdfbf7] absolute origin-bottom-left rotate-[10deg]"
              />
            </div>
          </div>

          {/* Architectural Boundary Tape */}
          <div className="absolute top-0 bottom-0 left-1/2 z-30 flex justify-center w-0">
             {/* Realistic Painter's Tape */}
             <div className="absolute top-1/4 h-64 w-8 bg-[#EADDCD]/90 mix-blend-multiply rotate-1 shadow-sm opacity-60 transform -translate-x-1/2"></div>
          </div>

          {/* Floating Project Brief Preview Card (Centered Bridge) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-2xl p-8 rounded-2xl shadow-[0_20px_60px_-15px_rgba(26,54,50,0.4),0_0_40px_rgba(255,255,255,0.5)] border border-white/60 w-[90%] sm:w-[440px] z-40 flex flex-col"
          >
             {/* Subtle internal glowing orb */}
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a3632] text-[#fdfbf7] text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
               What you get before booking
             </div>

             <div className="flex items-center gap-4 mb-6 pb-5 border-b border-primary/10 mt-2">
               <div className="bg-[#1a3632] text-white p-3 rounded-xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] hidden sm:block relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                 <ClipboardList className="h-6 w-6 relative z-10" />
               </div>
               <div>
                 <h3 className="font-display font-bold text-2xl text-[#1a3632] leading-none mb-1.5">Example Project Scope</h3>
                 <p className="text-[10px] text-[#1a3632]/60 uppercase font-bold tracking-widest">Built directly from your brief</p>
               </div>
             </div>
             
             {/* Service Chips */}
             <div className="flex flex-wrap gap-2 mb-6">
               <span className="text-[10px] font-bold uppercase tracking-widest bg-white/80 text-[#d97706] border border-[#d97706]/30 shadow-sm px-3 py-1.5 rounded-md">Interior Painting</span>
               <span className="text-[10px] font-bold uppercase tracking-widest bg-white/80 text-[#d97706] border border-[#d97706]/30 shadow-sm px-3 py-1.5 rounded-md">Drywall Repair</span>
             </div>

             {/* Micro Labels Grid */}
             <div className="grid grid-cols-2 gap-y-5 gap-x-6 mb-6">
               <div className="flex flex-col gap-1">
                 <span className="text-[9px] text-[#1a3632]/50 uppercase font-bold tracking-widest">Service</span>
                 <span className="text-sm font-bold text-[#1a3632]">Interior Painting</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[9px] text-[#1a3632]/50 uppercase font-bold tracking-widest">Surface</span>
                 <span className="text-sm font-bold text-[#1a3632]">Drywall Repair</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[9px] text-[#1a3632]/50 uppercase font-bold tracking-widest">Scope</span>
                 <span className="text-sm font-bold text-[#1a3632]">Full room</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[9px] text-[#1a3632]/50 uppercase font-bold tracking-widest">Timeline</span>
                 <span className="text-sm font-bold text-[#1a3632]">Standard (2-3 wks)</span>
               </div>
               <div className="flex flex-col gap-1 col-span-2">
                 <span className="text-[9px] text-[#1a3632]/50 uppercase font-bold tracking-widest">Finish Standard</span>
                 <span className="text-sm font-bold text-[#1a3632] flex items-center gap-2">
                    Premium Craftsman 
                    <span className="w-2 h-2 rounded-full bg-[#d97706]"></span>
                 </span>
               </div>
             </div>

             <div className="space-y-3 pt-5 border-t border-primary/10 mt-auto bg-white/40 -mx-8 -mb-8 px-8 pb-8 rounded-b-2xl">
               <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#1a3632]/60 pt-2">
                 <span>Estimation Readiness</span>
                 <span className="text-[#d97706] font-black">100% READY</span>
               </div>
               <div className="h-2 w-full bg-[#1a3632]/10 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#d97706]/60 to-[#d97706] rounded-full relative"
                  >
                     <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
                  </motion.div>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
