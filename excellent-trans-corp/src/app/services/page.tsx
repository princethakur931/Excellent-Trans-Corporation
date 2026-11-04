import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";
import { services, siteConfig } from "@/lib/config";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our transportation services: Full Truck Load (FTL), Part Truck Load (PTL), Industrial Transportation and Pan-India Transportation in Pune.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Truck className={className} />;
  return <Icon className={className} />;
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Transportation Services"
        subtitle="Comprehensive, flexible and dependable transport solutions designed for manufacturing and industrial businesses."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHAT WE OFFER"
            title="Comprehensive Transportation Services"
            subtitle="We provide end-to-end logistics and transportation solutions tailored to meet your specific business requirements."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/40 hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors">
                  <DynamicIcon
                    name={service.icon}
                    className="w-4 h-4 text-[#DC2626] group-hover:text-white transition-colors"
                  />
                </div>
                <span className="text-sm font-medium text-[#10243A]">{service.title}</span>
              </a>
            ))}
          </div>

          {/* Individual Services */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Transportation service`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#DC2626]/15 rounded-2xl -z-10" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <DynamicIcon name={service.icon} className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[#344054]/80 leading-relaxed mb-6">{service.fullDesc}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-[#10243A] text-sm mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2.5 text-sm text-[#344054]">
                          <CheckCircle className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

