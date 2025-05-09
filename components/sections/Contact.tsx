"use client";

import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import { Location, Phone, Email } from "../UI/Icons";
import Form from "../ContactForm";
import { motion, MotionProvider } from "../utils/MotionProvider";
import { useInView } from "motion/react";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="contact">
      <MotionProvider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInview ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h2 variants={fadeInUp} className="text-center">
            <BlueUnderline>Contact</BlueUnderline> us today
          </motion.h2>
          <Section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[50px] bg-light-blue">
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row flex-wrap lg:flex-col gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-white rounded-[4px] flex justify-center items-center">
                  <Location className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl leading-[100%] text-heading mb-2">
                    Office Address
                  </p>
                  <p>66 Road Broklyn Street, 600</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-white rounded-[4px] flex justify-center items-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl leading-[100%] text-heading mb-2">
                    Contact No
                  </p>
                  <p>(509) 562-1912</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-white rounded-[4px] flex justify-center items-center">
                  <Email className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl leading-[100%] text-heading mb-2">
                    Email
                  </p>
                  <p>contact@creativedesign.com</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="max-w-[570px] w-full mx-auto lg:m-0"
            >
              <Form />
            </motion.div>
          </Section>
        </motion.div>
      </MotionProvider>
    </section>
  );
};

export default Contact;
