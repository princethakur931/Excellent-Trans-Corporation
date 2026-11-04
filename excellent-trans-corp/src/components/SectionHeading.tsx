interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#DC2626] font-semibold text-xs tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 ${
          light ? "text-white" : "text-[#10243A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-[#344054]/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

