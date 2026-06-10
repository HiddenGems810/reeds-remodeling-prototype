"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Brush, Home, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-transparent py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            See the Transformation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground font-medium">
            Drag the slider to see how premium craftsmanship elevates a space.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          {/* Architectural Frame Wrapper */}
          <div className="relative rounded-xl bg-surface-elevated p-2 shadow-2xl border border-border-strong mx-auto">
            {/* Main Slider */}
            <div
              ref={containerRef}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden rounded-lg bg-surface select-none group"
            >
            {/* After (Background) - Full Image underneath */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
              <Image 
                src="/images/after-01.jpg" 
                alt="After Reeds Remodeling" 
                fill 
                className="object-cover pointer-events-none" 
                priority
              />
              {/* After Label & Caption */}
              <div className="absolute bottom-6 right-6 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-sm shadow-xl border border-border-strong hidden sm:block pointer-events-none z-10">
                <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">After Transformation</div>
                <div className="text-xs font-medium text-primary">Clean finish / repaired surface / refreshed result</div>
              </div>
            </div>

            {/* Before (Foreground) - Clipped by slider */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image 
                src="/images/before-01.jpg" 
                alt="Before Reeds Remodeling" 
                fill 
                className="object-cover pointer-events-none" 
                priority
              />
              {/* Before Label & Caption */}
              <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-md px-4 py-3 rounded-sm shadow-xl border border-border-strong hidden sm:block pointer-events-none w-max z-10">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Before Start</div>
                <div className="text-xs font-medium text-primary">Worn surface / dated finish / unclear scope</div>
              </div>
            </div>

            {/* Visual Slider Handle */}
            <div
              className="absolute inset-y-0 z-20 flex w-1 items-center justify-center bg-accent shadow-[0_0_20px_rgba(217,119,6,0.8)] pointer-events-none transition-all duration-75 group-hover:bg-accent/80"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl ring-4 ring-background/80 border border-accent-foreground/20 group-active:scale-95 group-active:bg-accent transition-transform duration-150">
                <MoveHorizontal className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>

            {/* Invisible Native Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(parseFloat(e.target.value))}
              className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize m-0 touch-pan-y"
              aria-label="Image comparison slider"
            />
          </div>
          
          {/* Caption Bar */}
          <div className="bg-primary/5 border-t border-border-strong px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-muted-foreground mt-2 rounded-b-xl">
             <div className="flex items-center gap-2">
               <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
               <span className="text-primary font-bold">Project:</span> Oakwood Exterior
             </div>
             <div className="flex items-center gap-2 mt-2 sm:mt-0">
               <span className="text-primary font-bold">Scope:</span> Full Exterior Paint & Trim Repair
             </div>
          </div>
        </div>

          {/* 3 Standard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-surface border-border-strong shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-full mb-4 border border-border">
                    <Brush className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">1. Site Protection</h4>
                  <p className="text-sm text-muted-foreground font-medium">Floors covered, furniture masked, and sharp tape lines established before a single drop of paint.</p>
               </CardContent>
            </Card>
            <Card className="bg-surface border-border-strong shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-full mb-4 border border-border">
                    <Hammer className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">2. Surface Prep</h4>
                  <p className="text-sm text-muted-foreground font-medium">We scrape, sand, patch, and caulk every imperfection so the final coat sits on a flawless foundation.</p>
               </CardContent>
            </Card>
            <Card className="bg-surface border-border-strong shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-full mb-4 border border-border">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">3. Premium Finish</h4>
                  <p className="text-sm text-muted-foreground font-medium">Two coats of premium commercial-grade paint, back-rolled for consistent texture and durability.</p>
               </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
