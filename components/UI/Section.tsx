import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        px-5 md:px-[60px] lg:px-[135px]
        py-10 md:py-[60px] lg:py-20
        mb-[70px] md:mb-[100px] lg:mb-[130px]
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}
