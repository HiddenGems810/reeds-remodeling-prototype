"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { faqs } from "@/lib/mock-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="bg-transparent py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Common Questions
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground font-medium">
              Clear answers to help you prepare for your project.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-6 sm:p-8 rounded-sm shadow-sm border border-border-strong"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border-strong last:border-0">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
