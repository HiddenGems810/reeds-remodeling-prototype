"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectBriefSchema, type ProjectBrief } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ArrowRight, ArrowLeft, ClipboardList, Info, AlertCircle } from "lucide-react";
import { useProjectBrief } from "@/lib/store";
import { services as mockServices } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const steps = [
  { id: "property", title: "Property Details" },
  { id: "condition", title: "Surface Condition" },
  { id: "timeline", title: "Project Timeline" },
  { id: "budget", title: "Budget Comfort" },
  { id: "contact", title: "Your Information" },
  { id: "review", title: "Review Brief" },
];

export function ProjectBriefBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const { selectedServices } = useProjectBrief();

  // We want to force re-evaluation of services validation at the review step
  const [servicesError, setServicesError] = useState(false);

  const form = useForm<ProjectBrief>({
    resolver: zodResolver(projectBriefSchema),
    defaultValues: {
      projectType: "auto-filled-from-services",
      propertyType: "",
      scopeSize: "auto", // simplified from previous pass to rely on services
      surfaceCondition: "",
      timeline: "",
      budget: "",
      contact: {
        name: "",
        email: "",
        phone: "",
        city: "",
      },
    },
  });

  const watchAll = form.watch();

  const processNext = async () => {
    let isValid = false;
    const values = form.getValues();

    if (currentStep === 0) {
      isValid = !!values.propertyType;
      if (!isValid) form.setError("propertyType", { message: "Required" });
    } else if (currentStep === 1) {
      isValid = !!values.surfaceCondition;
      if (!isValid) form.setError("surfaceCondition", { message: "Required" });
    } else if (currentStep === 2) {
      isValid = !!values.timeline;
      if (!isValid) form.setError("timeline", { message: "Required" });
    } else if (currentStep === 3) {
      isValid = !!values.budget;
      if (!isValid) form.setError("budget", { message: "Required" });
    } else if (currentStep === 4) {
      isValid = await form.trigger("contact");
    } else if (currentStep === 5) {
      if (selectedServices.length === 0) {
        setServicesError(true);
        isValid = false;
      } else {
        setServicesError(false);
        isValid = true;
      }
    }

    if (isValid) {
      form.clearErrors();
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
        const el = document.getElementById('booking-top');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setIsSuccess(true);
      }
    }
  };

  const processBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isSuccess) {
    return (
      <section id="booking" className="bg-transparent py-32 relative">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex flex-col items-center gap-8 bg-surface p-12 md:p-16 border-2 border-primary rounded-sm shadow-2xl relative overflow-hidden"
          >
            {/* Blueprint accent */}
            <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-primary text-primary-foreground border-8 border-surface shadow-xl">
              <Check className="h-12 w-12 text-accent" />
            </div>
            
            <div className="relative z-10 space-y-4">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Your Reeds Project Brief is ready.</h2>
               <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
                 Your scope is defined, your timeline is set, and your property details are organized. 
               </p>
            </div>
            
            <div className="relative z-10 bg-accent/10 border border-accent/20 p-6 rounded-sm w-full mt-4">
               <p className="text-primary font-semibold">Frontend Demo Notice:</p>
               <p className="text-sm text-muted-foreground mt-2">
                 Backend submission will be connected after client approval. Normally, this Brief would be sent directly to the Reeds estimation team, and you would receive a call within 24 hours.
               </p>
            </div>

            <div className="relative z-10 mt-8 pt-8 border-t border-border-strong w-full flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="shadow-md" onClick={() => window.location.reload()}>
                 Return Home
               </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const OptionCard = ({ name, value, label, description }: { name: any; value: string; label: string; description?: string; }) => {
    const isSelected = form.watch(name) === value;
    return (
      <div
        className={cn(
          "cursor-pointer rounded-lg border-2 p-6 transition-all bg-surface",
          isSelected 
            ? "border-primary shadow-lg ring-4 ring-primary/5 bg-primary/5 scale-[1.01]" 
            : "border-border-strong hover:border-primary/50 hover:bg-surface-elevated hover:-translate-y-0.5"
        )}
        onClick={() => {
          form.setValue(name, value);
          form.clearErrors(name);
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
             <h4 className={cn("font-bold text-lg", isSelected ? "text-primary" : "text-primary/80")}>{label}</h4>
             {description && <p className="mt-2 text-sm text-muted-foreground font-medium leading-relaxed">{description}</p>}
          </div>
          <div className={cn(
            "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
            isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border-strong bg-surface group-hover:border-primary/50"
          )}>
            {isSelected && <Check className="h-4 w-4" strokeWidth={3} />}
          </div>
        </div>
      </div>
    );
  };

  const selectedServiceTitles = selectedServices.map(id => mockServices.find(s => s.id === id)?.title).filter(Boolean);

  return (
    <section id="booking" className="bg-transparent py-24 relative">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        
        <div id="booking-top" className="mb-16 flex flex-col items-center text-center">
          <div className="masking-tape w-32 mb-6 opacity-80"></div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Build Your Project Brief
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground font-medium">
            Choose a few details now so your first conversation starts with clarity, not guesswork.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
          
          {/* Main Form Area */}
          <div className="w-full lg:w-3/5 flex flex-col pb-32 lg:pb-0">
             
             {/* Progress Header */}
             <div className="mb-10">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <span className="text-primary font-display font-bold text-2xl">
                    {steps[currentStep].title}
                  </span>
               </div>
               <div className="h-2 w-full bg-border-strong rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-primary"
                   initial={{ width: 0 }}
                   animate={{ width: `${progress}%` }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                 />
               </div>
             </div>

             <div className="min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 0 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <OptionCard name="propertyType" value="single_family" label="Single Family Home" description="Standard detached residential property." />
                      <OptionCard name="propertyType" value="townhouse" label="Townhouse / Condo" description="Attached residential or high-rise." />
                      <OptionCard name="propertyType" value="commercial" label="Commercial Space" description="Office, retail, or industrial." />
                      <OptionCard name="propertyType" value="other" label="Other Property" description="Unique or custom property types." />
                      {form.formState.errors.propertyType && <p className="text-red-500 text-sm font-semibold sm:col-span-2 mt-2">{form.formState.errors.propertyType.message}</p>}
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <OptionCard name="surfaceCondition" value="clean" label="Ready to Paint/Finish" description="Surfaces are clean. No major repairs needed." />
                      <OptionCard name="surfaceCondition" value="minor_repair" label="Minor Repairs" description="Needs light patching, sanding, or caulking." />
                      <OptionCard name="surfaceCondition" value="major_repair" label="Major Prep Required" description="Significant drywall damage, peeling, or rot." />
                      <OptionCard name="surfaceCondition" value="unknown" label="Needs Assessment" description="I need Reeds to inspect the condition first." />
                      {form.formState.errors.surfaceCondition && <p className="text-red-500 text-sm font-semibold sm:col-span-2 mt-2">{form.formState.errors.surfaceCondition.message}</p>}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <OptionCard name="timeline" value="immediate" label="Immediate" description="Ready to begin as soon as possible." />
                      <OptionCard name="timeline" value="one_month" label="Within 1 Month" description="Looking to schedule very soon." />
                      <OptionCard name="timeline" value="three_months" label="1-3 Months" description="Planning ahead for a future date." />
                      <OptionCard name="timeline" value="flexible" label="Flexible" description="No strict deadline, gathering estimates." />
                      {form.formState.errors.timeline && <p className="text-red-500 text-sm font-semibold sm:col-span-2 mt-2">{form.formState.errors.timeline.message}</p>}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <OptionCard name="budget" value="economy" label="Budget Conscious" description="Looking for cost-effective, reliable solutions." />
                      <OptionCard name="budget" value="standard" label="Standard Excellence" description="High quality finish at market rates." />
                      <OptionCard name="budget" value="premium" label="Premium & Custom" description="High-end materials, custom detailing, flawless craft." />
                      <OptionCard name="budget" value="unsure" label="Need Guidance" description="I need a professional estimate first." />
                      {form.formState.errors.budget && <p className="text-red-500 text-sm font-semibold sm:col-span-2 mt-2">{form.formState.errors.budget.message}</p>}
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="bg-surface p-8 border border-border-strong shadow-md rounded-sm">
                      <div className="mb-6">
                        <h3 className="font-display text-2xl font-bold text-primary">Where should we send the estimate?</h3>
                        <p className="text-muted-foreground mt-2">Your information is secure and only used for project communication.</p>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary tracking-wide">Full Name</label>
                          <Input {...form.register("contact.name")} placeholder="John Smith" className="bg-surface-elevated border-border-strong h-12" />
                          {form.formState.errors.contact?.name && <p className="text-red-500 text-xs font-bold">{form.formState.errors.contact.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary tracking-wide">Phone Number</label>
                          <Input {...form.register("contact.phone")} placeholder="(555) 123-4567" className="bg-surface-elevated border-border-strong h-12" />
                          {form.formState.errors.contact?.phone && <p className="text-red-500 text-xs font-bold">{form.formState.errors.contact.phone.message}</p>}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-sm font-bold text-primary tracking-wide">Email Address</label>
                          <Input {...form.register("contact.email")} placeholder="john@example.com" type="email" className="bg-surface-elevated border-border-strong h-12" />
                          {form.formState.errors.contact?.email && <p className="text-red-500 text-xs font-bold">{form.formState.errors.contact.email.message}</p>}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-sm font-bold text-primary tracking-wide">City / ZIP Code</label>
                          <Input {...form.register("contact.city")} placeholder="City, State, ZIP" className="bg-surface-elevated border-border-strong h-12" />
                          {form.formState.errors.contact?.city && <p className="text-red-500 text-xs font-bold">{form.formState.errors.contact.city.message}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="bg-surface p-8 border-2 border-primary shadow-xl rounded-sm">
                      <div className="mb-6 border-b border-border-strong pb-6">
                        <h3 className="font-display text-2xl font-bold text-primary flex items-center gap-2">
                          <Check className="h-6 w-6 text-accent" /> Ready for Review
                        </h3>
                        <p className="text-muted-foreground mt-2 font-medium">
                          Please verify your project scope on the summary card. If everything looks correct, submit your brief below.
                        </p>
                      </div>
                      
                      {servicesError && (
                         <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-sm flex items-start gap-3">
                           <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                           <div>
                             <p className="font-bold text-red-800">No Services Selected</p>
                             <p className="text-sm text-red-700 mt-1">Please go back to the Services section and select at least one service to include in your project brief.</p>
                           </div>
                         </div>
                      )}

                      <div className="bg-surface-elevated p-6 rounded-sm border border-border-strong text-center">
                        <p className="font-bold text-primary mb-2">Final Step</p>
                        <p className="text-sm text-muted-foreground mb-6">By submitting, you request Reeds Painting and Remodeling Service to review your brief and contact you for an estimate.</p>
                        <Button onClick={processNext} size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-lg">
                          Submit My Reeds Project Brief
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
             </div>

             {/* Desktop Navigation */}
             <div className="hidden lg:flex mt-12 items-center justify-between pt-6 border-t border-border-strong">
                <Button
                  variant="ghost"
                  onClick={processBack}
                  disabled={currentStep === 0}
                  className={cn(currentStep === 0 && "invisible", "font-bold text-primary")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
                {currentStep < steps.length - 1 && (
                  <Button onClick={processNext} size="lg" className="px-8 font-bold shadow-md">
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
             </div>
          </div>

          {/* Sticky Summary Column */}
          <div className="w-full lg:w-2/5">
             <div className="sticky top-28 bg-surface border-2 border-border-strong shadow-2xl rounded-lg overflow-hidden">
                <div className="bg-primary p-8 text-primary-foreground flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-foreground/10 p-3 rounded-xl">
                      <ClipboardList className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-3xl text-primary-foreground">Your Reeds Project Brief</h3>
                      <p className="text-sm text-primary-foreground/80 font-medium mt-1">Organized. Clear. Ready for estimate.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-8 bg-surface-elevated/50">
                   {/* Selected Services */}
                   <div className="bg-surface p-6 rounded-lg border border-border-strong shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" /> Required Services
                     </p>
                     {selectedServiceTitles.length > 0 ? (
                       <div className="flex flex-col gap-3">
                         {selectedServiceTitles.map((title, i) => (
                           <div key={i} className="flex items-center gap-3 bg-surface-elevated p-4 border border-border-strong rounded-md">
                             <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-sm"></div>
                             <span className="font-bold text-primary text-base">{title}</span>
                           </div>
                         ))}
                       </div>
                     ) : (
                       <div className="flex items-center gap-3 text-sm text-muted-foreground bg-surface-elevated p-6 border border-dashed border-border-strong rounded-md">
                         <Info className="h-5 w-5 text-accent shrink-0" />
                         <span className="font-medium">No services selected yet. Select services above.</span>
                       </div>
                     )}
                   </div>

                   {/* Step Answers */}
                   <div className="bg-surface p-6 rounded-lg border border-border-strong shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-accent" /> Scope Details
                     </p>
                     <div className="space-y-4">
                       <div className="flex justify-between items-center gap-4 py-3 border-b border-border-strong/50 last:border-0">
                         <span className="text-sm font-semibold text-muted-foreground">Property</span>
                         <span className="text-base font-bold text-primary text-right capitalize">{watchAll.propertyType ? watchAll.propertyType.replace("_", " ") : "—"}</span>
                       </div>
                       <div className="flex justify-between items-center gap-4 py-3 border-b border-border-strong/50 last:border-0">
                         <span className="text-sm font-semibold text-muted-foreground">Condition</span>
                         <span className="text-base font-bold text-primary text-right capitalize">{watchAll.surfaceCondition ? watchAll.surfaceCondition.replace("_", " ") : "—"}</span>
                       </div>
                       <div className="flex justify-between items-center gap-4 py-3 border-b border-border-strong/50 last:border-0">
                         <span className="text-sm font-semibold text-muted-foreground">Timeline</span>
                         <span className="text-base font-bold text-primary text-right capitalize">{watchAll.timeline ? watchAll.timeline.replace("_", " ") : "—"}</span>
                       </div>
                       <div className="flex justify-between items-center gap-4 py-3 border-b border-border-strong/50 last:border-0">
                         <span className="text-sm font-semibold text-muted-foreground">Budget</span>
                         <span className="text-base font-bold text-primary text-right capitalize">{watchAll.budget || "—"}</span>
                       </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t-2 border-border-strong p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="container mx-auto flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={processBack}
              disabled={currentStep === 0}
              className={cn(currentStep === 0 && "opacity-0 pointer-events-none", "px-4 font-bold")}
            >
              Back
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button onClick={processNext} size="lg" className="flex-1 font-bold shadow-md">
                Next Step
              </Button>
            ) : (
              <Button onClick={processNext} size="lg" className="flex-1 font-bold shadow-md bg-accent text-accent-foreground hover:bg-accent/90">
                Submit Brief
              </Button>
            )}
         </div>
      </div>
    </section>
  );
}
