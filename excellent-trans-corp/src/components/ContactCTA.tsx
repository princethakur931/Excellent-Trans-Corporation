import Link from "next/link";
import { QuoteForm } from "./QuoteForm";

export function ContactCTA() {
  return (
    <section className="py-12 lg:py-16 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
          {/* Background image & gradient */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pan-india-truck-load.jpg"
              alt="Highway background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          </div>

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-5 text-white">
                <div className="w-8 h-1 bg-[#DC2626] rounded mb-5" />
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-4">
                  Get a Free <br className="hidden sm:inline" />
                  Transport Quote
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Share your transportation requirement with us and get a quick, customized quote.
                </p>
              </div>

              {/* Right Form Box */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

