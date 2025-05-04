import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./Icons";
import { motion, MotionProvider } from "../MotionProvider";
import { fadeInUp } from "@/constants/animations";

interface BlogPostProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const BlogPost = ({ title, imgSrc, imgAlt }: BlogPostProps) => {
  return (
    <MotionProvider>
      <motion.div
        variants={fadeInUp}
        className="flex flex-col gap-5 lg:gap-6 bg-light-blue rounded-lg overflow-hidden"
      >
        <div>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={370}
            height={210}
            className="w-full h-auto"
          />
        </div>
        <div className="px-7 pb-5">
          <p className="text-xl lg:text-2xl">{title}</p>
          <div className="flex items-center gap-1 mt-5 font-medium group/parent hover:scale-103 transition-all duration-200">
            <Link href="" className="text-primary-blue">
              Read more
            </Link>
            <ArrowRight
              color="var(--color-primary-blue)"
              className="group-hover/parent:-rotate-30 transition-transform duration-200 ease-in"
            />
          </div>
        </div>
      </motion.div>
    </MotionProvider>
  );
};

export default BlogPost;
