import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  light?: boolean;
  className?: string;
  size?: "default" | "large";
}

export function Logo({ light = false, className = "", size = "default" }: LogoProps) {
  const isLarge = size === "large";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 flex-shrink-0 group ${className}`}
      aria-label="Excellent Trans Corporation - Home"
    >
      {/* Official Company Logo Image */}
      <div
        className={`relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
          light
            ? "bg-white p-1 rounded-xl shadow-md"
            : "bg-transparent"
        } ${isLarge ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11 sm:h-12 sm:w-12"}`}
      >
        <Image
          src="/logo.png"
          alt="Excellent Trans Corporation Logo"
          width={160}
          height={160}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Name Typography */}
      <div className="leading-tight">
        <div
          className={`font-black tracking-tight leading-none ${
            isLarge
              ? "text-lg sm:text-xl"
              : "text-[15px] sm:text-base"
          } ${light ? "text-white" : "text-[#10243A]"}`}
        >
          Excellent Trans
        </div>
        <div
          className={`font-black text-[#DC2626] tracking-tight leading-none mt-1 ${
            isLarge
              ? "text-sm sm:text-base"
              : "text-[13px] sm:text-[14px]"
          }`}
        >
          Corporation
        </div>
      </div>
    </Link>
  );
}
