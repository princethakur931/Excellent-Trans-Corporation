import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Book a Truck",
  description:
    "Book a truck with Excellent Trans Corporation. Share your pickup, delivery and goods details for a customised transport solution.",
  alternates: {
    canonical: `${siteConfig.url}/get-a-quote`,
  },
};

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        title="Book a Truck"
        subtitle="Share your transportation requirements with us and book the right truck for your goods safely and on time."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Book a Truck" }]}
      />

      <section className="py-16 lg:py-24 bg-[#F4F6F8]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#10243A] mb-1">
              Transport Enquiry Form
            </h2>
            <p className="text-[#344054]/70 text-sm mb-6">
              Fields marked with <span className="text-red-500">*</span> are required.
            </p>
            <QuoteForm compact={false} />

            <div className="mt-8 p-4 bg-red-50 border border-[#DC2626]/20 rounded-xl">
              <p className="text-xs text-[#344054] leading-relaxed">
                <span className="font-semibold text-[#DC2626]">Note:</span> Please provide
                accurate pickup location, delivery location and goods details to help us arrange
                the right truck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

