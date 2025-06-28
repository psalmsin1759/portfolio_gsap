"use client";
import React, { useRef } from "react";
import { productsData } from "@/utils/project";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Animate cards on scroll
  useGSAP(() => {
    cardsRef.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-16 justify-center items-center">
      <h1 className="text-2xl text-primary">Latest Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productsData.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <ProjectCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
