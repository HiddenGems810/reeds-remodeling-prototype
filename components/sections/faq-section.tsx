"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/mock-data";
import { MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#f8f7f4] relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#e5e5e5]/50 to-transparent blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Left Column: Sticky Header & Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-primary/10 text-primary/70 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                  Knowledge Base
                </div>
                <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
                  You've got questions.<br/>
                  <span className="text-[#d97706] italic pr-4">We've got answers.</span>
                </h2>
                <p className="text-lg text-primary/70 font-medium mb-10 max-w-md leading-relaxed">
                  Everything you need to know about preparing for your project, our seamless process, and the exact standards we hold ourselves to.
                </p>
                
                {/* Contact Card */}
                <div className="bg-[#1a3632] text-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(26,54,50,0.4)] relative overflow-hidden hidden md:block max-w-sm border border-white/10">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className="w-14 h-14 bg-[#d97706] rounded-2xl flex items-center justify-center shadow-inner rotate-3">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Still unsure?</h3>
                      <p className="text-sm text-white/70 font-medium mt-1">Let's discuss your unique space.</p>
                    </div>
                  </div>
                  <button className="w-full bg-white text-[#1a3632] font-bold py-3.5 rounded-xl hover:bg-[#fdfbf7] transition-colors shadow-sm mt-2 relative z-10 flex items-center justify-center gap-2 group">
                    <span>Book a Discovery Call</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-none bg-white/60 backdrop-blur-xl rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-primary/10 px-4 sm:px-8 transition-all duration-300 hover:bg-white/90 data-[state=open]:bg-white data-[state=open]:shadow-[0_20px_40px_-15px_rgba(26,54,50,0.1)] data-[state=open]:border-primary/20 data-[state=open]:scale-[1.01]"
                  >
                    <AccordionTrigger className="text-left font-display text-lg sm:text-xl font-bold text-primary hover:text-primary hover:no-underline py-6 transition-colors [&>svg]:text-[#d97706] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:bg-[#d97706]/10 [&>svg]:rounded-full [&>svg]:p-1 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:bg-[#d97706] [&[data-state=open]>svg]:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary/70 leading-relaxed pb-6 text-base sm:text-lg font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
