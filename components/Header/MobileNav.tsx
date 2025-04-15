"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion, MotionProvider } from "@/constants/MotionProvider";
import { navLinks } from "@/constants";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
};

export default function MobileNav({
  isOpen,
  setIsOpen,
  activeSection,
}: MobileNavProps) {
  // Close menu when clicking on a link
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Wait for animation to complete before scrolling
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <MotionProvider>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-overlay z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-30 lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <nav className="mt-16">
              <ul className="space-y-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`text-xl font-medium transition-all duration-200 hover:text-primary-blue hover:scale-110 ${
                          isActive
                            ? "text-primary-blue scale-110"
                            : "text-gray-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </motion.div>
    </MotionProvider>
  );
}
