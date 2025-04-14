"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "@/components/UI/HamburgerButton";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { navLinks } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observer for sections
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const observerOptions = {
      threshold: 0.6, // Section needs to be 60% visible
      rootMargin: "-100px 0px -100px 0px", // Adjust for header height and to trigger slightly before sections reach the top
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={70}
              height={70}
              className="aspect-square w-[60px] lg:w-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav isScrolled={isScrolled} activeSection={activeSection} />

          {/* Mobile Navigation Button */}
          <HamburgerButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

          {/* Mobile Navigation Panel */}
          <MobileNav
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
            activeSection={activeSection}
          />
        </div>
      </div>
    </header>
  );
}
