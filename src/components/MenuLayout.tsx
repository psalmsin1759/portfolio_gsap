import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";



import { menus } from "@/utils/data";
interface MenuProps {
  toggle: () => void;
  isMenuOpen: boolean;
}

export default function MenuLayout({ toggle, isMenuOpen }: MenuProps) {
  const handleToggle = () => {
    toggle();
  };

  

  return (
    <div
      className={` w-full flex flex-col justify-between bg-primary h-screen p-16 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-50`}
    >
      <div className="flex justify-between items-center">
        <span className="text-charcoal text-2xl font-bold">SamsonUde</span>
        <IoCloseOutline
            onClick={handleToggle}
            className="text-3xl md:text-5xl text-charcoal cursor-pointer"
          />
      </div>

      <div className="text-5xl md:text-7xl text-black flex justify-center">
        <ul className="flex flex-col gap-4">
          {menus.map((menu, index) => (
            <li key={index}>{menu.name}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 text-[14px] text-charcoal font-bold items-end">
        <div className="hidden md:block ">
          <IoCloseOutline
            onClick={handleToggle}
            className="text-3xl md:text-5xl text-charcoal cursor-pointer"
          />
        </div>
        <div>
          <ul className=" flex flex-col gap-1">
            <li className="flex items-center gap-1">GITHUB <HiOutlineArrowTopRightOnSquare/></li>
            <li className="flex items-center gap-1">LINKEDIN <HiOutlineArrowTopRightOnSquare/></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <li>samson_ude@yahoo.com</li>
            <li>+234 9125 0949 95</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <p>© {new Date().getFullYear()} Samson Ude. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
