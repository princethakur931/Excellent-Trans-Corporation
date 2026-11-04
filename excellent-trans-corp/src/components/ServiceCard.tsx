import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  variant?: "default" | "horizontal";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Truck className={className} />;
  return <Icon className={className} />;
}

export function ServiceCard({ id, title, shortDesc, icon, variant = "default" }: ServiceCardProps) {
  if (variant === "horizontal") {
    return (
      <Link
        href={`/services#${id}`}
        className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#DC2626]/30 hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors duration-300">
          <DynamicIcon
            name={icon}
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
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-[#DC2626]/30 transition-all duration-300 flex flex-col justify-between relative">
      <div>
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-300">
          <DynamicIcon
            name={icon}
            className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors duration-300"
          />
        </div>
        <h3 className="font-bold text-[#10243A] text-lg mb-2.5">{title}</h3>
        <p className="text-sm text-[#344054]/75 leading-relaxed">{shortDesc}</p>
      </div>
      <div className="mt-6 flex justify-end">
        <Link
          href={`/services#${id}`}
          className="w-7 h-7 rounded-full bg-red-50 group-hover:bg-[#DC2626] flex items-center justify-center transition-colors duration-300 shadow-sm"
          aria-label={`View ${title}`}
        >
          <ArrowRight className="w-3.5 h-3.5 text-[#DC2626] group-hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
  );
}

