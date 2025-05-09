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
  const handleScrollToSection = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.startsWith("#") ? href.slice(1) : href; // Remove '#' if present

    // Wait for the section to be available in the DOM
    let section = document.getElementById(sectionId);
    while (!section) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Retry after 100ms
      section = document.getElementById(sectionId);
    }

    section.scrollIntoView({ behavior: "smooth" });
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
