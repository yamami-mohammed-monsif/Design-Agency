"use client";

import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import { blogPosts } from "@/constants";
import BlogPost from "../UI/BlogPost";
import Button from "../UI/Button";
import { motion, MotionProvider } from "../utils/MotionProvider";
import { fadeInUp, staggerContainer } from "@/constants/animations";
import { useInView } from "motion/react";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <Section id="blog">
      <MotionProvider>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h2 variants={fadeInUp}>
            Stay <BlueUnderline>updated</BlueUnderline> with blogs
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {blogPosts.map((post) => {
              return <BlogPost key={post.id} {...post} />;
            })}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mx-auto w-fit mt-10 lg:mt-12"
          >
            <Button variant="primary" href="/blog">
              View all
            </Button>
          </motion.div>
        </motion.div>
      </MotionProvider>
    </Section>
  );
};

export default Blog;
