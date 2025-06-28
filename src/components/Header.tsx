"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import MenuLayout from "./MenuLayout";
import { menus } from "@/utils/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full  px-2 md:px-16 py-2 md:py-4">
      <MenuLayout toggle={toggle} isMenuOpen={isMenuOpen} />
      <div className="px-8 py-8">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="text-primary text-2xl md:text-3xl font-bold"
          >
            Samson Ude
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-7">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    className="hover:bg-card hover:text-primary hover:px-2 hover:py-1 hover:rounded no-underline"
                    href={menu.path}
                  >
                    {" "}
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={"https://github.com/psalmsin1759"} target="_blank">
              <FaGithub className=" w-10 h-10 text-xl bg-card hover:bg-primary hover:text-charcoal rounded-full p-3" />
            </Link>
            <Link href={"https://linkedin.com/in/samsonude"} target="_blank">
              <FaLinkedinIn className=" w-10 h-10 text-xl bg-card hover:bg-primary hover:text-charcoal rounded-full p-3" />
            </Link>
            <CiMenuFries
              onClick={toggle}
              className="w-12 h-12  bg-primary rounded-full p-3 text-xl text-charcoal cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
