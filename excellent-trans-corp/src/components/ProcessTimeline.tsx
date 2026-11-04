"use client";

import { processSteps } from "@/lib/config";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Circle className={className} />;
  return <Icon className={className} />;
}

export function ProcessTimeline() {
  return (
    <div>
      {/* Desktop: Horizontal */}
      <div className="hidden md:flex items-start gap-0">
        {processSteps.map((step, index) => (
          <div key={step.step} className="flex-1 flex flex-col items-center text-center relative">
            {/* Connector line */}
            {index < processSteps.length - 1 && (
              <div className="absolute top-6 left-1/2 w-full flex items-center">
                <div className="w-full h-px bg-gray-200 ml-6 mr-[-1px]" />
                <ArrowRight className="w-4 h-4 text-[#DC2626] flex-shrink-0 mr-[-8px]" />
              </div>
            )}

            {/* Step Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#DC2626]/10 border-2 border-[#DC2626]/30 flex items-center justify-center mb-3 group-hover:bg-[#DC2626] transition-colors">
              <DynamicIcon name={step.icon} className="w-5 h-5 text-[#DC2626]" />
            </div>

            {/* Step Number */}
            <span className="text-xs font-bold text-[#DC2626] mb-1">STEP {step.step}</span>

            {/* Title */}
            <h3 className="font-bold text-[#10243A] text-sm mb-1.5 px-2">{step.title}</h3>

            {/* Description */}
            <p className="text-xs text-[#344054]/70 leading-relaxed px-3 max-w-[160px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: Vertical */}
      <div className="md:hidden space-y-0">
        {processSteps.map((step, index) => (
          <div key={step.step} className="flex gap-4">
            {/* Left: Icon + Line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#DC2626]/10 border-2 border-[#DC2626]/30 flex items-center justify-center flex-shrink-0">
                <DynamicIcon name={step.icon} className="w-4 h-4 text-[#DC2626]" />
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-px h-full min-h-[2rem] bg-[#DC2626]/20 my-1" />
              )}
            </div>

            {/* Right: Content */}
            <div className={`pb-6 ${index === processSteps.length - 1 ? "pb-0" : ""}`}>
              <span className="text-xs font-bold text-[#DC2626]">STEP {step.step}</span>
              <h3 className="font-bold text-[#10243A] text-base mb-1">{step.title}</h3>
              <p className="text-sm text-[#344054]/70 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

