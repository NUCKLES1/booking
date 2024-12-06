import { Footer, Navbar } from "../components";
import React from "react";
import hero from "../public/hero.png";
import { TbWorldSearch } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
import bg from "../public/bg.jpg";
import mini1 from "../public/1.png";
import mini2 from "../public/2.png";
import mini3 from "../public/3.png";
import mini4 from "../public/4.png";
import mini5 from "../public/5.png";
import mini6 from "../public/6.png";
import pic from "../public/6.png";
import { RiSignalTowerFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const Discount = () => {
  return (
    <div className="w-full h-auto">
      <Navbar />
      {/*sale SECTION */}
      <div className="w-full h-auto">
        <img src={hero} alt="" className="h-auto object-cover" />
        <div className="w-[70%] ml-[15%] mt-[-7%] text-left flex justify-between">
          <button className="bg-white text-left px-12 w-[29%] py-6 rounded-lg text-black">
            <TbWorldSearch className="mb-[-22px] ml-[-24px]" />
            Flight
          </button>
          <button className="bg-white text-left px-12 w-[29%] py-6 rounded-lg text-black">
            <IoBed className="mb-[-22px] ml-[-24px]" />
            Hotels
          </button>
          <button className="bg-white text-left px-12 w-[29%] py-6 rounded-lg text-black">
            <SlCalender className="mb-[-22px] ml-[-24px]" />
            Car rental
          </button>
        </div>

        {/*sale SECTION ends*/}

        <div>
          <div className=" h-auto mt-28 justify-center items-center w-[78%] ml-[11%]">
            <img
              src={bg}
              alt=""
              className="h-[80vh] object-cover rounded-xl"
            />
            <div className="w-full mt-[-5%] justify-center text-center items-center">
              <button className="bg-white rounded-lg relative text-black font-bold px-4 py-1">
                Explore Baku
              </button>
            </div>

            <div className="w-[80%]">
              <div className="w-[80%] mt-10 ml-[10%]">
                <p className="text-[32px] font-bold text-black">
                  Attractions, activities, and experiences
                </p>
                <p>
                  Discover new attractions and experiences to match your
                  interests and travel style
                </p>
              </div>
              <div className="w-full flex ml-[10%] rounded-md mt-16 border-yellow-400 border-2 h-12">
                <div className="flex w-[45%]">
                  <RiSignalTowerFill className="mt-3 ml-4" />
                  <p className="pt-2 ml-2">Where are you going?</p>
                </div>
                <div className="flex w-[45%] border-l">
                  <SlCalender className="mt-3 ml-4" />
                  <p className="pt-2 ml-2">Select your dates</p>
                </div>
                <button className="bg-[#D50630] rounded-md text-white px-6">
                  Search
                </button>
              </div>
              <div className="w-full mt-10 ml-[10%]">
                <p className="font-bold">Nearby destination</p>
                <div className="w-full mt-4 gap-3 grid grid-cols-3 grid-rows-2">
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini1}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">New York</p>
                      <p className="text-white text-[12px]">
                        1819 things to do
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini2}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">Las Vegas</p>
                      <p className="text-white text-[12px]">914 things to do</p>
                    </div>
                  </div>
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini3}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">Key West</p>
                      <p className="text-white text-[12px]">261 things to do</p>
                    </div>
                  </div>
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini4}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">San Diego</p>
                      <p className="text-white text-[12px]">371 things to do</p>
                    </div>
                  </div>
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini5}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">Miami</p>
                      <p className="text-white text-[12px]">775 things to do</p>
                    </div>
                  </div>
                  <div className="w-full h-[10rem]">
                    <img
                      src={mini6}
                      alt=""
                      className="h-full object-cover rounded-xl"
                    />
                    <div className="mt-[-3rem] ml-4">
                      <p className="text-white font-bold">New Orleans</p>
                      <p className="text-white text-[12px]">547 things to do</p>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-24 mt-24">
                  <p className="font-bold text-[15px]">
                    Your account, your travel
                  </p>
                  <div className="border-2 rounded-md mt-2 border-gray-500 w-full flex h-[8rem]">
                    <div className="w-[80%]">
                      <p className="font-bold text-[12px] mt-4 ml-4">
                        All your trip details in one place
                      </p>
                      <p className="text-gray-500 ml-4">
                        Sign in to book faster and manage your trip with ease
                      </p>
                      <div className="w-[25%] justify-between mt-4 ml-4 flex">
                        <button className="text-white rounded-md px-3 text-[12px] py-1 bg-[#D50630]">
                          Sign in
                        </button>
                        <button className="text-black rounded-md px-3 py-1 hover:bg-[#D50630]">
                          Register
                        </button>
                      </div>
                    </div>
                    <div className="w-24 ml-12 mt-4 h-24">
                      <img src={pic} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discount;