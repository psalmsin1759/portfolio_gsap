"use client";

import React, { useRef } from "react";
import { devSkills, engineeringSkills } from "@/utils/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsBanner() {
  const barsRef = useRef<HTMLDivElement[]>([]);

  const barsEngineeringRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      barsRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: `${devSkills[i].percent}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

      barsEngineeringRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: `${engineeringSkills[i].percent}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Developer Skills
        </h2>
        <p className="text-gray-300">
          Here’s a quick glance at the technologies and tools I’m most
          comfortable with.
        </p>
        {devSkills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-100 font-medium">{skill.title}</span>
              <span className="text-gray-300 text-sm">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded">
              <div
                ref={(el) => {
                  if (el) barsRef.current[index] = el;
                }}
                className="h-3 rounded bg-primary"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Technical Competencies
        </h2>
        <p className="text-gray-300">
          I bring a versatile skill set covering software architecture, API
          design, team leadership, and modern development practices. These
          competencies enable me to build scalable systems, write clean and
          maintainable code, and drive projects forward with efficiency and
          clarity.
        </p>

        {engineeringSkills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-100 font-medium">{skill.title}</span>
              <span className="text-gray-300 text-sm">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded">
              <div
                ref={(el) => {
                  if (el) barsEngineeringRef.current[index] = el;
                }}
                className="h-3 rounded bg-primary"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
