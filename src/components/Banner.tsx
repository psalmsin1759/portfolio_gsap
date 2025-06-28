"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const bannerValues = [
  { num: "50+", text: "Projects completed" },
  { num: "10+", text: "Mobile apps built" },
  { num: "40+", text: "Enterprise Integration" },
  { num: "100+", text: "Satisfied Customers" },
];

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const leftColumn = containerRef.current?.querySelector(".left-column");
      const rightColumn = containerRef.current?.querySelector(".right-column");

      if (leftColumn) {
        gsap.from(leftColumn, {
          x: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      }

      if (rightColumn) {
        gsap.from(rightColumn, {
          x: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="left-column bg-card p-8 flex flex-col gap-8 rounded-2xl m-4 transition-all duration-300 hover:shadow-[2px_2px_0px_var(--tw-shadow-color)] hover:shadow-primary">
        <div className="flex gap-4 items-center">
          <span className="text-primary text-9xl font-bold">10</span>
          <span className="text-2xl text-white">Year Of Experience</span>
        </div>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Building applications across Fintech, Healthcare, EdTech, eCommerce,
          Real Estate, Telecoms — including USSD, SMS, and IVR solutions.
        </p>
      </div>

      <div className="right-column grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        {bannerValues.map((item, index) => (
          <div
            key={index}
            className="bg-card p-1 flex flex-col gap-1 justify-center items-center rounded-2xl transition-all duration-300 hover:shadow-[2px_2px_0px_var(--tw-shadow-color)] hover:shadow-primary"
          >
            <p className="text-4xl text-white font-semibold">{item.num}</p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
