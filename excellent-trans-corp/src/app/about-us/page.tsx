import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Compass, CheckCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excellent Trans Corporation — a Pune-based transportation company providing reliable goods transport for manufacturers and industrial businesses.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide dependable, efficient and hassle-free goods transportation solutions that help manufacturing and industrial businesses operate smoothly and grow confidently.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a preferred and trusted transport partner for businesses across Pune, Maharashtra and India, known for our reliability, safety standards and professional service.",
  },
  {
    icon: Compass,
    title: "Our Approach",
    description:
      "We believe in safety, transparency and timely delivery. Every consignment is handled with care and every commitment is taken seriously.",
  },
];

const commitments = [
  "Professional and experienced driver team",
  "Proper load securing and goods care",
  "Clear and transparent communication",
  "Flexible scheduling to match your needs",
  "Timely updates throughout transit",
  "Documentation and compliance support",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Excellent Trans Corporation"
        subtitle="Your reliable transportation partner for goods movement across Pune, Maharashtra and India."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                  alt="Excellent Trans Corporation fleet truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#DC2626]/20 rounded-2xl -z-10" />
            </div>

            <div>
              <p className="text-[#DC2626] font-semibold text-xs tracking-widest uppercase mb-2">
                WHO WE ARE
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#10243A] leading-tight mb-5">
                Your Trusted Transportation Partner
              </h2>
              <p className="text-[#344054]/80 leading-relaxed mb-4">
                Excellent Trans Corporation is a Pune-based transportation service provider
                specialising in goods transportation for manufacturing and industrial businesses. We
                offer reliable, professional and cost-effective transport solutions across Pune,
                Maharashtra and India.
              </p>
              <p className="text-[#344054]/80 leading-relaxed mb-6">
                Our focus is on providing businesses with a transport partner they can genuinely rely
                on — one that understands their operational requirements and consistently delivers on
                commitments.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#344054]">
                    <CheckCircle className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#DC2626] font-semibold text-xs tracking-widest uppercase mb-2">
              OUR VALUES
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#10243A]">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#DC2626]" />
                </div>
                <h3 className="font-bold text-[#10243A] text-lg mb-3">{title}</h3>
                <p className="text-[#344054]/70 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Focus */}
      <section className="py-16 lg:py-24 bg-[#10243A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Focused on Industrial &amp; Manufacturing Transport
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            We specialise in serving manufacturing plants, engineering companies, industrial units
            and supply chain businesses that need a transport partner with the understanding,
            reliability and flexibility to support their operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-colors"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

