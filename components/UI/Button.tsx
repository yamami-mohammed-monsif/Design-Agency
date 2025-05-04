import Link from "next/link";
import { ArrowRight } from "./Icons";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "transparent";
  size?: "small" | "regular";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  size = "regular",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center rounded-[8px] text-[18px] leading-[100%] font-bold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer";

  const variantClasses = {
    primary: "bg-primary-blue text-white",
    transparent: "bg-transparent",
  };

  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    regular: "py-4 px-8 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
      <ArrowRight className="w-6 h-6" />
    </button>
  );
}
