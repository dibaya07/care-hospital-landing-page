import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import "./style.css";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-black bg-[#F9F8FB] pb-2">

      <div className="flex  pt-2 mx-32 text-sm justify-between items-center">
        <span>24/7 Emergency Care +91-9876543213</span>
        <span className="topbar">
          <FaLocationDot style={{ color: "red" }} /> 123 Care Hospital Assam,
          784123
        </span>
        <span className="topbar">
          <FaRegClock /> Open 24/7 Mon - Sun
        </span>
        <button className="topbar bg-[#002278] text-white px-4 py-2 rounded-xl text-sm">
          <FaLocationArrow /> Live Location
        </button>
      </div>

      <div className="bg-white flex justify-between mx-16 mt-2 px-8 py-4 rounded-2xl shadow-[1px_1px_10px_#35462733] items-center ">
        <h1 className=" w-[30%] text-2xl">
          <b>Care</b> Hospital
        </h1>
        <span className="flex flex-1 justify-between ml-16 items-center text-lg">
          {/* <li></li> */}
          <Link href={'/'}>Home</Link>
          <Link href={'/Doctors'}>Doctors</Link>
          <Link href={'/facilities'}>Facilities</Link>
          <Link href={'/departments'}>Departments</Link>
          <Link href={'/contact'}>Contact Us</Link>
          
          
        </span>
      </div>
    </div>
  );
}
