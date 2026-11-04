interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#10243A]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DC2626]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-4">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-[#DC2626] transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {/* Red accent line */}
        <div className="w-16 h-1 bg-[#DC2626] rounded mx-auto mt-6" />
      </div>
    </section>
  );
}

