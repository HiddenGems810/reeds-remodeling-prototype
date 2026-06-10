"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  openValue: string | null;
  toggle: (value: string) => void;
}>({
  openValue: null,
  toggle: () => {},
});

export function Accordion({
  children,
  collapsible = true,
  className,
}: {
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}) {
  const [openValue, setOpenValue] = React.useState<string | null>(null);

  const toggle = (value: string) => {
    if (openValue === value && collapsible) {
      setOpenValue(null);
    } else {
      setOpenValue(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  // A simple hack: pass value to children using React.Children.map if needed, 
  // but it's cleaner to just clone elements or rely on context in children.
  return (
    <div className={cn("border-b", className)} data-value={value}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return React.cloneElement(child, { value } as any);
        }
        return child;
      })}
    </div>
  );
}

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
  const { openValue, toggle } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <h3 className="flex">
      <button
        ref={ref}
        type="button"
        onClick={() => value && toggle(value)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </h3>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> & { value?: string; children?: React.ReactNode }
>(({ className, children, value, ...props }, ref) => {
  const { openValue } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          {...props}
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
AccordionContent.displayName = "AccordionContent";
