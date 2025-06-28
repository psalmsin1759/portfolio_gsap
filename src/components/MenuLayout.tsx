import React from "react";
import { IoCloseOutline } from "react-icons/io5";

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
      className={`w-full bg-primary h-screen p-16 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-50`}
    >
      <div className="flex justify-between items-center">
        <span className="text-charcoal text-2xl font-bold">SamsonUde</span>
        <IoCloseOutline
          onClick={handleToggle}
          className="text-3xl text-charcoal cursor-pointer"
        />
      </div>
    </div>
  );
}
