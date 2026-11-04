import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactCTA } from "@/components/ContactCTA";
import { processSteps, siteConfig } from "@/lib/config";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how Excellent Trans Corporation's transportation process works — from enquiry to safe delivery in 5 simple steps.",
  alternates: {
    canonical: `${siteConfig.url}/our-process`,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Circle className={className} />;
  return <Icon className={className} />;
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Transportation Process"
        subtitle="A simple, transparent and reliable process — from your first enquiry to safe delivery at the destination."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Process" }]}
      />

      {/* Timeline Overview */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#DC2626] font-semibold text-xs tracking-widest uppercase mb-2">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#10243A] mb-3">
              A Simple &amp; Transparent Process
            </h2>
            <p className="text-[#344054]/70 text-base max-w-2xl mx-auto">
              From booking to delivery, we ensure a smooth and reliable experience at every step.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-6 items-start p-6 lg:p-8 bg-[#F4F6F8] rounded-2xl border border-gray-100 hover:border-[#DC2626]/20 hover:shadow-sm transition-all"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#10243A] flex items-center justify-center">
                    <DynamicIcon name={step.icon} className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-8 bg-[#DC2626]/30" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#DC2626] font-bold text-xs">STEP {step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#10243A] mb-2">{step.title}</h3>
                  <p className="text-[#344054]/80 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#10243A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Share your requirement with us and we'll handle the rest — from vehicle allocation to
            safe delivery.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

