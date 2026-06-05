"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import "./style.css";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="text-black bg-transparent pb-2 h-[12vh] sm:h-[18vh] lg:h-[20vh] ">
      <div className="flex bg-[#d4fff8] sm:bg-transparent  sm:pt-2 sm:mx-10  lg:mx-20 xl:mx-32 sm:text-[10px]  lg:text-sm justify-center sm:justify-between items-center mb-6 sm:mb-0">
        <span className="text-[8px] sm:text-[10px] lg:text-sm flex">24/7 Emergency Care +91-9876543213</span>
        <span className="topbar hidden sm:flex">
          <FaLocationDot style={{ color: "red" }} /> 123 Care Hospital Assam,
          784123
        </span>
        <span className="topbar hidden md:flex ">
          <FaRegClock /> Open 24/7 Mon - Sun
        </span>
        <button className="topbar hidden sm:flex bg-[#002278] text-white px-4 py-2 rounded-xl sm:text-[10px] lg:text-sm">
          <FaLocationArrow /> Live Location
        </button>
      </div>

      <div className="sm:bg-white  flex justify-between mx-2 sm:mx-6 lg:mx-16 mt-2 sm:px-4 md:px-8 sm:py-4 rounded-2xl sm:shadow-[1px_1px_10px_#35462733] items-center ">
        <h1 className="sm:w-[30%] text-lg sm:text-xl lg:text-2xl">
          <b>Care</b> Hospital
        </h1>
        <span className="sm:hidden flex flex-1 justify-end ml-16 items-center text-3xl ">
          <IoMenu onClick={handleMenu} />
        </span>
        <span
          className={`hidden sm:flex flex-1 justify-between ml-16 items-center text-[10px] md:text-xs lg:text-sm `}
        >
          {/* <li></li> */}
          <Link
            href={"/"}
            className={` ${pathname === "/" ? "sm:text-sm lg:text-lg border-b-3 border-blue-400" : "navBtn"} `}
          >
            Home
          </Link>
          <Link
            href={"/doctors"}
            className={`${pathname === "/doctors" ? "sm:text-sm lg:text-lg border-b-3 border-blue-400" : "navBtn"}`}
          >
            Doctors
          </Link>
          <Link
            href={"/facilities"}
            className={`${pathname === "/facilities" ? "sm:text-sm lg:text-lg border-b-3 border-blue-400" : "navBtn"}`}
          >
            Facilities
          </Link>
          <Link
            href={"/departments"}
            className={`${pathname === "/departments" ? "sm:text-sm lg:text-lg border-b-3 border-blue-400" : "navBtn"}`}
          >
            Departments
          </Link>
          <Link
            href={"/contact"}
            className={`${pathname === "/contact" ? "sm:text-sm lg:text-lg border-b-3 border-blue-400" : "navBtn"}`}
          >
            Contact Us
          </Link>
        </span>
      </div>
      {isMenuOpen && (
        <div className="bg-[#e0f1ff] sm:hidden flex flex-col items-end gap-5 h-screen absolute w-[90%] top-3 right-2 px-4 py-6 rounded-b-2xl rounded-l-2xl z-10">
          <span
            className={` px-2 py-1.5 rounded-lg w-fit  text-2xl bg-[#b90000] text-white `}
            onClick={handleMenu}
          >
            <RxCross2 />
          </span>
          <Link
            href={"/"}
            className={` px-2 py-1.5 rounded-lg w-full ${pathname === "/" ? "text-lg bg-[#0b0050] text-white " : "navBtn bg-[#e1e1e1] "} `}
            onClick={handleMenu}
          >
            Home
          </Link>
          <Link
            href={"/doctors"}
            className={` px-2 py-1.5 rounded-lg w-full ${pathname === "/doctors" ? "text-lg bg-[#0b0050] text-white " : "navBtn bg-[#e1e1e1] "}`}
            onClick={handleMenu}
          >
            Doctors
          </Link>
          <Link
            href={"/facilities"}
            className={` px-2 py-1.5 rounded-lg w-full ${pathname === "/facilities" ? "text-lg bg-[#0b0050] text-white " : "navBtn bg-[#e1e1e1] "}`}
            onClick={handleMenu}
          >
            Facilities
          </Link>
          <Link
            href={"/departments"}
            className={` px-2 py-1.5 rounded-lg w-full ${pathname === "/departments" ? "text-lg bg-[#0b0050] text-white " : "navBtn bg-[#e1e1e1] "}`}
            onClick={handleMenu}
          >
            Departments
          </Link>
          <Link
            href={"/contact"}
            className={` px-2 py-1.5 rounded-lg w-full ${pathname === "/contact" ? "text-lg bg-[#0b0050] text-white " : "navBtn bg-[#e1e1e1] "}`}
            onClick={handleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
