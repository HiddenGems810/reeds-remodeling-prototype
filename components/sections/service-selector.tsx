"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useProjectBrief } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ServiceSelector() {
  const { toggleService, isServiceSelected } = useProjectBrief();

  return (
    <section id="services" className="bg-transparent py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="masking-tape w-32 mb-6 opacity-70"></div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Select Your Services
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-medium">
            From precision painting to full-scale remodeling, select the specific services you need for your Reeds Project Brief.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const selected = isServiceSelected(service.id);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {/* Premium Material Card */}
                <div 
                  className={cn(
                    "group relative flex flex-col h-full bg-surface transition-all duration-300 rounded-lg overflow-hidden",
                    selected 
                      ? "border-2 border-primary ring-4 ring-accent/20 shadow-lg scale-[1.02]" 
                      : "border border-border-strong hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
                  )}
                >
                  {/* Top Texture Strip */}
                  <div className={cn(
                    "h-1.5 w-full transition-colors",
                    selected ? "bg-accent" : "bg-transparent group-hover:bg-primary/20"
                  )}></div>

                  {/* Card Header area */}
                  <div className={cn(
                    "p-8 pb-4 flex justify-between items-start transition-colors",
                    selected ? "bg-primary/5" : "bg-transparent"
                  )}>
                    <div className={cn(
                      "p-3 rounded-xl transition-colors",
                      selected ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    )}>
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    {selected && (
                      <span className="bg-accent text-accent-foreground rounded-full p-1.5 shadow-sm">
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  
                  {/* Card Body */}
                  <div className={cn(
                    "p-8 pt-4 flex flex-col flex-1 transition-colors",
                    selected ? "bg-primary/5" : "bg-transparent"
                  )}>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 flex-1 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <Button 
                      variant={selected ? "default" : "outline"} 
                      className={cn(
                        "w-full justify-between font-bold h-12 transition-all",
                        selected 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                          : "border-border-strong text-primary hover:border-primary hover:bg-primary/5"
                      )}
                      onClick={() => toggleService(service.id)}
                    >
                      <span>{selected ? "Added to Brief" : "Add to Project Brief"}</span>
                      {selected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
