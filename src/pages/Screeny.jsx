import React from "react";
import emi from "../public/emi.png";
import eti from "../public/eti.png";
import qat from "../public/qat.png";
import sli1 from "../public/sli1.png";
import sli2 from "../public/sli2.png";
import sli3 from "../public/sli3.png";
import flag from "../public/flag.png";
import { FaChevronDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import logo from "../public/logo.png";
import { IoMenu } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import paragraph from "../public/Paragraph.png";
import { PiShoppingCart } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa6";

const Screeny = () => {
  return (
    <div className="w-full h-auto bg-[#F6F8FC]">
      <div className="w-full h-[7rem] bg-[#D50630]">
        <div className="w-[95%] h-auto  flex ml-[5%]">
          <div className=" mt-1">
            <img src={logo} alt="" className="w-20" />
          </div>

          <div className="w-[90%] ml-[8%] flex h-auto pt-4">
            <p className="text-[14px] cursor-pointer mt-2 pl-15 text-white">
              Hotels & Homes
            </p>
            <p className="text-[14px] cursor-pointer mt-2 ml-5 text-white">
              Coupons & Deals
            </p>
            <p className="text-[14px] cursor-pointer mt-2 ml-5 text-white">
              Apartments
            </p>

            <p className="ml-3 text-[14px] hover:underline cursor-pointer mt-2 text-white">
              ...
            </p>

            <div className="w-[38%] text-[12px] justify-between flex ml-[14%]">
              <button className="px-4 py-2 h-10 rounded-sm text-white bg-[#FFB200]">
                List your place
              </button>
              <div className="px-1 py-2 flex rounded-xl text-white">
                <img src={flag} alt="" className="w-5 h-5" />
                <p className="font-bold pl-2">USD</p>
              </div>
              <button className="px-4 py-2 h-10 rounded-sm text-white bg-[#FFB200]">
                Sign in
              </button>
              <button className="px-4 py-2 h-10 rounded-sm text-white bg-[#FFB200]">
                Create account
              </button>
            </div>

            <p className="text-[24px]  cursor-pointer mt-2 ml-8 text-white">
              <PiShoppingCart />
            </p>
            <p className="text-[24px] cursor-pointer mt-2 ml-8 text-white">
              <IoMenu />
            </p>
          </div>
        </div>

        {/*Buttons */}

        <div className="w-[70%] justify-between flex ml-[16%]">
          <div className=" w-[18rem] justify-between flex h-10  rounded-md text-[14px]">
            <div className="w-[50%] rounded-tl-md rounded-bl-md p-2 bg-[#EDF0F9] text-center h-full ">
              Karachi (KHI)
            </div>
            <div className="h-8 w-8 absolute text-center rounded-full ml-[10%] mt-1 bg-white text-[20px]">
              <CgArrowsExchange className="mt-1 ml-1" />
            </div>
            <div className="w-[50%] rounded-tr-md rounded-br-md bg-[#EDF0F9] p-2 text-center ml-1 h-full">
              Bangkok (BKK)
            </div>
          </div>
          <div className="p-3 w-[15rem] flex h-10 bg-[#333333] rounded-xl">
            <div className="text-white flex w-[49%]">
              <SlCalender className="" />
              <p className="ml-2 text-[12px]">Mon, 18 Nov</p>
            </div>
            <div className="text-white border-l flex w-[48%]">
              <SlCalender className="mt-0 ml-2" />
              <p className="ml-2 text-[12px]">Thu, 21 Nov</p>
            </div>
          </div>
          <div className="p-2 w-[5rem] flex h-10 rounded-md">
            <IoPeopleOutline className="ml-2 text-[18px] text-gray-400" />
            <p className=" leading-3 text-white">1</p>
            <FaChevronDown className=" ml-2 text-[18px]" />
          </div>
          <div className="p-2 w-[8rem] flex h-10 rounded-md">
            <p className=" leading-3 text-white">Economy</p>
            <FaChevronDown className=" ml-2 text-[18px]" />
          </div>
          <button className="px-8 py-2 rounded-xl text-white bg-[#FFB200]">
            Search
          </button>
        </div>
      </div>

      <div className="w-[80%] mb-32 flex mt-2 ml-[10%] h-auto">
        <div className="w-[30%] h-auto rounded-lg">
          <div className="w-[90%] p-4">
            <div className="w-full text-gray-500 text-[13px]">
              <p className="text-[18px]">Airlines</p>
              <p className="pt-4">Select all airlines</p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Asiana Airlines
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bangkok Airways
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Emirates Airline
              </p>
              <div className="w-full mt-3 text-center text-red-500">
                Show all 10 airlines
              </div>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-4 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="w-full flex mt-4 justify-between">
                <p className="text-[18px] ">Stops</p>
                <p className="text-yellow-500">Clear</p>
              </div>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Direct
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                1 Stop
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                2 Stops+
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-4 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="w-full flex mt-4 justify-between">
                <p className="text-[18px] ">Times</p>
                <p className="text-yellow-500">Clear</p>
              </div>
              <div className="w-full text-gray-500">
                <p className="pt-4">Departure 00:00 - 24:00</p>
                <div className="h-1 mt-4 w-full bg-[#FFB200]"></div>
                <div className="w-full flex mt-2 justify-between">
                  <p className=" ">00:00</p>
                  <p className="">24:00</p>
                </div>
              </div>
              <div className="w-full text-gray-500">
                <p className="pt-4">Arrival 00:00 - 24:00</p>
                <div className="h-1 mt-4 w-full bg-[#FFB200]"></div>
                <div className="w-full flex mt-2 justify-between">
                  <p className=" ">00:00</p>
                  <p className="">24:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-4 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="w-full flex mt-4 justify-between">
                <p className="text-[18px] ">Price per person</p>
                <p className="text-yellow-500">Clear</p>
              </div>
              <div className="w-full text-gray-500">
                <p className="pt-4">Up to USD7,800</p>
                <div className="h-1 mt-4 w-full bg-[#FFB200]"></div>
              </div>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-4 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="w-full flex mt-4 justify-between">
                <p className="text-[18px] ">Duration</p>
                <p className="text-yellow-500">Clear</p>
              </div>
              <div className="w-full text-gray-500">
                <p className="pt-4">Under 72 hours</p>
                <div className="h-1 mt-4 w-full bg-[#FFB200]"></div>
              </div>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-4 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="w-full flex mt-4 justify-between">
                <p className="text-[18px] ">Cabin class</p>
                <p className="text-yellow-500">Clear</p>
              </div>
              <div className="w-full text-gray-500">
                <p className="pt-4">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  Economy
                </p>
                <p className="pt-4">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  Mixed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%] mt-2 h-auto">
          <div className="w-full flex justify-between h-16">
            <div className="px-3 text-[14px] text-center border-2 border-[#E7E7E7] rounded-xl w-auto bg-white hover:text-white hover:bg-[#EF363F]  py-2 text-gray-500">
              <p>16 Nov - 19 Nov</p>
              <p>See Prices</p>
            </div>
            <div className="px-3 text-[14px] text-center border-2 border-[#E7E7E7] rounded-xl w-auto bg-white hover:text-white hover:bg-[#EF363F]  py-2 text-gray-500">
              <p>17 Nov - 20 Nov</p>
              <p>See Prices</p>
            </div>
            <div className="px-3 text-[14px] text-center border-2 border-[#E7E7E7] rounded-xl w-auto bg-white hover:text-white hover:bg-[#EF363F]  py-2 text-gray-500">
              <p>18 Nov - 21 Nov</p>
              <p>From USD 575</p>
            </div>
            <div className="px-3 text-[14px] text-center border-2 border-[#E7E7E7] rounded-xl w-auto bg-white hover:text-white hover:bg-[#EF363F]  py-2 text-gray-500">
              <p>19 Nov - 22 Nov</p>
              <p>See Prices</p>
            </div>
            <div className="px-3 text-[14px] text-center border-2 border-[#E7E7E7] rounded-xl w-auto bg-white hover:text-white hover:bg-[#EF363F]  py-2 text-gray-500">
              <p>20 Nov - 23 Nov</p>
              <p>See Prices</p>
            </div>
          </div>
          <p className="font-bold pt-2 text-[20px]">
            Select outbound flight to Bangkok
          </p>
          <p className="text-gray-400">
            Average round-trip price per passenger. The price includes taxes and
            fees.
          </p>
          <div className="w-full h-16 mt-4 border-2 border-[#E7E7E7] bg-white rounded-md">
            <ul className="px-2 py-1 w-full flex justify-between text-[14px]">
              <li className=" px-6 py-1 hover:border-b-2 border-yellow-300  hover:text-[#f10404]  cursor-pointer text-center">
                Cheapest <br />
                USD 575 • 30h 55m
              </li>
              <div className="h-12 w-[2px] bg-gray-300"></div>
              <li className=" px-6 py-1  hover:border-b-2 border-yellow-300   hover:text-[#f10404] cursor-pointer text-center">
                Best overall <br />
                USD 575 • 30h 55m
              </li>
              <div className="h-12 w-[2px] bg-gray-300"></div>
              <li className=" px-6 py-1  hover:border-b-2 border-yellow-300  hover:text-[#f10404] cursor-pointer text-center">
                Fastest <br />
                USD 922 • 21h 40m
              </li>
              <div className="h-12 w-[2px] bg-gray-300"></div>
              <li className="  px-6 py-1 hover:text-[#f10404] cursor-pointer  hover:border-b-2 border-yellow-300  pb-3 text-center pt-3">
                Sort by
              </li>
            </ul>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  12:55{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 15m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  12:55{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 15m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={eti} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
              Economy Value
              </button>
              <p className="font-bold">Etihad Airways</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>04:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:35{" "}
           
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>11h 55m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">707</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>03:30</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:05{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 35m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>03:00</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:05{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>13h 5m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>16:25</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  07:35{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>13h 10m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>33:30</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>13h 10m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>03:00</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>13h 40m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={qat} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] absolute rounded-sm">
              Economy Convenience
              </button>
              <p className="font-bold pt-8">Qatar Airways</p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-transparent"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>04:15</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:45{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 30m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">1,065</span>
              </p>
            </div>
          </div>


          <div className="w-full mt-3 p-4 h-[15rem] rounded-md text-[#333333]">
            <p>Need a hotel for your Bangkok trip?</p>
            <p>18 Nov - 21 Nov • 1 Adult</p>
            <div className="w-full flex gap-3 h-[14rem]">
              <div className="w-[25%] mt-4 rounded-md overflow-hidden bg-white h-full">
              <img src={sli1} alt="" className="w-full h-[50%]"/>
              <div className="p-2">
              <p className="text-[12px] font-bold">NANA Hotel Bangkok</p>
              <div className="w-full mt-4 text-[10px] flex">
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              </div>
              <p className="text-yellow-400 text-[12px]">7.8 Very good</p>
              <div className="w-full text-right">
                <p className="text-red-500 text-[10px]">USD  <span className="text-red-500 font-bold text-[18px]">  42</span></p>
                </div>
              </div>
              </div>
              <div className="w-[25%] mt-4 rounded-md overflow-hidden bg-white h-full">
              <img src={sli2} alt="" className="w-full h-[50%]"/>
              <div className="p-2">
              <p className="text-[12px] font-bold">Suvarnabhumi Ville <br />Airport Hotel</p>
              <div className="w-full mt-1 text-[10px] flex">
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              </div>
              <p className="text-yellow-400 text-[12px]">8.3 Excellent</p>
              <div className="w-full text-right">
                <p className="text-red-500 text-[10px]">USD  <span className="text-red-500 font-bold text-[18px]">  33</span></p>
                </div>
              </div>
              </div>
              <div className="w-[25%] mt-4 rounded-md overflow-hidden bg-white h-full">
              <img src={sli3} alt="" className="w-full h-[50%]"/>
              <div className="p-2">
              <p className="text-[12px] font-bold">D&D Inn Khaosan</p>
              <div className="w-full mt-4 text-[10px] flex">
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              <MdOutlineStar className="text-yellow-400"/>
              </div>
              <p className="text-yellow-400 text-[12px]">7.4 Very good</p>
              <div className="w-full text-right">
                <p className="text-red-500 text-[10px]">USD  <span className="text-red-500 font-bold text-[18px]">  26</span></p>
                </div>
              </div>
              </div>
              <div className="w-[25%] mt-4 rounded-md overflow-hidden justify-center bg-white h-full">
                <div className="w-12 mt-16 ml-14 h-12 rounded-full text-center bg-[#FFB200]">
                <FaChevronRight className="mt-4 ml-4 absolute"/>
                </div>
              <p className="text-[#FFB200] ml-16 mt-1 text-[12px]">See all</p>
                </div>
              </div>
          </div>

          <div className="w-full mt-24 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>23:45</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:05{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>16h 20m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
                Partially operated by Flydubai
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>16h 55m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={eti} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
              Economy Value
              </button>
              <p className="font-bold">Etihad Airways</p>
              <p className="text-gray-400 text-[10px]">
                
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>04:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  23:35{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 15m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">707</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:05{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>17h 25m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>12:00</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  07:35{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>17h 35m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">863</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>

         
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={eti} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
              Economy Value
              </button>
              <p className="font-bold">Etihad Airways</p>
              <p className="text-gray-400 text-[10px]">
                
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>04:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  23:35{" "}
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>12h 15m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">707</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-3 p-4 bg-white h-30 rounded-md flex">
            <div className="h-full w-[10%]">
              <img src={emi} alt="" className="object-cover mt-2" />
            </div>
            <div className="h-full w-[20%]">
              <button className="border-gray-400 border px-1 text-[14px] rounded-sm">
                Eco Saver
              </button>
              <p className="font-bold">Emirates Airline</p>
              <p className="text-gray-400 text-[10px]">
              </p>
              <div className="w-full mt-1 h-5 flex justify-between">
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#FFB200]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
                <div className="h-full w-[23%] rounded-sm bg-[#EDF0F9]"></div>
              </div>
            </div>
            <div className="h-full mt-6 ml-8 w-[30%] text-center">
              <ul className="gap-2 font-bold text-[20px] flex">
                <li>22:40</li>
                <li className="text-gray-400 pt-1 text-[15px] font-normal">
                  __1__
                </li>
                <li>
                  18:40{" "}
                  <span className="text-[10px] text-red-500 absolute">+1</span>
                </li>
              </ul>
              <ul className="gap-2 justify-between w-[65%] text-gray-400 pt-1 text-[15px] font-normal flex">
                <li>KHI</li>
                <li>18h 0m</li>
                <li>BKK </li>
              </ul>
            </div>
            <div className="w-[10%] ml-[22%]">
              <p className="text-red-500 pt-4 text-[10px]">
                USD{" "}
                <span className="text-red-500 font-bold text-[24px]">833</span>
              </p>
            </div>
          </div>

        </div>
      </div>



      <div className="bg-[#E9EBEE] w-full h-[50vh]">
        <div className="w-[70%] flex ml-[15%] pt-8">
          <div>
            <p>Help</p>
            <ul className="text-[13px] pt-3">
              <li>Help center</li>
              <li>FAQs</li>
              <li>Privacy policy</li>
              <li>Information</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div className="ml-32">
            <p>Company</p>
            <ul className="text-[13px] pt-3">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>PointsMAX</li>
            </ul>
          </div>
          <div className="ml-32">
            <p>Destinations</p>
            <ul className="text-[13px] pt-3">
              <li>Countries/Territories</li>
              <li>All Flight Routes</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full p-4 text-center h-[50vh] bg-[#2A2A2E]">
        <p className="text-gray-500 pt-14">
          All material herein © 2005–2024 Bookforme. Ltd. All Rights Reserved.
        </p>
        <p className="text-gray-500">
          Bookforme is part of Booking Holdings Inc. The world leader in online
          travel & related services.
        </p>
        <img src={paragraph} alt="" className="ml-24 mt-6" />
      </div>
    </div>
  );
};

export default Screeny;
