import React from "react";
import logo from "../img/navbar/BaycungbanLogo.svg";
import vn from "../img/navbar/vietnam.svg";
import us from "../img/navbar/united-states.svg";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const pathname = useLocation();
  const isFlight = pathname.pathname === "/";
  return (
    <div
      className={`  text-[14px] ${
        isFlight ? "pt-[30px] " : "bg-[#4D46FA] h-[80px]"
      } `}
    >
      <div className="mx-auto max-w-[1200px] flex justify-between items-center h-full">
        {/* logo switch language icon */}

        <div className="flex items-center gap-x-[15px]">
          <span
            className={`text-[24px] font-semibold ${
              isFlight ? "text-black" : "text-white"
            }`}
          >
            Baycungban
          </span>
          <div className="flex gap-x-[10px]">
            <img src={vn} alt="logo" />
            <img src={us} alt="logo" />
          </div>
        </div>
        <div>
          <ul
            className={`flex items-center gap-x-[30px] ${
              isFlight ? "text-black" : "text-white"
            }`}
          >
            <li>
              <Link to="">Promotion</Link>
            </li>
            <li>
              <Link
                to="/flight?page=2"
                className={`${
                  pathname.pathname.includes("flight") &&
                  "px-[15px] py-[10px] bg-[rgba(255,255,255,0.10)] rounded-full"
                }`}
              >
                Flight Schedule
              </Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Payment Guide</Link>
            </li>
          </ul>
        </div>
        {isFlight ? (
          <button className="px-[16px] py-[10px] text-white bg-[#4D46FA] rounded-xl font-semibold">
            Booking now
          </button>
        ) : (
          <button className="px-[16px] py-[10px] text-[#4D46FA] bg-[#FFFFFF] rounded-xl font-semibold">
            Booking now
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
