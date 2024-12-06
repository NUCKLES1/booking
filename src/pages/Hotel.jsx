import React,{useState} from "react";
import { Footer, Navbar } from "../components";
import lobby from "../public/lobby.png";
import locate from "../public/locate.png";
import flag from "../public/flag.png";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiWechatLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import logo from "../public/logo.png";
import { IoMenu } from "react-icons/io5";
import paragraph from "../public/Paragraph.png";
import { PiShoppingCart } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";

const Hotel = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

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
                List your places
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
              <IoMenu onClick={toggle}/>
            </p>
           
          </div>
          
        </div>

        {/*Buttons */}

        <div className="w-[65%] justify-between flex ml-[23%]">
          <div className="p-2 w-58 flex h-10 bg-white rounded-md">
            <CiSearch className="mt-[4px] text-[18px]" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-2"
            />
          </div>
          <div className="p-3 w-[15rem] flex h-10 bg-[#333333] rounded-xl">
            <div className="text-white flex w-[48%]">
              <SlCalender className="" />
              <p className="ml-2 text-[12px]">Mon, 18 Nov</p>
            </div>
            <div className="text-white border-l flex w-[48%]">
              <SlCalender className="mt-0 ml-2" />
              <p className="ml-2 text-[12px]">Thu, 21 Nov</p>
            </div>
          </div>
          <div className="p-2 w-[14rem] flex h-10 bg-white rounded-md">
            <IoPeopleOutline className="ml-2 text-[24px]" />
            <p className="pl-3 leading-3">
              1 Adult <br />
              <span className="text-gray-500 text-[10px]">1 Room</span>
            </p>
            <FaChevronDown className=" ml-20 text-[20px]" />
          </div>
          <button className="px-8 py-2 rounded-xl text-white bg-[#FFB200]">
            Search
          </button>
        </div>
        <div
              className="absolute w-[15rem] p-4 text-center h-[15rem] bg-white rounded-md mt-4 ml-[70%]"
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
                <div>fi</div>
                <div>fi</div>
                <div>fi</div>

                <Link href="discount">Discount</Link>
              </div>
            </div>
      </div>

      <div className="w-[80%] mb-32 flex mt-32 ml-[10%] h-auto">
        <div className="w-[30%] h-auto rounded-lg">
          <img src={locate} alt="" />
          <div className="w-[90%] p-4">
            <div className="w-full text-[13px]">
              <div className="rounded-full px-4 py-3 bg-[#D9D9D9] flex text-[15px]">
                <CiSearch className="mt-[2px] text-[15px]" />
                <input
                  type="text"
                  placeholder="Text Search"
                  className="w-[90%] outline-none h-5 bg-[#D9D9D9] pl-3"
                />
              </div>

              <p className="pt-4">Your budget (per night)</p>
              <div className="w-full mt-3 flex">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-[90%] mt-[10px] h-1 ml-[-5px] bg-blue-500"></div>
                <div className="w-6  ml-[-5px] h-6 bg-blue-500 rounded-full"></div>
              </div>

              <div className="w-[95%] mt-4 justify-between flex ">
                <div className="w-[40%]">
                  <p>MIN</p>
                  <div className="w-full flex p-2 border h-9">
                    <p>USD</p>
                    <input
                      type="text"
                      className="w-6 text-[20px] ml-3"
                      placeholder="0"
                      id=""
                    />
                  </div>
                </div>
                <div className="w-[40%]">
                  <p>MAX</p>
                  <div className="w-full flex p-2 border h-9">
                    <p>USD</p>
                    <input
                      type="text"
                      className="w-6 text-[20px] ml-3"
                      placeholder="0"
                      id=""
                    />
                  </div>
                </div>
              </div>

              <p className="text-[18px] mt-4">Popular filters for Bangkok</p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Rangsit
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Siam Luxury stay, Top attractions
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Sukhumvit Foodie haven
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Pratunam City center
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Sathorn Luxury stay
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bangkok Riverside Top attractions, Shopping
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Chatuchak Shopping
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Suvarnabhumi Airport
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <p className="text-[18px] mt-4">Property type</p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Hotel (2110)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Resort (43)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Guesthouse/bed and breakfast (249)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Motel (10)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Hostel (489)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Apartment/Flat (1402)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Serviced apartment (353)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Homestay (58)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Inn (69)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Resort villa (7)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Ryokan (1)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Entire House (298)
              </p>
              <p className="pt-4 font-bold text-[#D50630]">Show 8 more</p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <p className="text-[18px] font-bold text-[#D50630] mt-4">
                NeIghborhood
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Sukhumvit (1272) Foodie haven
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Don Mueang International Airport (517)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Ratchada (485)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Khaosan (335) Top attractions, Cheap eats
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Thonburi (268)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Chatuchak (263) Shopping
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bang Na (258)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Pratunam (239) City center
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Suvarnabhumi Airport (218)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Sathorn (208) Luxury stay
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bangkok River (192) Top attraction, Shopping
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Silom (176) City center, Foodie haven
              </p>
              <p className="pt-4 font-bold text-[#D50630]">Show 9 more</p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <p className="text-[18px] font-bold text-[#D50630] mt-4">
                Payment options
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Free cancellation (3586)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Pay at the hotel (1426)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Book now, pay later (2960)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Pay now (4037)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Book without credit card (125)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <p className="text-[18px] font-bold text-[#D50630] mt-4">
                Guest rating
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 rounded-full  mr-2"
                />
                9+ Exceptional (978)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 rounded-full mr-2"
                />
                8+ Excellent (2620)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 rounded-full mr-2"
                />
                7+ Very good (3421)
              </p>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 rounded-full mr-2"
                />
                6+ Good (3703)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Star rating
              </div>
              <div className="pt-4 flex">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <p>(522)</p>
              </div>
              <div className="pt-4 flex">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />

                <p>(971)</p>
              </div>
              <div className="pt-4 flex">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />

                <p>(1783)</p>
              </div>
              <div className="pt-4 flex">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <p>(771)</p>
              </div>
              <div className="pt-4 flex">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                <FaStar className="text-yellow-500" />

                <p>(79)</p>
              </div>

              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                No rating (1001)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Room amenities
              </div>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Air conditioning (3445)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                TV (3307)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Refrigerator (2673)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Washing machine (1509)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Internet acces (1369)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Coffee/tea maker (1325)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Ironing facilities (1126)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Kitchen (929)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bathtub (901)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Heating (265)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Private pool (218)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Pets allowed in room (42)
              </p>
              <p className="font-bold text-[#D50630]">Show 4 more</p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Room offers
              </div>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Swimming pool (1066)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Outside food delivery allowes (25)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Dinner included (21)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Airport transfer (19)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Early check-in (17)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Delivery from family and relation allowed (16)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Delivery from nearby convenience store (15)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Complimentary snacks (14)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Late check-out (14)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Free shuttle service (12)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Dumbbells (6)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Exercise bike (5)
              </p>
              <p className="mt-4 text-[#D50630]">Show 8 more</p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Bed type
              </div>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Single/twin (2050)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                King (1731)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Double (1723)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Queen (1345)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                Bunk bed (452)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Location rating
              </div>
              <p className="pt-4">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                9+ Exceptional (971)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                8+ Excellent (2662)
              </p>
              <p className="pt-2">
                <input
                  type="checkbox"
                  id=""
                  value=""
                  className="h-4 w-4 mr-2"
                />
                7+ Very good (3432)
              </p>
            </div>
          </div>
          <div className="w-[90%] p-4 mt-8 border-t-2 border-gray-300">
            <div className="w-full text-[13px]">
              <div className="text-[18px] font-bold text-[#D50630] mt-4">
                Distance to center
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] mt-16 h-auto">
          <div className="w-full h-16 border-2 border-[#E7E7E7] rounded-md">
            <ul className="px-2 py-2 w-full flex justify-between text-[14px]">
              <li className=" px-4 py-1 hover:bg-[#E7E7E7] cursor-pointer hover:border-b-yellow-300 hover:border-2 pb-3">
                Best match
              </li>
              <li className=" px-6 py-1 hover:border-b-yellow-300 hover:border-2 border-l-2 hover:bg-[#E7E7E7] cursor-pointer">
                Lowest price first
              </li>
              <li className="  px-6 py-1 hover:bg-[#E7E7E7] cursor-pointer border-b-yellow-300 border-b-2 border-l-2 pb-3">
                Top reviewed
              </li>
              <li className="  px-6 py-1 hover:bg-[#E7E7E7] cursor-pointer hover:border-b-yellow-300 hover:border-2 border-l-2 pb-3">
                Hot Deals!
              </li>
              <li className="  px-6 py-1 hover:bg-[#E7E7E7] cursor-pointer hover:border-b-yellow-300 hover:border-2 border-l-2 pb-3">
                Sort by
              </li>
            </ul>
          </div>
          <div className=" border mt-4 pb-2 rounded-xl w-full h-auto">
            <div className=" flex h-full w-full">
              <div className="w-[30%]">
                <div className="w-full h-[80%]">
                  <img
                    src={lobby}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-full mt-1 h-[20%] flex">
                  <img src={lobby} alt="" className="w-[24%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                </div>
              </div>
              <div className="w-[70%] flex ml-4 pt-2">
                <div className=" w-[60%]">
                  <p className="w-[70%] font-bold leading-6 text-[24px]">
                    Floral Shine Resort
                  </p>
                  <div className="flex mt-2">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="mt-2 flex">
                    <p>
                      <HiOutlineLocationMarker />
                    </p>
                    <span className="pl-2 w-full text-[11px] font-bold">
                      Suvarnabhumi Airport, Bangkok - 19.1 km to center
                    </span>
                  </div>
                  <div>
                    <div className="flex text-gray-500 w-full mt-1">
                      <p className=" text-gray-500 text-[11px] pl-2">
                        This property offers:
                      </p>
                    </div>
                    <div className="w-full mt-3 text-[10px] flex">
                      <button className="border border-gray-400 px-2 py-1">
                        Breakfast
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Parking
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Express check-in
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex w-full justify-between">
                    <div className="flex  text-gray-500 ">
                      <RiWechatLine />
                      <p className=" text-gray-500 text-[12px]">
                        “Easy Transit”
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full justify-between">
                    <div className="flex text-gray-500 ">
                      <SlBadge />
                      <p className=" pl-6 text-gray-500 text-[12px]">
                        Cashback Rewards: USD 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[38%] text-right pr-2">
                  <p className="text-[#D50630] text-[20px] font-bold">
                    7.3 Very good
                  </p>

                  <p className="mt-2 text-[18px] font-bold">6,172 reviews</p>
                  <button className="bg-black px-2 text-white mt-2 rounded-sm font-bold">
                    60% OFF TODAY
                  </button>
                  <button className="bg-[#FFB200] px-3 mt-2 rounded-sm font-bold">
                    USD 12 applied
                  </button>
                  <p className="text-gray-500 text-[10px]">
                    Per night before taxes and fees
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    30
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    USD 16
                  </p>
                  <p className="text-[10px]">Subject to Cashback Terms</p>
                  <p className="text-[20px] font-bold">USD 12</p>
                  <p className="text-[13px] text-[#FFB200]">
                    + FREE CANCELLATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border mt-4 pb-2 rounded-xl w-full h-auto">
            <div className=" flex h-full w-full">
              <div className="w-[30%]">
                <div className="w-full h-[80%]">
                  <img
                    src={lobby}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-full mt-1 h-[20%] flex">
                  <img src={lobby} alt="" className="w-[24%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                </div>
              </div>
              <div className="w-[70%] flex ml-4 pt-2">
                <div className=" w-[60%]">
                  <p className="w-[70%] font-bold leading-6 text-[24px]">
                    Floral Shine Resort
                  </p>
                  <div className="flex mt-2">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="mt-2 flex">
                    <p>
                      <HiOutlineLocationMarker />
                    </p>
                    <span className="pl-2 w-full text-[11px] font-bold">
                      Suvarnabhumi Airport, Bangkok - 19.1 km to center
                    </span>
                  </div>
                  <div>
                    <div className="flex text-gray-500 w-full mt-1">
                      <p className=" text-gray-500 text-[11px] pl-2">
                        This property offers:
                      </p>
                    </div>
                    <div className="w-full mt-3 text-[10px] flex">
                      <button className="border border-gray-400 px-2 py-1">
                        Breakfast
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Parking
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Express check-in
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex w-full justify-between">
                    <div className="flex  text-gray-500 ">
                      <RiWechatLine />
                      <p className=" text-gray-500 text-[12px]">
                        “Easy Transit”
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full justify-between">
                    <div className="flex text-gray-500 ">
                      <SlBadge />
                      <p className=" pl-6 text-gray-500 text-[12px]">
                        Cashback Rewards: USD 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[38%] text-right pr-2">
                  <p className="text-[#D50630] text-[20px] font-bold">
                    7.3 Very good
                  </p>

                  <p className="mt-2 text-[18px] font-bold">6,172 reviews</p>
                  <button className="bg-black px-2 text-white mt-2 rounded-sm font-bold">
                    60% OFF TODAY
                  </button>
                  <button className="bg-[#FFB200] px-3 mt-2 rounded-sm font-bold">
                    USD 12 applied
                  </button>
                  <p className="text-gray-500 text-[10px]">
                    Per night before taxes and fees
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    30
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    USD 16
                  </p>
                  <p className="text-[10px]">Subject to Cashback Terms</p>
                  <p className="text-[20px] font-bold">USD 12</p>
                  <p className="text-[13px] text-[#FFB200]">
                    + FREE CANCELLATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border mt-4 pb-2 rounded-xl w-full h-auto">
            <div className=" flex h-full w-full">
              <div className="w-[30%]">
                <div className="w-full h-[80%]">
                  <img
                    src={lobby}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-full mt-1 h-[20%] flex">
                  <img src={lobby} alt="" className="w-[24%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                </div>
              </div>
              <div className="w-[70%] flex ml-4 pt-2">
                <div className=" w-[60%]">
                  <p className="w-[70%] font-bold leading-6 text-[24px]">
                    Floral Shine Resort
                  </p>
                  <div className="flex mt-2">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="mt-2 flex">
                    <p>
                      <HiOutlineLocationMarker />
                    </p>
                    <span className="pl-2 w-full text-[11px] font-bold">
                      Suvarnabhumi Airport, Bangkok - 19.1 km to center
                    </span>
                  </div>
                  <div>
                    <div className="flex text-gray-500 w-full mt-1">
                      <p className=" text-gray-500 text-[11px] pl-2">
                        This property offers:
                      </p>
                    </div>
                    <div className="w-full mt-3 text-[10px] flex">
                      <button className="border border-gray-400 px-2 py-1">
                        Breakfast
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Parking
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Express check-in
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex w-full justify-between">
                    <div className="flex  text-gray-500 ">
                      <RiWechatLine />
                      <p className=" text-gray-500 text-[12px]">
                        “Easy Transit”
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full justify-between">
                    <div className="flex text-gray-500 ">
                      <SlBadge />
                      <p className=" pl-6 text-gray-500 text-[12px]">
                        Cashback Rewards: USD 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[38%] text-right pr-2">
                  <p className="text-[#D50630] text-[20px] font-bold">
                    7.3 Very good
                  </p>

                  <p className="mt-2 text-[18px] font-bold">6,172 reviews</p>
                  <button className="bg-black px-2 text-white mt-2 rounded-sm font-bold">
                    60% OFF TODAY
                  </button>
                  <button className="bg-[#FFB200] px-3 mt-2 rounded-sm font-bold">
                    USD 12 applied
                  </button>
                  <p className="text-gray-500 text-[10px]">
                    Per night before taxes and fees
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    30
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    USD 16
                  </p>
                  <p className="text-[10px]">Subject to Cashback Terms</p>
                  <p className="text-[20px] font-bold">USD 12</p>
                  <p className="text-[13px] text-[#FFB200]">
                    + FREE CANCELLATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border mt-4 pb-2 rounded-xl w-full h-auto">
            <div className=" flex h-full w-full">
              <div className="w-[30%]">
                <div className="w-full h-[80%]">
                  <img
                    src={lobby}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-full mt-1 h-[20%] flex">
                  <img src={lobby} alt="" className="w-[24%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                </div>
              </div>
              <div className="w-[70%] flex ml-4 pt-2">
                <div className=" w-[60%]">
                  <p className="w-[70%] font-bold leading-6 text-[24px]">
                    Floral Shine Resort
                  </p>
                  <div className="flex mt-2">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="mt-2 flex">
                    <p>
                      <HiOutlineLocationMarker />
                    </p>
                    <span className="pl-2 w-full text-[11px] font-bold">
                      Suvarnabhumi Airport, Bangkok - 19.1 km to center
                    </span>
                  </div>
                  <div>
                    <div className="flex text-gray-500 w-full mt-1">
                      <p className=" text-gray-500 text-[11px] pl-2">
                        This property offers:
                      </p>
                    </div>
                    <div className="w-full mt-3 text-[10px] flex">
                      <button className="border border-gray-400 px-2 py-1">
                        Breakfast
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Parking
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Express check-in
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex w-full justify-between">
                    <div className="flex  text-gray-500 ">
                      <RiWechatLine />
                      <p className=" text-gray-500 text-[12px]">
                        “Easy Transit”
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full justify-between">
                    <div className="flex text-gray-500 ">
                      <SlBadge />
                      <p className=" pl-6 text-gray-500 text-[12px]">
                        Cashback Rewards: USD 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[38%] text-right pr-2">
                  <p className="text-[#D50630] text-[20px] font-bold">
                    7.3 Very good
                  </p>

                  <p className="mt-2 text-[18px] font-bold">6,172 reviews</p>
                  <button className="bg-black px-2 text-white mt-2 rounded-sm font-bold">
                    60% OFF TODAY
                  </button>
                  <button className="bg-[#FFB200] px-3 mt-2 rounded-sm font-bold">
                    USD 12 applied
                  </button>
                  <p className="text-gray-500 text-[10px]">
                    Per night before taxes and fees
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    30
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    USD 16
                  </p>
                  <p className="text-[10px]">Subject to Cashback Terms</p>
                  <p className="text-[20px] font-bold">USD 12</p>
                  <p className="text-[13px] text-[#FFB200]">
                    + FREE CANCELLATION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" border mt-4 pb-2 rounded-xl w-full h-auto">
            <div className=" flex h-full w-full">
              <div className="w-[30%]">
                <div className="w-full h-[80%]">
                  <img
                    src={lobby}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-full mt-1 h-[20%] flex">
                  <img src={lobby} alt="" className="w-[24%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                  <img src={lobby} alt="" className="w-[24%] ml-[1%] h-full " />
                </div>
              </div>
              <div className="w-[70%] flex ml-4 pt-2">
                <div className=" w-[60%]">
                  <p className="w-[70%] font-bold leading-6 text-[24px]">
                    Floral Shine Resort
                  </p>
                  <div className="flex mt-2">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="mt-2 flex">
                    <p>
                      <HiOutlineLocationMarker />
                    </p>
                    <span className="pl-2 w-full text-[11px] font-bold">
                      Suvarnabhumi Airport, Bangkok - 19.1 km to center
                    </span>
                  </div>
                  <div>
                    <div className="flex text-gray-500 w-full mt-1">
                      <p className=" text-gray-500 text-[11px] pl-2">
                        This property offers:
                      </p>
                    </div>
                    <div className="w-full mt-3 text-[10px] flex">
                      <button className="border border-gray-400 px-2 py-1">
                        Breakfast
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Parking
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        Express check-in
                      </button>
                      <button className="border border-gray-400 ml-1 px-2 py-1">
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex w-full justify-between">
                    <div className="flex  text-gray-500 ">
                      <RiWechatLine />
                      <p className=" text-gray-500 text-[12px]">
                        “Easy Transit”
                      </p>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full justify-between">
                    <div className="flex text-gray-500 ">
                      <SlBadge />
                      <p className=" pl-6 text-gray-500 text-[12px]">
                        Cashback Rewards: USD 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[38%] text-right pr-2">
                  <p className="text-[#D50630] text-[20px] font-bold">
                    7.3 Very good
                  </p>

                  <p className="mt-2 text-[18px] font-bold">6,172 reviews</p>
                  <button className="bg-black px-2 text-white mt-2 rounded-sm font-bold">
                    60% OFF TODAY
                  </button>
                  <button className="bg-[#FFB200] px-3 mt-2 rounded-sm font-bold">
                    USD 12 applied
                  </button>
                  <p className="text-gray-500 text-[10px]">
                    Per night before taxes and fees
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    30
                  </p>
                  <p className="line-through text-gray-500 font-bold text-[20px]">
                    USD 16
                  </p>
                  <p className="text-[10px]">Subject to Cashback Terms</p>
                  <p className="text-[20px] font-bold">USD 12</p>
                  <p className="text-[13px] text-[#FFB200]">
                    + FREE CANCELLATION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

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

export default Hotel;
