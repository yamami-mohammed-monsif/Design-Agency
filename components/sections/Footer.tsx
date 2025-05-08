import Link from "next/link";
import Image from "next/image";
import { Dribble, Behance, Instagram, Linkedin } from "../UI/Icons";
import { Location, Phone, Email } from "../UI/Icons";
import NewsletterForm from "../NewsletterForm";

const Footer = () => {
  return (
    <footer className="bg-footer text-white px-5 py-7 md:px-[60px] md:py-[50px] lg:px-[135px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex md:flex-col gap-8 lg:gap-9">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={70}
              height={70}
              className="aspect-square w-[60px] lg:w-[70px]"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Dribble className="hover:scale-115 cursor-pointer transition-all duration-300 ease-out" />
            <Behance className="hover:scale-115 cursor-pointer transition-all duration-300 ease-out" />
            <Instagram className="hover:scale-115 cursor-pointer transition-all duration-300 ease-out" />
            <Linkedin className="hover:scale-115 cursor-pointer transition-all duration-300 ease-out" />
          </div>
        </div>
        <div className="md:-ml-[25%] lg:m-0 lg:order-4 w-full max-w-[370px]">
          <NewsletterForm />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-xl">Contact</p>
          <div className="flex items-center gap-2.5">
            <Location color="white" />
            <p>66 Road Broklyn Street, 600</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone color="white" />
            <p>(509) 562-1912</p>
          </div>
          <div className="flex items-center gap-2.5">
            <Email color="white" />
            <p>contact@creativedesign.com</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-5">Explore</p>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/our team">Our Team</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
