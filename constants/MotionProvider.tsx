// optimized Framer Motion components for better performance.
// Uses LazyMotion to load only essential animation features
// Reduces initial bundle size by using the domAnimation feature set

import { LazyMotion, domAnimation, m } from "framer-motion";

type MotionProviderProps = {
  children: React.ReactNode;
};

export const MotionProvider = ({ children }: MotionProviderProps) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
);

export { m as motion };
