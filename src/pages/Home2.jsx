import { Footer, Navbar } from "../components";
import React from "react";
import img1 from "../public/1i.png";
import img2 from "../public/2i.png";
import img3 from "../public/3i.png";
import img4 from "../public/4i.png";
import img5 from "../public/5i.png";
import img6 from "../public/6i.png";
import img7 from "../public/7i.png";
import slid1 from "../public/slid1.jpg";
import slid2 from "../public/slid2.jpg";
import slid3 from "../public/slid3.jpg";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";

const Home2 = () => {
  return (
    <div className="w-full h-auto">
      <Navbar />

      <div className="w-[80%] mb-32 justify-between flex mt-6 ml-[10%] h-auto">
        <div className="w-[30%] border h-[75rem] rounded-lg">
          <p className="font-bold text-[13px] border-b p-4">Filter by:</p>
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <span className="text-[15px] ">Category</span>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Mueseums, arts & culture (6)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Entertainment & tickets (1)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Tours (8)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Nature & outdoor (3)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <span className="text-[15px] ">Price</span>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                $0 - $22 (18)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                $22 - $44 (45)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                $44 - $83 (86)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                $83 - $138 (88)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                $138+ (206)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <span className="text-[15px] ">Show results with</span>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Free cancellation (433)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <span className="text-[15px] ">Review Score</span>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                4.5 and up (4)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                4 and up (19)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                3.5 and up (24)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                3 and up (24)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <span className="text-[15px] ">Time of day</span>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Morning (327) <br />
                <span className="text-[10px] text-gray-400">
                  Starts before 12:00 PM
                </span>
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Afternoon (84) <br />
                <span className="text-[10px] text-gray-400">
                  Starts after 12:00 PM
                </span>
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Evening and Night (61) <br />
                <span className="text-[10px] text-gray-400">
                  Starts before 12:00 PM
                </span>
              </p>
            </div>
            <div className="w-[90%] ml-[-1rem] p-4">
              <div className="w-full text-[13px]">
                <span className="text-[15px] ">Languages</span>
                <p className="pt-4">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  English (6)
                </p>
                <p className="pt-2">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  Russian (6)
                </p>
                <p className="pt-2">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  French (2)
                </p>
                <p className="pt-2">
                  <input
                    type="checkbox"
                    id=""
                    value=""
                    className="h-4 w-4 mr-2"
                  />
                  German (2)
                </p>
              </div>
              <p className="text-blue-400 mt-6">Show more</p>
            </div>
          </div>
        </div>

        <div className="w-[65%] h-auto">
          <div className="w-full h-12 bg-[#E7E7E7] rounded-full">
            <ul className="px-2 py-2 w-full flex justify-between">
              <li className=" px-6 py-1 rounded-full bg-white border border-black cursor-pointer">
                Our top picks
              </li>
              <li className=" px-6 py-1 rounded-full hover:bg-white hover:border hover:border-black cursor-pointer">
                Most popular
              </li>
              <li className=" px-6 py-1 rounded-full hover:bg-white hover:border hover:border-black cursor-pointer">
                Lowest price
              </li>
              <li className=" px-6 py-1 rounded-full hover:bg-white hover:border hover:border-black cursor-pointer">
                Best reviewed
              </li>
            </ul>
          </div>
          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Full Day Sightseeing Tour of the main Attractions around Baku
                </p>
                <p className="mt-4">
                  Baku{" "}
                  <span className="p-2 rounded-md bg-[#003B95] text-white text-[11px]">
                    #1 Best seller
                  </span>
                </p>
                <p className="leading-5 pt-3">
                  In a short time you will see 6 main sights around Baku, with
                  guides who will not only tell you th...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex">
                    <FaStar className="mt-1 mr-2" />
                    <p className="font-bold">
                      {" "}
                      4.5 · Excellent{" "}
                      <span className="text-gray-400 font-normal">
                        (134 reviews)
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$60
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Baku Gobustan Absheron guided day trip
                </p>
                <p className="mt-4">
                  Baku{" "}
                  <span className="p-2 rounded-md bg-[#003B95] text-white text-[11px]">
                    #5 Best seller
                  </span>
                </p>
                <p className="leading-5 pt-3">
                  An opportunity to see up to 20.000 years old unique rock
                  carvings, mud volcanos full of minerals ...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex">
                    <FaStar className="mt-1 mr-2" />
                    <p className="font-bold">
                      {" "}
                      4.4 · Excellent{" "}
                      <span className="text-gray-400 font-normal">
                        (21 reviews)
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$20
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          {/* sign in */}
          <div className="w-full mt-10 mb-10 h-28 border">
            <div className="p-4">
              <p className="text-[20px]">Sign in to save time</p>
              <p className="mt-3 text-[12px] text-gray-500">
                Your Booking.com account lets you book using your saved details
              </p>
              <p className="mt-3 text-[12px] text-blue-400">Sign in</p>
            </div>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img3}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Gabala & Samakhi Tour/ All Entrance Fees Included
                </p>
                <p className="mt-4">
                  Baku{" "}
                  <span className="p-2 rounded-md bg-[#003B95] text-white text-[11px]">
                    #2 Best seller
                  </span>
                </p>
                <p className="leading-5 pt-3">
                  Are you ready to embark on a journey of discovery? Our group
                  tour of Gabala and Shamakhi is the p...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex">
                    <FaStar className="mt-1 mr-2" />
                    <p className="font-bold">
                      {" "}
                      4.1 · Very good{" "}
                      <span className="text-gray-400 font-normal">
                        (17 reviews)
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$41
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img4}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Baku: Gobustan, Mud Volcano, Fire Temple & Burning Mountain
                </p>
                <p className="mt-4">Baku </p>
                <p className="leading-5 pt-3">
                  Begin your tour with a pickup from your Baku hotel and head to
                  Gobustan Settlement to explore anc...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex"></div>
                  <p className="text-gray-400">
                    From
                    <span className="line-through">US$9.59</span>{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$8.63
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img5}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Guba-Shahdag-Candy Cane Mountains Tour/ Entrance Fees Included
                </p>
                <p className="mt-4">
                  Baku{" "}
                  <span className="p-2 rounded-md bg-[#003B95] text-white text-[11px]">
                    #4 Best seller
                  </span>
                </p>
                <p className="leading-5 pt-3">
                  Diverse Landscapes: Immerse yourself in the vibrant hues of
                  the Candy Cane Mountains, the ancient...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex">
                    <FaStar className="mt-1 mr-2" />
                    <p className="font-bold">
                      {" "}
                      4.4 · Excellent{" "}
                      <span className="text-gray-400 font-normal">
                        (12 reviews)
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$49
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          {/* Deal and discount */}

          <div className="w-full mt-4 h-auto">
            <div className="w-full flex justify-between">
              <div className="flex">
                <LuBadgePercent className="mt-1" />
                <p className="font-bold pl-2">Deals and discounts</p>
              </div>
              <p className="text-blue-400">See all</p>
            </div>
            <div className="w-full mt-2 flex gap-3">
              <div className="w-[32%] h-[18rem]">
                <img src={slid1} alt="" className="w-full h-full rounded-xl" />
                <div className="mt-[-140%] text-white p-4">
                  <button className="p-1 bg-white  rounded-md text-black">
                    20% off
                  </button>
                  <p className="text-white font-bold mt-28 leading-5">
                    Azerbaijan's Alpine Odyssey Tour (Shahdag, Quba, Candy
                    Cane,)
                  </p>
                  <p className="mt-2">
                    From <span className="fond-bold">US$47.20</span>
                    <span className="line-through"> US$59</span>
                  </p>
                </div>
              </div>
              <div className="w-[32%] h-[18rem]">
                <img src={slid2} alt="" className="w-full h-full rounded-xl" />
                <div className="mt-[-140%] text-white p-4">
                  <button className="p-1 bg-white  rounded-md text-black">
                    15% off
                  </button>
                  <p className="text-white font-bold mt-36 leading-5">
                  Mud Volcanoes & Gobustan Group Tour
                  </p>
                  <p className="mt-4">
                    From <span className="fond-bold">US$29.75</span>
                    <span className="line-through"> US$35</span>
                  </p>
                </div>
              </div>
              <div className="w-[32%] h-[18rem]">
                <img src={slid3} alt="" className="w-full h-full rounded-xl" />
                <div className="mt-[-140%] text-white p-4">
                  <button className="p-1 bg-white  rounded-md text-black">
                    10% off
                  </button>
                  <p className="text-white font-bold mt-32 leading-5">
                  Baku: Gobustan, Mud Volcano, Fire Temple & Burning Mountain
                  </p>
                  <p className="mt-2">
                    From <span className="fond-bold">US$8.63</span>
                    <span className="line-through"> US$9.59</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img6}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Coolest Baku Walking/If Cold in Café Tour
                </p>
                <p className="leading-5 pt-3">
                  Note: this tour follows the Free Walking Tour model. The
                  amount charged is the website commision....
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex"></div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$49
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex">
                    <IoCalendarOutline className="mt-1 mr-2" />
                    <p className="text-[#008234]">
                      {" "}
                      Free cancellation available
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 mt-[-52px]  border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>

          <div className=" border mt-4 pb-8 rounded-xl w-full h-auto">
            <div className="p-4 flex w-full">
              <div className="w-[30%]">
                <img
                  src={img7}
                  alt=""
                  className="w-full h-56 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 w-[80%]">
                <p className="w-[70%] font-bold leading-6 text-[24px]">
                  Baku City Tour
                </p>
                <p className="mt-4">Baku </p>
                <p className="leading-5 pt-3">
                  All tickets are included Discover the Historical and Modern
                  Sides of Baku. You will feel like you...
                </p>
                <div className="mt-3 flex w-full justify-between">
                  <div className="flex"></div>
                  <p className="text-gray-400">
                    From{" "}
                    <span className="text-black font-bold text-[20px]">
                      US$49
                    </span>
                  </p>
                </div>
                <div className="w-full justify-between mt-[-8px] flex">
                  <div className="flex"></div>
                  <p className="text-[11px] text-gray-400 pt-[6px]">
                    Available starting tomorrow
                  </p>
                </div>
              </div>
            </div>
            <button className="border ml-[65%] w-52 rounded-md px-8 py-3 mt-[-8rem]  border-blue-400 text-blue-400">
              <div className="flex">
                See availability <FaChevronRight className="mt-1 ml-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home2;
