"use client";

import Image from "next/image";
import Button from "../UI/Button";
import Section from "../UI/Section";
import { motion, MotionProvider } from "@/constants/MotionProvider";
import { fadeInUp, staggerContainer } from "../../constants/animations";
import BlueUnderline from "../UI/BlueUnderline";

export default function HeroSection() {
  return (
    <Section
      id="home"
      className="mt-[92px] md:mt-[92px] lg:mt-[102px] bg-light-blue"
    >
      <MotionProvider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-11 md:gap-1 md:flex-row items-center"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2"
          >
            <h1 className="text-heading text-xl leading-[150%] md:text-[32px] md:leading-[140%] lg:text-[54px] lg:leading-[100%] text-center md:text-left font-bold mb-5 md:mb-8 lg:mb-10">
              Crafting <BlueUnderline>Visual</BlueUnderline> Stories: Unleashing
              Creative Essence
            </h1>
            <div className="flex justify-center md:justify-start">
              <Button variant="primary" size="regular">
                Let's talk
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 -mb-14 md:-mb-17 lg:-mb-23 relative"
          >
            <div className="relative h-[291px] sm:h-[320px] md:h-[284px] lg:h-[576px]">
              <Image
                src="/hero-image.webp"
                alt="Creative designer working at desk"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </MotionProvider>
    </Section>
  );
}
