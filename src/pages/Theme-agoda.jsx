import React from "react";
import logo from "../public/logo.png";
import box from "../public/Box.png";
import vector from "../public/Vector.png";
import cheese from "../public/cheese.png";
import paragraph from "../public/Paragraph.png";
import { IoMdCheckmark } from "react-icons/io";

const Theme = () => {
  return (
    <div className="h-auto w-full bg-[#F8F7F9]">
      <div className="w-full h-16 bg-[#D50630]">
        <div className="w-[80%] h-auto flex justify-between ml-[10%]">
          <div className="">
            <img src={logo} alt="" className="w-20" />
          </div>

          <div className="w-[60%] h-auto justify-end pt-2">
            <div className="w-[70%] ml-[16%] mt-4 border-2 border-white"></div>
            <div className="w-full mt-[-15px] justify-between flex">
              <div className="w-[30%] text-center">
                <div className="w-6 ml-[45%] rounded-full h-6 bg-white text-center">
                  1
                </div>
                <p className=" text-white">Passenger details</p>
              </div>
              <div className="w-[30%] text-center">
                <div className="w-6 ml-[45%] rounded-full h-6 bg-white text-center">
                  2
                </div>
                <p className=" text-white">Payment information</p>
              </div>
              <div className="w-[30%] text-center">
                <div className="w-6 ml-[45%] rounded-full h-6 bg-white text-center">
                  <IoMdCheckmark className="pt-2 ml-1 h-4 w-4" />
                </div>
                <p className=" text-white">Booking is confirmed!</p>
              </div>
            </div>
          </div>
          <button className="px-4 h-10 py-0 rounded-xl text-white bg-[#FFB200] text-[12px] mt-3">
            SIGN IN
          </button>
        </div>
      </div>

      <div className="w-[80%] h-auto flex justify-between ml-[10%]">
        <div className="w-[65%] h-auto">
          <div className="w-full h-[7rem] flex bg-white">
            <div className="w-[13%]">
              <img src={box} alt="" className="w-38 ml-4 mt-4" />
            </div>
            <div className="w-[90%] pt-2 pr-3">
              <ul className="flex text-[#FFB200] w-full justify-between">
                <li>Sign in for faster booking!</li>
                <li>Sign</li>
              </ul>
              <p className="text-gray-500">
                Signing into your Bookforme account lets us pre-fill your forms
                and saved credit cards, so you can complete your booking with
                less typing!
              </p>
            </div>
          </div>

          <div className="w-full h-auto pb-10 bg-white mt-6 rounded-xl">
            <div className="p-4">
              <p className="text-gray-400 text-[13px]">For all bookings</p>
              <p className="text-[23px]">Contact details</p>
              <p className="text-gray-500 text-[13px]">
                This is where your confirmation will be sent
              </p>
              <p className="text-red-400 text-[13px]">*Required field</p>
            </div>
            <div className="p-4 grid gap-3 grid-cols-2 grid-rows-3">
              <input
                type="text"
                className="w-full border border-gray-400 h-14 p-2 rounded-md"
              />
              <input
                type="text"
                className="w-full border border-gray-400 h-14 p-2 rounded-md"
              />
              <input
                type="text"
                className="w-full border border-gray-400 h-14 p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="United State"
                className="w-full border border-gray-400 h-14 p-2 rounded-md"
              />
              <div>
                <p className="text-gray-500 text-[13px]">Phone number *</p>
                <div className="w-full gap-3 grid grid-cols-2">
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-400 h-14 p-2 rounded-md"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-400 h-14 p-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-4 bg-white flex border border-gray-400 h-14 text-[#FFB200]">
            <div className="w-2 h-full bg-[#FFB200]"></div>
            <img src={vector} alt="" className="h-4 mt-5 ml-6" />
            <p className="p-4">No add-ons found. Proceed to payment</p>
          </div>

          <div className="w-full justify-between mt-4 flex text-gray-400 h-20">
            <div>
              <p className="p-4">
                By proceeding with this booking, I agree to Agoda’s <br />
                <span className="text-[#FFB200]">Terms of Use</span> and{" "}
                <span className="text-[#FFB200]">Privacy Policy</span>
              </p>
            </div>
            <div>
              <button className="bg-[#FFB200] h-12 w-48 rounded-lg mt-4"></button>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-auto">
          <div className="w-full h-14 border border-gray-400  rounded-lg"></div>

          <div className="w-full mt-4 h-14 border border-gray-400  rounded-lg flex">
            <p className="pt-3 pl-4">Total</p>
            <input
              type="text"
              placeholder="Confirming price with airline…"
              className="text-gray-300 bg-transparent text-[14px] w-full ml-16"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e0dbe66d] p-4 mt-20 rounded-bl-md rounded-br-md h-28">
        <img src={cheese} alt="" className="ml-8" />
        <div>
          <span className="text-[20px] pl-4">Manage Cookie Preference</span>
          <p className="pl-4 text-[13px]">
            Agoda only uses cookies that are strictly necessary for
            functionality. We do not use analytical or marketing cookies. For
            more details on cookies, click
            <span className="text-[#FFB200]"> here</span>
          </p>
        </div>
      </div>

      <div className="w-full p-4 h-36 bg-[#2A2A2E]">
        <img src={paragraph} alt="" className="ml-24 mt-6" />
      </div>
    </div>
  );
};

export default Theme;
