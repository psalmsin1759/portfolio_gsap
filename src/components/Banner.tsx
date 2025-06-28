import React from "react";

export default function Banner() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
      <div
        className=" bg-card  p-8 flex flex-col gap-8 rounded-2xl  m-4  transition-all  duration-300  hover:shadow-[2px_2px_0px_var(--tw-shadow-color)]  hover:shadow-primary"
      >
        <div className="flex gap-4 items-center">
          <span className="text-primary text-9xl font-bold">10</span>
          <span className="text-2xl text-white">Year Of Experience</span>
        </div>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Building applications across Fintech, Healthcare, EdTech, eCommerce,
          Real Estate, Telecoms — including USSD, SMS, and IVR solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-2xl transition-all  duration-300  hover:shadow-[2px_2px_0px_var(--tw-shadow-color)]  hover:shadow-primary"></div>
        <div className="bg-card p-4 rounded-2xl transition-all  duration-300  hover:shadow-[2px_2px_0px_var(--tw-shadow-color)]  hover:shadow-primary"></div>
        <div className="bg-card p-4 rounded-2xl transition-all  duration-300  hover:shadow-[2px_2px_0px_var(--tw-shadow-color)]  hover:shadow-primary"></div>
        <div className="bg-card p-4 rounded-2xl transition-all  duration-300  hover:shadow-[2px_2px_0px_var(--tw-shadow-color)]  hover:shadow-primary"></div>
      </div>
    </div>
  );
}
