import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free transportation quote from Excellent Trans Corporation. Share your pickup, delivery and goods details for a customised transport solution.",
  alternates: {
    canonical: `${siteConfig.url}/get-a-quote`,
  },
};

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        title="Get a Free Transport Quote"
        subtitle="Share your transportation requirement and we'll get back with a customised quote tailored to your business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
      />

      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#10243A] rounded-2xl p-6 text-white mb-5">
                <h2 className="text-xl font-bold mb-2">Request a Quote</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fill out the form with your transportation requirements and our team will contact
                  you promptly with a customised solution.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                    <Phone className="w-4 h-4 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#344054]/60 uppercase tracking-wide mb-0.5">
                      Call Us
                    </p>
                    <p className="text-sm font-semibold text-[#10243A]">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                    <Mail className="w-4 h-4 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#344054]/60 uppercase tracking-wide mb-0.5">
                      Email Us
                    </p>
                    <p className="text-sm font-semibold text-[#10243A]">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-green-400/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#344054]/60 uppercase tracking-wide mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-[#10243A]">Chat with us</p>
                  </div>
                </a>
              </div>

              <div className="mt-5 p-4 bg-red-50 border border-[#DC2626]/20 rounded-xl">
                <p className="text-xs text-[#344054] leading-relaxed">
                  <span className="font-semibold text-[#DC2626]">Note:</span> Please provide
                  accurate pickup location, delivery location and goods details to help us give you
                  the most relevant quote.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#10243A] mb-1">
                  Transport Enquiry Form
                </h2>
                <p className="text-[#344054]/70 text-sm mb-6">
                  Fields marked with <span className="text-red-500">*</span> are required.
                </p>
                <QuoteForm compact={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

