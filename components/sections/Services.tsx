"use client";

import Section from "../UI/Section";
import BlueUnderline from "../UI/BlueUnderline";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";
import { services } from "../../constants";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ArrowRight } from "../UI/Icons";

export default function ServicesSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [showAllServices, setShowAllServices] = useState(false);

  // Reset state when screen size changes
  useEffect(() => {
    setShowAllServices(isDesktop);
  }, [isDesktop]);

  // Choose how many services to display
  const displayedServices = showAllServices ? services : services.slice(0, 4);

  return (
    <Section id="services" className="bg-light-blue">
      <div>
        <h2 className="text-center">
          Our <BlueUnderline>Services</BlueUnderline>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="relative flex items-end px-2.5 py-4 h-[161px] sm:h-[250px] md:h-[320px] rounded-[6px] overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={service.bgImage}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
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

                <Link
                  href={service.href}
                  className="flex items-center text-sm font-medium hover:underline mt-auto"
                >
                  Request a quote <ArrowRight color="white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Conditional Button */}
        <div className="flex justify-center mt-10 md:mt-[50px] lg:mt-[60px]">
          {!isDesktop ? (
            <Button variant="primary">View more</Button>
          ) : (
            <Button variant="primary">Request a Quote</Button>
          )}
        </div>
      </div>
    </Section>
  );
}
