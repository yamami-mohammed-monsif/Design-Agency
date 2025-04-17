"use client";

import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";
import { services } from "../../constants";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ArrowRight } from "../UI/Icons";
import { motion, MotionProvider } from "../MotionProvider";
import { useInView } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function ServicesSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [showAllServices, setShowAllServices] = useState(false);
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true, amount: 0.3 });

  // Reset state when screen size changes
  useEffect(() => {
    setShowAllServices(isDesktop);
  }, [isDesktop]);

  // Choose how many services to display
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <Section id="services" className="bg-light-blue">
      <MotionProvider>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInview ? "visible" : "hidden"}
        >
          <motion.h2 variants={fadeInUp} className="text-center">
            Our <BlueUnderline>Services</BlueUnderline>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5"
          >
            {displayedServices.map((service, index) => (
              <motion.div
                variants={fadeInUp}
                custom={index}
                key={service.id}
                className="relative flex items-end px-2.5 py-4 h-[161px] sm:h-[250px] md:h-[320px] rounded-[6px] overflow-hidden group"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={service.bgImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-2500 ease-linear group-hover:scale-150"
                  />
                  <div className="absolute inset-0 bg-overlay"></div>
                </div>

                {/* Service card Content */}
                <div className="relative h-fit flex flex-col gap-2.5 md:gap-5 justify-between items-left text-white w-full">
                  <div className="flex items-center space-x-2">
                    <div>
                      <service.icon />
                    </div>
                    <p className="text-md sm:text-xl font-semibold md:font-bold">
                      {service.name}
                    </p>
                  </div>

                  <div className="flex items-center text-sm font-medium group/parent hover:scale-103 transition-all duration-200">
                    <Link href={service.href}>Request a quote</Link>
                    <ArrowRight
                      color="white"
                      className="group-hover/parent:-rotate-30 transition-transform duration-200 ease-in"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Conditional Button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mt-10 md:mt-[50px] lg:mt-[60px]"
          >
            {!isDesktop ? (
              <Button
                variant="primary"
                onClick={() => setShowAllServices(!showAllServices)}
              >
                {showAllServices ? "Show less" : "View more"}
              </Button>
            ) : (
              <Button variant="primary">Request a Quote</Button>
            )}
          </motion.div>
        </motion.div>
      </MotionProvider>
    </Section>
  );
}
