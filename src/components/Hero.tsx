"use client";

import React, { useRef, useState } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Backend Developer",
    "MERN Developer",
    "Engineering Manager",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const helloRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const profileImageRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const moveToProjects = () => {
    router.push("/projects")
  }

  const skillRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(helloRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        titleRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        paragraphRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        buttonRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        profileImageRef.current,
        {
          x: 300,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  useGSAP(
    () => {
      const interval = setInterval(() => {
        const tl = gsap.timeline();

        tl.to(titleRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
            gsap.set(titleRef.current, { x: 100 });
          },
        });

        tl.to(titleRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 2000);

      return () => clearInterval(interval);
    },
    { dependencies: [titles.length] }
  );

  useGSAP(() => {
    skillRefs.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        y: "+=10",
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "sine.inOut",
        delay: 0,
      });
    });
  }, []);

  return (
    <div className="w-full py-6 flex flex-col-reverse md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-4 p-6">
        <span
          ref={helloRef}
          className="text-lg text-white font-medium inline-block"
        >
          Hello,
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          I am Samson Ude, a{" "}
          <span ref={titleRef} className="text-primary inline-block">
            {titles[currentIndex]}
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-gray-300 text-base md:text-lg leading-relaxed"
        >
          I&apos;m a software engineer who loves building cool stuff — whether
          it&apos;s a clean UI with React/Next.js/Vue, a solid backend with
          Node.js (Express) / PHP (Laravel), or a mobile app in Flutter.
          I&apos;m well-versed in containerization using Docker and experienced
          in implementing CI/CD pipelines with Github Action. I&apos;m all about
          solving problems, learning fast, and making tech that works smoothly
          and looks great.
        </p>
        <button
          ref={buttonRef}
          onClick={moveToProjects}
          className="mt-4 flex gap-2 items-center hover:bg-card hover:text-white bg-primary text-charcoal font-semibold px-6 py-3 rounded hover:bg-opacity-80 transition-colors cursor-pointer"
        >
          View Projects <HiOutlineArrowTopRightOnSquare />
        </button>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative h-[300px] md:h-auto">
        <div className="relative w-fit">
          <div
            className="flex justify-center items-center"
            ref={profileImageRef}
          >
            <Image
              src="/assets/images/profile.png"
              alt="Samson"
              width={400}
              height={400}
              className="w-52 h-auto md:w-96 relative z-10"
              priority
            />
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            {[
              "/assets/images/laravel.png",
              "/assets/images/nextjs.png",
              "/assets/images/react.png",
              "/assets/images/nodejs.png",
              "/assets/images/aws.png",
              "/assets/images/gcp.png",
            ].map((src, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) skillRefs.current[index] = el;
                }}
                className="w-8 h-8 md:w-16 md:h-16"
              >
                <Image
                  src={src}
                  alt={`Skill ${index}`}
                  width={50}
                  height={50}
                  className="rounded-full object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
