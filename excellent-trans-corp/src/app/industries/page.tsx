import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";
import { IndustryVideo } from "@/components/IndustryVideo";
import { industries, siteConfig } from "@/lib/config";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Excellent Trans Corporation serves manufacturing, engineering, steel & metals, industrial supplies and FMCG industries with reliable transportation in Pune.",
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Factory className={className} />;
  return <Icon className={className} />;
}

const industryDetails: Record<string, { needs: string[]; description: string }> = {
  manufacturing: {
    needs: [
      "Raw material transportation to plant",
      "Finished goods dispatch",
      "Inbound supply chain movement",
      "Inter-plant transfers",
    ],
    description:
      "Manufacturing units require consistent, scheduled transport for raw materials and finished goods. We understand production timelines and work to ensure your supply chain runs without disruption.",
  },
  engineering: {
    needs: [
      "Heavy machinery and components",
      "Precision engineering parts",
      "Equipment installation logistics",
      "Workshop to site movement",
    ],
    description:
      "Engineering goods often require careful securing and handling. Our team is experienced in moving engineering components safely with proper load securing and route planning.",
  },
  "industrial-supplies": {
    needs: [
      "Bulk industrial consumables",
      "MRO supplies and tools",
      "Packaging material transport",
      "Plant-to-plant supply movement",
    ],
    description:
      "Industrial supply businesses depend on timely restocking. We ensure your supplies reach the right location at the right time with proper documentation.",
  },
  "steel-metals": {
    needs: [
      "Steel coils and sheets",
      "Metal rods and beams",
      "Structural steel transport",
      "Scrap and secondary material movement",
    ],
    description:
      "Steel and metal transportation requires appropriate vehicles and proper load securing. We handle heavy metallic goods with the right equipment and care.",
  },
  fmcg: {
    needs: [
      "Scheduled product delivery",
      "Multi-drop distribution support",
      "Warehouse-to-distributor movement",
      "Temperature-neutral FMCG goods",
    ],
    description:
      "FMCG businesses require timely, reliable transport to keep shelves stocked. We provide consistent delivery schedules and professional handling for consumer goods.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Providing reliable transportation solutions across a wide range of manufacturing and industrial sectors."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      {/* Industry Overview Grid */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SECTORS WE SERVE"
            title="Transportation Solutions for Multiple Industries"
            subtitle="We support a wide range of industries with reliable and customised goods transportation."
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-video shadow-md hover:shadow-xl transition-all duration-300"
              >
                {industry.video ? (
                  <IndustryVideo
                    src={industry.video}
                    playbackRate={industry.playbackRate}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={industry.image}
                    alt={`${industry.title} transportation`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#DC2626] flex items-center justify-center">
                      <DynamicIcon name={industry.icon} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{industry.title}</h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {industries.map((industry, index) => {
              const detail = industryDetails[industry.id];
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 lg:p-10 rounded-2xl shadow-sm border border-gray-100`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                      {industry.video ? (
                        <IndustryVideo
                          src={industry.video}
                          playbackRate={industry.playbackRate}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={industry.image}
                          alt={`${industry.title} transportation services`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          unoptimized
                        />
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                      <DynamicIcon name={industry.icon} className="w-5 h-5 text-[#DC2626]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#10243A] mb-3">{industry.title}</h2>
                    <p className="text-[#344054]/80 text-sm leading-relaxed mb-5">
                      {detail?.description || industry.description}
                    </p>

                    {detail?.needs && (
                      <div className="mb-5">
                        <p className="text-sm font-semibold text-[#10243A] mb-3">
                          Common Transportation Needs:
                        </p>
                        <ul className="space-y-2">
                          {detail.needs.map((need) => (
                            <li key={need} className="flex items-center gap-2 text-sm text-[#344054]">
                              <CheckCircle className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" />
                              {need}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      href="/get-a-quote"
                      className="inline-flex items-center gap-2 text-[#DC2626] font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

