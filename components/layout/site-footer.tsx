import * as React from "react";
import Link from "next/link";
import { PaintRoller, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0f2420] text-[#fdfbf7] py-16 md:py-24 relative overflow-hidden border-t border-[#1a3632]">
      {/* Decorative large logo outline */}
      <div className="absolute -bottom-32 -right-32 text-white/[0.03] pointer-events-none transform -rotate-12">
         <PaintRoller className="w-[500px] h-[500px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid gap-16 md:gap-12 md:grid-cols-12 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8 md:col-span-5 pr-4 md:pr-12">
            <Link href="/" className="flex items-center gap-4 group w-fit">
              <div className="bg-[#d97706] text-white p-2.5 rounded-xl transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                <PaintRoller className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-tight">
                  Reeds Remodeling
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">
                  Premium Home Services
                </span>
              </div>
            </Link>
            <p className="text-base text-white/70 leading-relaxed font-medium">
              We transform your raw spaces into finished, beautiful homes with an obsessive focus on craftsmanship, communication, and clean project management.
            </p>
          </div>
          
          {/* Contact Column */}
          <div className="flex flex-col gap-6 md:col-span-4">
            <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <span className="w-8 h-px bg-[#d97706]/50 inline-block"></span> Contact
            </h4>
            <div className="flex flex-col gap-5 text-sm text-white/80">
              <a href="tel:+1" className="flex items-center gap-4 hover:text-[#d97706] transition-colors font-medium group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#d97706]/10 transition-colors">
                  <Phone className="h-4 w-4 text-[#d97706]" />
                </div>
                (555) 123-4567
              </a>
              <a href="mailto:estimates@reedspainting.com" className="flex items-center gap-4 hover:text-[#d97706] transition-colors font-medium group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#d97706]/10 transition-colors">
                  <Mail className="h-4 w-4 text-[#d97706]" />
                </div>
                estimates@reedspainting.com
              </a>
              <span className="flex items-start gap-4 leading-relaxed font-medium">
                <div className="bg-white/5 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 shrink-0 text-[#d97706]" />
                </div>
                <div>Saginaw Township,<br />MI 48603</div>
              </span>
            </div>
          </div>
          
          {/* Legal Column */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <h4 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <span className="w-8 h-px bg-[#d97706]/50 inline-block"></span> Legal & Trust
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/70 font-medium">
              <Link href="#" className="hover:text-[#d97706] transition-colors flex items-center gap-1 group">
                Privacy Policy <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="#" className="hover:text-[#d97706] transition-colors flex items-center gap-1 group">
                Terms of Service <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <div className="mt-6 pt-6 border-t border-white/10 text-xs opacity-80 leading-relaxed bg-white/5 p-4 rounded-xl">
                <p className="font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Fully Licensed & Insured
                </p>
                <p className="font-mono text-white/50">State License #123456789</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row gap-6">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            &copy; {new Date().getFullYear()} Reeds Painting and Remodeling Service. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-[#d97706] bg-[#d97706]/10 px-3 py-1.5 rounded-md border border-[#d97706]/20">
               Frontend Product Demo
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
