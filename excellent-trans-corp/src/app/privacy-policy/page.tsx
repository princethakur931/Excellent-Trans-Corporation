import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Excellent Trans Corporation.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Excellent Trans Corporation handles and protects your information."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#344054] space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">1. Information We Collect</h2>
            <p className="text-sm sm:text-base">
              When you submit an enquiry through our website or contact us via phone or email, we may
              collect details including your name, contact phone number, email address, company name,
              pickup and delivery locations, and goods description.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base">
              We use the collected information solely to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>Respond to your transportation enquiries and provide accurate quotations.</li>
              <li>Coordinate vehicle allocation, pickup, transit, and delivery of shipments.</li>
              <li>Communicate consignment updates and administrative notices.</li>
              <li>Comply with applicable legal, GST, and transport documentation regulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">3. Data Security &amp; Sharing</h2>
            <p className="text-sm sm:text-base">
              We do not sell, rent, or trade your personal or business data to third-party marketing
              agencies. Information is shared only with operational personnel, vehicle drivers, and
              regulatory authorities as required to complete transportation services safely.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10243A] mb-3">4. Contact Information</h2>
            <p className="text-sm sm:text-base">
              For any questions regarding this Privacy Policy or your data, please contact us at:
            </p>
            <p className="mt-2 text-sm sm:text-base font-semibold text-[#10243A]">
              {siteConfig.name}
              <br />
              Email: {siteConfig.email}
              <br />
              Phone: {siteConfig.phone}
              <br />
              Pune, Maharashtra, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

