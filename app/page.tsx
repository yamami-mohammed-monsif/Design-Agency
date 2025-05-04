import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/sections/Hero"), {
  ssr: true,
});
const About = dynamic(() => import("../components/sections/About"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Services = dynamic(() => import("../components/sections/Services"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Testimonials = dynamic(
  () => import("../components/sections/Testimonials"),
  {
    ssr: true,
    loading: () => <div className="min-h-[400px]" />,
  }
);

const Contact = dynamic(() => import("../components/sections/Contact"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const page = () => {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default page;
