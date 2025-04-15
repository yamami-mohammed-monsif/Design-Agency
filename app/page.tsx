import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("../components/sections/Hero"), {
  ssr: true,
});

const page = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default page;
