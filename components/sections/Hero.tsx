"use client";

import Image from "next/image";
import Button from "../UI/Button";
import Section from "../UI/Section";
import { motion, MotionProvider } from "@/components/utils/MotionProvider";
import { fadeInUp, staggerContainer } from "../../constants/animations";
import BlueUnderline from "../UI/BlueUnderline";

export default function HeroSection() {
  return (
    <Section
      id="home"
      className="mt-[92px] md:mt-[92px] lg:mt-[102px] bg-light-blue"
    >
      <MotionProvider>
        <div className="flex flex-col gap-11 md:gap-1 md:flex-row items-center">
          {/* Animate text column only */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-heading text-xl leading-[150%] md:text-[32px] md:leading-[140%] lg:text-[54px] lg:leading-[100%] text-center md:text-left font-bold mb-5 md:mb-8 lg:mb-10">
                Crafting <BlueUnderline>Visual</BlueUnderline> Stories:
                Unleashing Creative Essence
              </h1>
              <div className="flex justify-center md:justify-start">
                <Button variant="primary" size="regular">
                  Let's talk
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image column – not animated */}
          <div className="w-full md:w-1/2 -mb-14 md:-mb-17 lg:-mb-23">
            <div className="relative max-w-[531px] aspect-square rounded-2xl overflow-hidden mx-auto">
              <Image
                src="/hero-image.webp"
                alt="Creative designer working at desk"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 531px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </MotionProvider>
    </Section>
  );
}
