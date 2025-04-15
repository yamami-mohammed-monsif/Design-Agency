// components/Header/DesktopNav.tsx
"use client";
import Link from "next/link";
import { navLinks } from "@/constants";

type DesktopNavProps = {
  isScrolled: boolean;
  activeSection: string;
};

export default function DesktopNav({
  isScrolled,
  activeSection,
}: DesktopNavProps) {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.slice(1);
        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={(e) => handleScrollToSection(e, link.href)}
            className={`text-[18px] font-medium transition-all duration-200 hover:text-primary-blue hover:scale-110 ${
              isScrolled ? "text-gray-800" : "text-gray-800"
            } ${isActive ? "text-primary-blue scale-110" : ""}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
