"use client";

import dynamic from "next/dynamic";
import LazyLoadSection from "@/components/utils/LazyLoadSection";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px]" />,
  }
);

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});

const Blog = dynamic(() => import("@/components/sections/Blog"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});

const ClientSections = () => {
  return (
    <>
      <LazyLoadSection rootMargin="200px">
        <Testimonials />
      </LazyLoadSection>
      <LazyLoadSection rootMargin="200px">
        <Contact />
      </LazyLoadSection>
      <LazyLoadSection rootMargin="200px">
        <Blog />
      </LazyLoadSection>
    </>
  );
};

export default ClientSections;
