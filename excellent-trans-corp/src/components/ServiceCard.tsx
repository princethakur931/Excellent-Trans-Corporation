import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon?: string;
  image?: string;
  variant?: "default" | "horizontal";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Truck className={className} />;
  return <Icon className={className} />;
}

export function ServiceCard({
  id,
  title,
  shortDesc,
  icon,
  image,
  variant = "default",
}: ServiceCardProps) {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/services#${id}`}
        className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors duration-300">
          <DynamicIcon
            name={icon || "Truck"}
            className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#10243A] text-base mb-1 group-hover:text-[#DC2626] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#344054]/70 leading-relaxed line-clamp-2">{shortDesc}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  return (
    <div className="group bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE8E1] hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {image && (
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          </div>
        )}
        <h3 className="font-bold text-[#10243A] text-lg sm:text-[19px] mb-2 group-hover:text-[#DC2626] transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2 mb-6">
          {shortDesc}
        </p>
      </div>

      <div className="flex justify-center pt-1">
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all duration-200 uppercase tracking-wider group-hover:border-[#DC2626]/50"
        >
          VIEW MORE <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

