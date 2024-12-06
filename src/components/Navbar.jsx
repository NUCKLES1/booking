"use client";

import React, { useState } from "react";
import logo from "../public/logo.png";
import { GiWorld } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoBed } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <div className="w-full h-48 max-sm:h-28 bg-[#D50630]">
      <div className="w-[90%] h-auto justify-between flex ml-[5%]">
        <div className="w-40% max-sm:w-[20%]">
          <img src={logo} alt="" className="w-40" />
        </div>

        <div className="w-40% flex h-auto justify-end max-sm:p-4 pt-14">
          <p className="text-[24px] cursor-pointer pl-15 text-white">
            <GiWorld />
          </p>
          <p className="text-[24px] cursor-pointer ml-5 text-white">
            <FaHeart />
          </p>
          <p className="text-[24px] cursor-pointer ml-5 text-white">
            <HiMiniUserCircle />
          </p>

          <p className="ml-3 hover:underline cursor-pointer text-white">
            log in
          </p>

          <p className="text-[34px] mt-[-4px] cursor-pointer ml-5 text-white">
            <IoMenu onClick={toggle} />
          </p>
          <div
            className="absolute w-[15rem] p-4 text-center h-[20rem] bg-white rounded-md mt-14"
            style={{ display: showMe ? "block" : "none" }}
          >
            <div className="block h-full w-full">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/discount">Discount</Link>
              </div>
              <div>
                <Link to="/hotel">Hotels</Link>
              </div>
              <div>
                <Link to="/screeny">Screen</Link>
              </div>
              <div>
                <Link to="/home2">Home2</Link>
              </div>
              <div>
                <Link to="/otp">Otp</Link>
              </div>
              <div>
                <Link to="/otpcode">Otpcode</Link>
              </div>
              <div>
                <Link to="/otpsuccess">Otpsuccess</Link>
              </div>
              <div>
                <Link to="/signin">Signin</Link>
              </div>
              <div>
                <Link to="/signup">Signup</Link>
              </div>
              <div>
                <Link to="/theme">Theme-agoda</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Buttons */}

      <div className="w-[18%] justify-between flex ml-[9%]">
        <button className="px-8 py-2 rounded-xl text-white bg-[#FFB200]">
          <BiSolidPlaneAlt className="mb-[-20px] ml-[-18px]" /> Flight
        </button>
        <button className="px-8 py-2 rounded-xl text-white bg-[#D50630] border border-white">
          <IoBed className="mb-[-22px] ml-[-18px]" />
          Hotels
        </button>
      </div>

      {/*Buttons ends */}
    </div>
  );
};

export default Navbar;
