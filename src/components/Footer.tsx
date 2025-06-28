import React from "react";
import { menus } from "@/utils/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-card  mt-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-9 py-28">
        <div className="flex flex-col gap-6">
          <span className="text-2xl md:text-3xl font-bold text-primary">
            Samson Ude
          </span>
          <p className="text-gray-300 text-sm">
            Let’s connect! Feel free to reach out
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              placeholder="Type your email"
              className="px-4 py-3 rounded-lg bg-background text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            />
            <button className="bg-primary hover:bg-opacity-80 text-charcoal font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold text-xl mb-4">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.path}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-xl mb-2">
              Contact Info
            </h2>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="flex gap-2 items-center">
                {" "}
                <CiMail />
                samson_ude@yahoo.com
              </li>
              <li className="flex gap-2 items-center">
                <IoPhonePortraitOutline />
                +234 91250 94 985
              </li>
            </ul>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-gray-600 hover:bg-primary hover:text-charcoal rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-gray-600 hover:bg-primary hover:text-charcoal rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-3  px-9 py-4 text-[12px]">
          <div>
            <span>© samsonude 2025 | All Rights Reserved </span>
          </div>
          <div>
            <ul className="flex gap-3 ">
              <li className="hover:underline hover:text-primary">Terms & Conditions</li>
              <li className="hover:underline hover:text-primary">Privacy policy</li>
              <li className="hover:underline hover:text-primary">Contact</li>
            </ul>
          </div>
      </div>
    </footer>
  );
}
