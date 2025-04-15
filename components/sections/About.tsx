"use client";

import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import Image from "next/image";
import { motion, MotionProvider } from "@/components/MotionProvider";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useInView } from "motion/react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="about">
      <MotionProvider>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-[30px] md:gap-10 lg:gap-[60px]"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2>
              Elevate Your <BlueUnderline>Brand Identity</BlueUnderline>
            </h2>
            <p className="text-heading leading-[170%] text-base md:text-[18px] lg:text-xl max-w-3xl mx-auto">
              Unlock the true potential of your brand. Our passionate team of
              creative experts is committed to delivering innovative and
              tailor-made solutions that elevate your brand to new heights.
            </p>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-[30px] md:gap-10 lg:gap-[56px]">
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-2/5 mx-auto lg:mx-0"
            >
              <div className="relative h-[311px] md:h-[317px] lg:h-[381px] mx-auto lg:mx-0">
                <Image
                  src="/about-image.webp"
                  alt="About our creative design team"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-5 text-center md:text-left"
            >
              <p className="paragraph">
                We believe that a strong brand is the cornerstone of every
                successful business. We are a passionate team of branding
                experts dedicated to helping businesses like yours create a
                unique and compelling brand identity.
              </p>
              <p className="paragraph">
                With our extensive experience and deep understanding of brand
                strategy, design, and storytelling, we collaborate closely with
                our clients to craft brand experiences that resonate with their
                target audience. Our goal is to create brands that not only
                capture attention but also foster trust, loyalty, and
                recognition.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </MotionProvider>
    </Section>
  );
};

export default About;
