import { Footer, Navbar } from "../components";
import React from "react";
import background from "../public/background.jpg";
import background2 from "../public/background2.jpg";
import west from "../public/west.png";
import { TbWorldSearch } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-auto">
      <Navbar />

      {/*Drive the dream SECTION */}
      <div className="w-full h-auto">
        <img src={background} alt="" className="h-screen w-full object-cover" />

        <div className="w-[80%] mt-[-70vh] max-sm:mt-[-90vh] ml-[10%]">
          <p className="text-[30px] text-white">
            Millions of cheap flights. One easy search.
          </p>
          <div className="w-full mt-8 h-auto">
            <div className="w-full h-auto max-sm:block md:block sm:grid-cols-4 sm:grid-rows-2 flex">
              <button className="text-left text-gray-500 bg-white pl-6 pr-20 py-2 text-[13px] rounded-lg rounded-br-none rounded-tr-none">
                From <br />
                <span className="text-[15px] text-black">
                  Chicago, il, (Any)
                </span>
              </button>
              <button className="text-left ml-1 text-gray-500 bg-white pl-6 pr-20 py-2 text-[13px] rounded-lg rounded-bl-none rounded-tl-none">
                To <br />
                <span className="text-[15px]">Country, city or airport</span>
              </button>
              <button className="text-left ml-1 text-gray-500 bg-white pl-6 pr-20 py-2 text-[13px] rounded-lg">
                Return <br />
                <span className="text-[15px]">Add date</span>
              </button>
              <button className="text-left ml-1 text-gray-500 bg-white pl-6 pr-20 py-2 text-[13px] rounded-lg">
                Travelers and cabin class <br />
                <span className="text-[15px] text-black">1 Adult, Economy</span>
              </button>
              <button className="text-left ml-1 text-white px-6 py-2 text-[13px] rounded-lg bg-[#FFB200] ">
                Search
              </button>
            </div>

            <div className="mt-4">
              <ul className="text-white flex">
                <li>
                  <input type="checkbox" id="" value="" className="h-4 w-4" />{" "}
                  Add nearby airports
                </li>
                <li className="ml-6">
                  <input type="checkbox" id="" value="" className="h-4 w-4" />{" "}
                  Add nearby airports
                </li>
              </ul>
              <p className="text-white">
                <input type="checkbox" id="" value="" className="h-4 w-4" />
                Direct Flights
              </p>
            </div>

            <div className="w-full mt-5">
              <div>
                <h1 className="text-white font-bold text-[30px]">
                  Drive the Dream in Western Australia
                </h1>
                <div className="flex text-white">
                  <img src={west} width={80} height={80} alt="" />
                  <p>In partnership with Western Australia</p>
                </div>
              </div>
            </div>

            <div className="w-full mt-24 text-left flex justify-between">
              <button className="bg-[#D50630] text-left px-8 w-[23%] py-6 rounded-lg text-white">
                <TbWorldSearch className="mb-[-22px] ml-[-18px]" />
                Discover everywhere
              </button>
              <button className="bg-[#D50630] text-left px-8 w-[23%] py-6 rounded-lg text-white">
                <IoAnalyticsSharp className="mb-[-22px] ml-[-18px]" />
                Travel trends
              </button>
              <button className="bg-[#D50630] text-left px-8 w-[23%] py-6 rounded-lg text-white">
                <IoBed className="mb-[-22px] ml-[-18px]" />
                Hotels
              </button>
              <button className="bg-[#D50630] text-left px-8 w-[23%] py-6 rounded-lg text-white">
                <FaCarSide className="mb-[-22px] ml-[-18px]" />
                Car rental
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Drive the dream SECTION Ends */}

      {/*Reach further SECTION */}
      <div className=" h-auto mt-28 w-[78%] ml-[11%]">
        <img
          src={background2}
          alt=""
          className="h-[80vh] object-cover rounded-xl"
        />

        <div className="mt-[-24%] w-40% ml-8">
          <p className="text-[35px] leading-9 font-bold text-white">
            Reach further, stay
            <br />
            closer
          </p>
          <p className="mt-4 text-[14px] text-white">
            Escape for a romantic hotel stay at prices <br />
            you'll adore.
          </p>
          <button className="bg-white mt-6 font-bold rounded-lg px-4 text-[14px] py-2">
            Find your room
          </button>
        </div>

        {/*Reach further SECTION Ends */}

        <div className="w-full mt-24 h-screen">
          <h1 className="text-black text-[25px] font-bold">
            Booking flights with Bookforme
          </h1>
          <div className="grid grid-rows-4 mt-8 grid-cols-2 w-full h-auto">
            <div className="border-b flex justify-between pb-3 h-10 w-[90%]">
              <p>How does Bookforme work?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 w-[90%]">
              <p>Does Bookforme do hotels too?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>How can I find the cheapest flight using Bookforme?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>What’s a Price Alert?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>Where should I book a flight to right now?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>Can I book a flexible flight ticket?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>Do I book my flight with Bookforme?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>Can I book flights that emit less CO₂?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
            <div className="border-b flex justify-between pb-3 h-10 mt-2 w-[90%]">
              <p>What happens after I’ve booked my flight?</p>
              <FaChevronDown className="mt-[5px]" />
            </div>
          </div>
          <div className="border-b flex justify-between pb-3 h-10 mt-16 w-[95%]">
            <p className="font-bold text-[20px]">Our international sites</p>
            <FaChevronDown className="mt-[5px]" />
          </div>
        </div>

        <div className="h-[30rem]">
          <p className="text-[20px]">Start planning your adventure</p>

          <div className="w-[55%] max-sm:block justify-between mt-6 flex">
            <button className="border text-black px-4 py-1 hover:text-white hover:border-none hover:bg-[#D50630] rounded-lg">
              Country
            </button>
            <button className="border text-black px-4 py-1 hover:text-white hover:border-none hover:bg-[#D50630] rounded-lg">
              Region
            </button>
            <button className="border text-black px-4 py-1 hover:text-white hover:border-none hover:bg-[#D50630] rounded-lg">
              Airport
            </button>
            <button className="border text-black px-4 py-1 hover:text-white hover:border-none hover:bg-[#D50630] rounded-lg">
              City
            </button>
            <button className="border text-black px-4 py-1 hover:text-white hover:border-none hover:bg-[#D50630] rounded-lg">
              More travel options
            </button>
          </div>

          <div className="w-[80%] mt-2 flex justify-between">
            <ul>
              <li className="text-gray-500 mt-4">Best car rental in Mexico</li>
              <li className="text-gray-500 mt-4">Spain car rental</li>
              <li className="text-gray-500 mt-4">Cheap car rental in Greece</li>
            </ul>
            <ul>
              <li className="text-gray-500 mt-4">Colombia car rental</li>
              <li className="text-gray-500 mt-4">Puerto Rico car rental</li>
              <li className="text-gray-500 mt-4">
                Best car rental in Portugal
              </li>
            </ul>
            <ul>
              <li className="text-gray-500 mt-4">United States car rental</li>
              <li className="text-gray-500 mt-4">Best car rental in Germany</li>
              <li className="text-gray-500 mt-4">
                Best car rental in United Kingdom
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
