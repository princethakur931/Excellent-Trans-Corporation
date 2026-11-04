import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Shield,
  Layers,
  Headphones,
  Target,
  Eye,
  Handshake,
  Award,
  ShieldCheck,
  Coins,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryCard } from "@/components/IndustryCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactCTA } from "@/components/ContactCTA";
import { siteConfig, services, industries, whyChooseUs } from "@/lib/config";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Transport Company in Pune | Excellent Trans Corporation",
  description:
    "Excellent Trans Corporation offers reliable goods transportation services in Pune, Maharashtra and India. FTL, PTL, Industrial & Pan-India transport solutions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return null;
  return <Icon className={className} />;
}

const heroFeatures = [
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Shield, label: "Safe & Secure Transit" },
  { icon: Layers, label: "Flexible & Scalable" },
  { icon: Headphones, label: "Dedicated Support" },
];

const aboutFeatures = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide dependable and hassle-free transportation services.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a preferred transport partner for businesses across India.",
  },
  {
    icon: Handshake,
    title: "Our Approach",
    desc: "Safety, transparency and timely delivery in every consignment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#10243A]" aria-label="Hero">
        {/* Background Video with Refined Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* HTML5 Hero Background Video with Enhanced Brightness, Contrast & Saturation */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[65%_center] sm:object-center"
            style={{
              filter: "brightness(1.10) contrast(1.05) saturate(1.10)",
            }}
            aria-hidden="true"
          >
            <source src="/videos/hero-truck.mp4" type="video/mp4" />
          </video>

          {/* Smooth left-to-right linear gradient overlay for readability & vibrant truck visibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(10, 29, 48, 0.55) 0%, rgba(10, 29, 48, 0.30) 50%, rgba(10, 29, 48, 0.12) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center pt-20 pb-4">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#DC2626]" />
                <span className="text-[#DC2626] font-semibold text-xs tracking-widest uppercase">
                  Transportation &amp; Logistics Solutions
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Reliable Transportation{" "}
                <span className="text-[#DC2626]">for Your Business</span>
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                End-to-end goods transportation services for manufacturers and industries, ensuring
                safe, timely and cost-effective delivery across Pune, Maharashtra and India.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="relative bg-[#0b1a2b]/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {heroFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-2.5 py-4 px-3"
                >
                  <Icon className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Comprehensive Transportation Services"
            subtitle="Flexible and dependable transport solutions to move your goods safely and efficiently."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="about-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image with red accent */}
            <div className="relative pr-4 pb-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80"
                  alt="Cargo truck on highway - Excellent Trans Corporation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              {/* Red decorative accent shape wrapping bottom-right corner as in reference */}
              <div className="absolute -bottom-2 -right-1 w-32 h-28 bg-[#DC2626] rounded-2xl z-0" />
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-[#DC2626] font-bold text-xs tracking-widest uppercase mb-2">
                ABOUT US
              </p>
              <h2
                id="about-heading"
                className="text-3xl lg:text-4xl font-bold text-[#10243A] leading-tight mb-4"
              >
                Your Trusted Transportation Partner
              </h2>
              <p className="text-[#344054]/80 text-sm sm:text-base leading-relaxed mb-8">
                Excellent Trans Corporation is a Pune-based transport service provider, dedicated to
                delivering reliable, efficient and professional goods transportation solutions for
                manufacturing and industrial businesses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-gray-100">
                {aboutFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#DC2626]" />
                    </div>
                    <h3 className="font-bold text-[#10243A] text-sm">{title}</h3>
                    <p className="text-xs text-[#344054]/70 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]" aria-labelledby="process-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Simple & Transparent Process"
            subtitle="From booking to delivery, we ensure a smooth and reliable experience."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="industries-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-8">
            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <p className="text-[#DC2626] font-bold text-xs tracking-widest uppercase mb-2">
                INDUSTRIES WE SERVE
              </p>
              <h2
                id="industries-heading"
                className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#10243A] leading-tight mb-3"
              >
                Transportation Solutions for Multiple Industries
              </h2>
              <p className="text-[#344054]/75 text-sm leading-relaxed mb-4">
                We support a wide range of industries with customized and reliable transport
                services.
              </p>
            </div>

            {/* Right: 5 Cards Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} {...industry} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-[#10243A] text-white" aria-labelledby="why-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-4">
              <div className="w-8 h-1 bg-[#DC2626] rounded mb-3" />
              <h2
                id="why-heading"
                className="text-2xl sm:text-3xl font-bold leading-tight"
              >
                Why Choose <br />
                <span className="text-white">Excellent Trans Corporation?</span>
              </h2>
            </div>

            {/* Right: 5 Benefits in horizontal row */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2.5 group-hover:border-[#DC2626] group-hover:text-[#DC2626] transition-colors">
                    <DynamicIcon name={item.icon} className="w-6 h-6 text-white group-hover:text-[#DC2626] transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white text-xs sm:text-sm mb-1">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
      <ContactCTA />
    </>
  );
}
