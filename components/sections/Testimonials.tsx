"use client";

import { useState, useRef } from "react";
import { useInView, AnimatePresence } from "motion/react";
import { motion, MotionProvider } from "@/components/utils/MotionProvider";
import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import { testimonials } from "@/constants";
import TestimonialCard from "../UI/TestimonialCard";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  testimonialCarouselVariants,
  fadeInUp,
  staggerContainer,
} from "@/constants/animations";
import { IconNext, IconPrev } from "../UI/Icons";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section id="testimonials">
      <MotionProvider>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={fadeInUp}>
            Happy <BlueUnderline>stories</BlueUnderline> of our clients
          </motion.h2>
          <motion.div className="relative" variants={staggerContainer}>
            {isDesktop ? (
              <div className="flex justify-center gap-6">
                {testimonials.map((testimonial) => (
                  <motion.div key={testimonial.id} variants={fadeInUp}>
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      content={testimonial.content}
                      avatar={testimonial.avatar}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={testimonialCarouselVariants.slide}
                    initial="initial"
                    animate="active"
                    exit="exit"
                  >
                    <TestimonialCard
                      name={testimonials[currentIndex].name}
                      role={testimonials[currentIndex].role}
                      content={testimonials[currentIndex].content}
                      avatar={testimonials[currentIndex].avatar}
                    />
                  </motion.div>
                </AnimatePresence>

                <motion.button
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-lg"
                  onClick={handlePrev}
                  variants={testimonialCarouselVariants.controls}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconPrev className="w-6 h-6" />
                </motion.button>

                <motion.button
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-lg"
                  onClick={handleNext}
                  variants={testimonialCarouselVariants.controls}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconNext className="w-6 h-6" />
                </motion.button>

                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      variants={testimonialCarouselVariants.controls}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </MotionProvider>
    </Section>
  );
};

export default Testimonials;
