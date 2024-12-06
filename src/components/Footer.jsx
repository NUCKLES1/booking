import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] bg-[#D50630]">
      <div className="flex w-[80%] pt-12 justify-between ml-[10%]">
        <div>
          <button className="pl-4 pr-12 py-2 rounded-md text-white text-[14px] bg-[#ffffff34]">
            United States - English (US) - $USD
          </button>
        </div>
        <ul className="text-white">
          <li className="hover:underline">Help</li>
          <li className="hover:underline mt-3">Log in</li>
        </ul>
        <ul className="text-white">
          <li className="hover:underline">Privacy policy</li>
          <li className="hover:underline mt-3">Terms of service</li>
          <li className="hover:underline mt-3">Company Details</li>
        </ul>
        <ul className="w-[25%]">
          <div className="flex justify-between text-white pb-3 h-10 w-[90%]">
            <p>Explore</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
          <div className="flex justify-between text-white pb-3 h-10 w-[90%]">
            <p>Company</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
          <div className="flex justify-between text-white pb-3 h-10 w-[90%]">
            <p>Partner</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
          <div className="flex justify-between text-white pb-3 h-10 w-[90%]">
            <p>Trips</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
          <div className="flex justify-between text-white pb-3 h-10 w-[90%]">
            <p>International Sites</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
        </ul>
      </div>
      <div className="w-full text-white text-[12px] text-center">
      <p>© Bookforme Ltd 2002 – 2024</p>
      <p>Compare and book cheap flights from anywhere, to everywhere</p>
      </div>
    </div>
  );
};

export default Footer;
