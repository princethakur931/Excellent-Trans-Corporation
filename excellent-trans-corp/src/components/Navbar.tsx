"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors cursor-pointer ${
                        isActive(link.href)
                          ? "text-[#DC2626]"
                          : "text-[#344054] hover:text-[#DC2626]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#344054] hover:text-[#DC2626] hover:bg-[#F4F6F8] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "text-[#DC2626] border-b-2 border-[#DC2626]"
                      : "text-[#344054] hover:text-[#DC2626]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-[#344054] hover:text-[#DC2626] hover:bg-[#F4F6F8] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
      >
        <nav className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                      isActive(link.href)
                        ? "text-[#DC2626] bg-red-50"
                        : "text-[#344054] hover:text-[#DC2626] hover:bg-[#F4F6F8]"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-[#344054] hover:text-[#DC2626] hover:bg-[#F4F6F8] rounded transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-[#DC2626] bg-red-50"
                    : "text-[#344054] hover:text-[#DC2626] hover:bg-[#F4F6F8]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 pb-1">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md text-sm font-semibold transition-colors w-full"
            >
              <Phone className="w-4 h-4" />
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

