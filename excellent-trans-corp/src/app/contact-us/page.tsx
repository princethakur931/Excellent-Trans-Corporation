import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Excellent Trans Corporation for transportation services in Pune. Call, email or WhatsApp us for a quick response.",
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.pincode}`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteConfig.address.line1} ${siteConfig.address.city}`
    )}`,
    actionLabel: "View Map",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    actionLabel: "WhatsApp Us",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for transportation enquiries, quotes or any assistance."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#10243A] mb-2">Get In Touch</h2>
              <p className="text-[#344054]/70 text-sm leading-relaxed mb-6">
                Reach out to us through any of the following channels. We respond promptly to all
                enquiries.
              </p>

              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href, actionLabel }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#DC2626]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#344054]/60 uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-[#10243A] font-medium break-all">{value}</p>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs text-[#DC2626] font-medium hover:underline mt-0.5 inline-block"
                      >
                        {actionLabel} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-[#10243A] rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#DC2626]" />
                  <span className="text-white font-semibold text-sm">Business Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday – Saturday</span>
                    <span className="text-white">[Update Hours]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#10243A] mb-1">Send Us a Message</h2>
                <p className="text-[#344054]/70 text-sm mb-6">
                  Fill in the form below and we will get back to you as soon as possible.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-10 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="h-72 lg:h-96 flex items-center justify-center bg-[#F4F6F8] relative">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#DC2626] mx-auto mb-3" />
                <p className="font-semibold text-[#10243A] mb-1">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
                <p className="text-[#344054]/70 text-sm mb-4">
                  {siteConfig.address.line1}, {siteConfig.address.city}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `Excellent Trans Corporation ${siteConfig.address.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
              <p className="absolute bottom-3 text-xs text-gray-400">
                * Google Maps embed requires a valid API key. Configure in environment variables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

