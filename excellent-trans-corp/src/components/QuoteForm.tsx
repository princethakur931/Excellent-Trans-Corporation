"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]{10,15}$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  company: z.string().optional(),
  serviceType: z.string().optional(),
  pickupLocation: z.string().optional(),
  deliveryLocation: z.string().optional(),
  goodsDetails: z.string().optional(),
  message: z.string().optional(),
  vehicleType: z.string().optional(),
  weight: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  compact?: boolean;
}

export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      // API not configured - show a meaningful message
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = (error?: string) =>
    `w-full px-3.5 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200 bg-white text-[#344054] placeholder:text-gray-400 ${
      error
        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-gray-200 focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]/30"
    }`;

  const labelClass = "block text-xs font-medium text-[#344054] mb-1";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="font-bold text-[#10243A] text-xl mb-2">Enquiry Submitted!</h3>
        <p className="text-[#344054]/70 text-sm max-w-xs">
          Thank you for reaching out. We will contact you shortly with a customised quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-700">
            Unable to submit at the moment. Please call us directly at the number above or configure
            the /api/enquiry endpoint. (See README for setup instructions.)
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Full Name"
            className={inputClass(errors.name?.message)}
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Your Phone Number"
            className={inputClass(errors.phone?.message)}
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={inputClass(errors.email?.message)}
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className={labelClass}>
            Type of Service
          </label>
          <select id="serviceType" className={inputClass()} {...register("serviceType")}>
            <option value="">Select Service</option>
            <option value="ftl">Full Truck Load (FTL)</option>
            <option value="ptl">Part Truck Load (PTL)</option>
            <option value="industrial">Industrial Transportation</option>
            <option value="pan-india">Pan-India Transportation</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        {!compact && (
          <>
            {/* Company */}
            <div>
              <label htmlFor="company" className={labelClass}>
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                className={inputClass()}
                {...register("company")}
              />
            </div>

            {/* Vehicle Type */}
            <div>
              <label htmlFor="vehicleType" className={labelClass}>
                Vehicle Requirement
              </label>
              <select id="vehicleType" className={inputClass()} {...register("vehicleType")}>
                <option value="">Select Vehicle</option>
                <option value="small">Small Truck (1–3 Ton)</option>
                <option value="medium">Medium Truck (5–10 Ton)</option>
                <option value="large">Large Truck (10–20 Ton)</option>
                <option value="trailer">Trailer / Multi-Axle</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>

            {/* Pickup */}
            <div>
              <label htmlFor="pickupLocation" className={labelClass}>
                Pickup Location
              </label>
              <input
                id="pickupLocation"
                type="text"
                placeholder="City / Area"
                className={inputClass()}
                {...register("pickupLocation")}
              />
            </div>

            {/* Delivery */}
            <div>
              <label htmlFor="deliveryLocation" className={labelClass}>
                Delivery Location
              </label>
              <input
                id="deliveryLocation"
                type="text"
                placeholder="City / Area"
                className={inputClass()}
                {...register("deliveryLocation")}
              />
            </div>

            {/* Goods Details */}
            <div className="sm:col-span-2">
              <label htmlFor="goodsDetails" className={labelClass}>
                Material / Goods Details
              </label>
              <input
                id="goodsDetails"
                type="text"
                placeholder="Type of goods, approximate weight/quantity"
                className={inputClass()}
                {...register("goodsDetails")}
              />
            </div>
          </>
        )}

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {compact ? "Your Requirement / Message" : "Additional Message"}
          </label>
          <textarea
            id="message"
            rows={compact ? 3 : 4}
            placeholder="Share any specific requirements or questions..."
            className={`${inputClass()} resize-none`}
            {...register("message")}
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200 shadow-md hover:shadow-red-500/20 ${
            compact ? "w-full" : "w-full sm:w-auto"
          }`}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Enquiry
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

