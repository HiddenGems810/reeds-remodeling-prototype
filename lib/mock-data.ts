import {
  PaintRoller,
  Home,
  Hammer,
  Wrench,
  Bath,
  Ruler,
  Maximize,
} from "lucide-react";

export const services = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    description: "Eliminate scuffs, dated colors, and uneven surfaces with flawless, premium coverage.",
    icon: PaintRoller,
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    description: "Protect your home from weather damage while restoring faded, peeling curb appeal.",
    icon: Home,
  },
  {
    id: "cabinet-refinishing",
    title: "Cabinet Refinishing",
    description: "Upgrade a dated kitchen without the massive cost and disruption of a full replacement.",
    icon: Wrench,
  },
  {
    id: "drywall-repair",
    title: "Drywall Repair",
    description: "Erase water damage, cracks, and holes with seamless patching that vanishes under paint.",
    icon: Hammer,
  },
  {
    id: "remodeling",
    title: "Bathroom & Kitchen Remodeling",
    description: "Transform cramped, outdated rooms into functional, high-end spaces you love using.",
    icon: Bath,
  },
  {
    id: "flooring-trim",
    title: "Flooring, Trim & Finish Work",
    description: "Fix worn floors and missing trim that make a room feel cheap and unfinished.",
    icon: Ruler,
  },
  {
    id: "full-refresh",
    title: "Full Room Refresh",
    description: "Consolidate multiple trades into one organized project to completely reset a tired space.",
    icon: Maximize,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Submit Brief",
    description: "Tell us exactly what you need using our project builder. We review your scope to ensure we're the right fit.",
  },
  {
    step: "02",
    title: "Walkthrough & Estimate",
    description: "We visit your home to take exact measurements, assess surface conditions, and provide a firm, itemized estimate.",
  },
  {
    step: "03",
    title: "Transformation",
    description: "We protect your home, prepare the surfaces flawlessly, and deliver premium craftsmanship on schedule.",
  },
];

export const testimonials = [
  {
    quote:
      "Reeds made the entire process feel effortless. Their team was incredibly clean, respectful of our space, and the final paint job is flawless. The edges are sharp and the coverage is perfect.",
    author: "Sarah Jenkins",
    location: "Oakwood Neighborhood",
    service: "Interior Painting",
  },
  {
    quote:
      "I was nervous about refinishing our kitchen cabinets instead of replacing them. The Reeds crew delivered a factory-smooth finish that completely transformed the kitchen for a fraction of the cost.",
    author: "Michael T.",
    location: "Westside",
    service: "Cabinet Refinishing",
  },
  {
    quote:
      "Communication was top-notch from the first estimate to the final walkthrough. They showed up on time, protected all our furniture, and left the house cleaner than they found it.",
    author: "Elena R.",
    location: "Downtown Loft",
    service: "Full Room Refresh",
  },
];

export const faqs = [
  {
    question: "Do I need to know exact square footage?",
    answer:
      "No. Our project brief is designed to get a general understanding of the scope. We will handle all precise measurements during the in-person walkthrough.",
  },
  {
    question: "Can I book without photos?",
    answer:
      "Yes! While before photos help us understand the condition of the space, they are entirely optional. We'll assess everything in person anyway.",
  },
  {
    question: "How soon can someone come out?",
    answer:
      "We typically schedule walkthroughs within 2-3 business days of receiving your project brief, depending on availability.",
  },
  {
    question: "Do you handle repairs before painting?",
    answer:
      "Absolutely. Proper surface preparation is the secret to a premium finish. We handle drywall patching, texturing, caulking, and minor carpentry repairs before any paint is applied.",
  },
  {
    question: "Is this an official booking or estimate request?",
    answer:
      "This is an estimate request. Building a project brief helps us prepare for our consultation, but no work is scheduled and no payment is required until you approve a formal estimate.",
  },
  {
    question: "What happens after I submit?",
    answer:
      "Our team will review your project brief and reach out via phone or email within 24 hours to schedule your on-site walkthrough.",
  },
];
