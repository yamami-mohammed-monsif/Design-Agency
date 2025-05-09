import dynamic from "next/dynamic";
import ClientSections from "./ClientSections";

const HeroSection = dynamic(() => import("../components/sections/Hero"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const About = dynamic(() => import("../components/sections/About"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Services = dynamic(() => import("../components/sections/Services"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const page = async () => {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <ClientSections />
    </main>
  );
};

export default page;
