import React from "react";
import mbg from "../public/bgover.png";
import logo from "../public/logo.png";
import success from "../public/success.png";

const Otpsuccess = () => {
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
          <div className="mt-28 ml-44">
              <img src={success} alt="" className="w-20 ml-42" />
            </div>
            <div className="w-[80%] text-center mt-16 ml-[10%]">
              <p className="font-bold text-[24px]">Success!</p>
              <p className="text-gray-400 mt-4 text-[14px]">
              Congratulations! You have been successfully authenticated
              </p>
              <div className="w-full mt-12">
                <button className="bg-[#D50630] text-white rounded-xl w-full py-4 text-[12px]">
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

export default Otpsuccess;