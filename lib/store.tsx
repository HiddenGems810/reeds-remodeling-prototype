"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProjectBrief } from "@/lib/validation";

interface ProjectBriefContextType {
  selectedServices: string[];
  toggleService: (serviceId: string) => void;
  isServiceSelected: (serviceId: string) => boolean;
  briefData: Partial<ProjectBrief>;
  updateBriefData: (data: Partial<ProjectBrief>) => void;
}

const ProjectBriefContext = createContext<ProjectBriefContextType | undefined>(undefined);

export function ProjectBriefProvider({ children }: { children: ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [briefData, setBriefData] = useState<Partial<ProjectBrief>>({});

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const isServiceSelected = (serviceId: string) => selectedServices.includes(serviceId);

  const updateBriefData = (data: Partial<ProjectBrief>) => {
    setBriefData((prev) => ({ ...prev, ...data }));
  };

  return (
    <ProjectBriefContext.Provider
      value={{
        selectedServices,
        toggleService,
        isServiceSelected,
        briefData,
        updateBriefData,
      }}
    >
      {children}
    </ProjectBriefContext.Provider>
  );
}

export function useProjectBrief() {
  const context = useContext(ProjectBriefContext);
  if (context === undefined) {
    throw new Error("useProjectBrief must be used within a ProjectBriefProvider");
  }
  return context;
}
