import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service for Excellent Trans Corporation.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms &amp; Conditions"
        subtitle="Standard terms and conditions governing transport and logistics services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#344054] space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">1. Service Agreement</h2>
            <p className="text-sm sm:text-base">
              By engaging Excellent Trans Corporation for transportation or logistics services, the
              shipper/client agrees to adhere to the terms and operational guidelines outlined herein
              and in the consignment note (bilty/LR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">2. Documentation &amp; Declarations</h2>
            <p className="text-sm sm:text-base">
              The consignor is responsible for ensuring that all statutory documents (e.g., valid
              GST invoices, E-way bills, delivery challans, and permits) are provided prior to vehicle
              dispatch. The consignor guarantees the accurate declaration of material weight and nature.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">3. Prohibited &amp; Hazardous Goods</h2>
            <p className="text-sm sm:text-base">
              Unless explicitly agreed upon in writing with appropriate statutory compliances, we do
              not accept contraband, illegal, hazardous, or unpermitted dangerous goods for transit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">4. Transit &amp; Delivery</h2>
            <p className="text-sm sm:text-base">
              Estimated delivery timelines are provided in good faith and may be subject to road
              conditions, weather, statutory border checks, or unforeseen force majeure events.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">5. Contact &amp; Queries</h2>
            <p className="text-sm sm:text-base">
              For any clarification regarding these terms, please contact:
            </p>
            <p className="mt-2 text-sm sm:text-base font-semibold text-[#10243A]">
              {siteConfig.name}
              <br />
              Email: {siteConfig.email}
              <br />
              Phone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

