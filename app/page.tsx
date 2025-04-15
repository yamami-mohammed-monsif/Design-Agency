import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/sections/Hero"), {
  ssr: true,
});
const About = dynamic(() => import("../components/sections/About"), {
  ssr: true,
});

const page = () => {
  return (
    <div>
      <HeroSection />
      <About />
    </div>
  );
};

export default page;
