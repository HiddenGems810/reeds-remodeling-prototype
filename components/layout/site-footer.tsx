import * as React from "react";
import Link from "next/link";
import { PaintRoller, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-6 md:col-span-2">
            <Link href="/" className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-sm shadow-sm">
                <PaintRoller className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary leading-tight">
                  Reeds Painting and Remodeling Service
                </span>
              </div>
            </Link>
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              Premium residential painting and remodeling services. We transform your raw spaces into finished, beautiful homes. Painting • Remodeling • Surface Repair • Project Planning.
            </p>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-lg font-bold text-primary">Contact Reeds</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="tel:+1" className="flex items-center gap-3 hover:text-accent transition-colors font-medium">
                <Phone className="h-5 w-5 text-primary" /> (555) 123-4567
              </a>
              <a href="mailto:estimates@reedspainting.com" className="flex items-center gap-3 hover:text-accent transition-colors font-medium">
                <Mail className="h-5 w-5 text-primary" /> estimates@reedspainting.com
              </a>
              <span className="flex items-start gap-3 leading-relaxed">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" /> 
                123 Remodel Way,<br />Craftsman City, ST 12345
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="font-display text-lg font-bold text-primary">Legal & Trust</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
              <div className="mt-4 pt-4 border-t border-border-strong text-xs opacity-80 leading-relaxed">
                <p className="font-semibold text-primary">Fully Licensed & Insured</p>
                <p>State License #123456789</p>
                <p className="mt-2 text-accent italic">(Placeholder License Info)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-border-strong pt-8 md:flex-row gap-4">
          <p className="text-sm font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} Reeds Painting and Remodeling Service. All rights reserved.
          </p>
          <p className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-sm border border-accent/20">
            Frontend Product Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
