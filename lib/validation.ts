import { z } from "zod";

export const projectBriefSchema = z.object({
  projectType: z.string().min(1, "Please select a project type."),
  propertyType: z.string().min(1, "Please select a property type."),
  scopeSize: z.string().min(1, "Please define the scope size."),
  surfaceCondition: z.string().min(1, "Please describe the surface condition."),
  timeline: z.string().min(1, "Please select a timeline."),
  budget: z.string().min(1, "Please select a budget comfort level."),
  contact: z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    city: z.string().min(2, "Please enter your city."),
  }),
});

export type ProjectBrief = z.infer<typeof projectBriefSchema>;
