import {
  LogoDesignIcon,
  DevelopmentIcon,
  UiUxDesignIcon,
  DigitalMarketingIcon,
  ContentWritingIcon,
  EmailMarketingIcon,
  MotionDesignIcon,
  PrintDesignIcon,
} from "../components/UI/Icons";

export const navLinks = [
  { id: 1, href: "#home", label: "Home" },
  { id: 2, href: "#about", label: "About" },
  { id: 3, href: "#services", label: "Services" },
  { id: 4, href: "#testimonials", label: "Testimonials" },
  { id: 6, href: "#contact", label: "Contact" },
  { id: 5, href: "#blog", label: "Blog" },
];

// services data
export const services = [
  {
    id: 1,
    name: "Logo design",
    icon: LogoDesignIcon,
    bgImage: "/logo-design.webp",
    href: "#",
  },
  {
    id: 2,
    name: "Development",
    icon: DevelopmentIcon,
    bgImage: "/development.webp",
    href: "#",
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: UiUxDesignIcon,
    bgImage: "/uiux-design.webp",
    href: "#",
  },
  {
    id: 4,
    name: "Digital Marketing",
    icon: DigitalMarketingIcon,
    bgImage: "/digital-marketing.webp",
    href: "#",
  },
  {
    id: 5,
    name: "Content Writing",
    icon: ContentWritingIcon,
    bgImage: "/content-writing.webp",
    href: "#",
  },
  {
    id: 6,
    name: "Email Marketing",
    icon: EmailMarketingIcon,
    bgImage: "/email-marketing.webp",
    href: "#",
  },
  {
    id: 7,
    name: "Motion Design",
    icon: MotionDesignIcon,
    bgImage: "/motion-design.webp",
    href: "#",
  },
  {
    id: 8,
    name: "Print Design",
    icon: PrintDesignIcon,
    bgImage: "/print-design.webp",
    href: "#",
  },
];

// testimonilas data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this team transformed our brand identity. Their creative approach and attention to detail exceeded our expectations.",
    avatar: "/avatar.webp",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, Innovate Inc",
    content:
      "The landing page they designed for our product launch drove conversion rates beyond our targets. Highly recommended for any digital presence needs.",
    avatar: "/avatar.webp",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder, EcoSolutions",
    content:
      "From concept to execution, they delivered a website that perfectly captures our brand essence. Their responsive design works flawlessly across all devices.",
    avatar: "/avatar.webp",
  },
];

// blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Basic rule of running web agency business",
    imgSrc: "/blog-post-1.webp",
    imgAlt: "A man and a woman high-fiving in an office",
  },
  {
    id: 2,
    title: "Understanding different types of Marketing data",
    imgSrc: "/blog-post-2.webp",
    imgAlt: "A man writing on a whiteboard",
  },
  {
    id: 3,
    title: "Understanding the users need to grow your business",
    imgSrc: "/blog-post-3.webp",
    imgAlt: "A hand writing on a whiteboard",
  },
];
