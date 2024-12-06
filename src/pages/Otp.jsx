import React from "react";
import mbg from "../public/bgover.png";
import logo from "../public/logo.png";
import google from "../public/google.png";
import facebook from "../public/facebook.png";
import apple from "../public/apple.png";
import image from "../public/Image.png";


const Otp = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <img src={mbg} alt="" className="h-auto overflow-hidden" />
      </div>
      <div className="w-[90%] h-full absolute top-[0%]">
        <div className="w-[40%] h-44">
          <img src={logo} alt="" className="w-40" />
        </div>
        <div className="w-[75%] flex justify-between  h-[80vh] mt-[-10vh] ml-[20%]">
          <div className="w-[40%] mt-[30%]">
            <p className="text-white font-bold text-[30px]">
              Building the Future...
            </p>
            <p className="text-gray-300 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-[50%] h-[112.6vh] rounded-tl-3xl rounded-tr-3xl bg-white">
            <div className="mt-10 ml-40">
              <img src={image} alt="" className="w-20 ml-42" />
            </div>
            <div className="w-[80%] mt-10 ml-[10%]">
              <p className="font-bold text-[24px]">OTP Verification</p>
              <p className="text-gray-400 mt-4 text-[14px]">
                Enter email and phone number to send one time Password
              </p>
              <div className="w-full mt-8">
                <form className="form" action="">
                  <div className="input-field">
                    <input
                      required=""
                      autoComplete="off"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      required=""
                      autoComplete="off"
                      type="password"
                      name="text"
                      id="password"
                    />
                    <label htmlFor="username">Phone Number</label>
                  </div>
                </form>
              </div>
              <div className="w-full mt-4">
                <button className="bg-[#212121] text-white rounded-xl w-full py-4 text-[12px]">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
