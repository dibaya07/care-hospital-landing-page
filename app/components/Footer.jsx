import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#030934] text-white pt-6 px-4 md:px-8 mt-6">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">


        <div className="flex flex-col flex-1">
          <span className="text:lg sm:text-xl lg:text-3xl font-bold tracking-wide">Care</span>
          <span className="text:sm sm:text-base lg:text-2xl font-medium tracking-wide -mt-1.5">
            Hospital
          </span>
          <span className="font-light text-[10px]  lg:text-sm mt-1 md:mt-3">
            Your health, Our Priority
          </span>
          <span className="flex gap-3 text-white text-xs sm:text-xl my-3">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </span>
        </div>


        <div className="flex-1 gap-1 sm:gap-3 flex flex-col">
          <span className="font-semibold text-[13px] sm:text-sm lg:text-xl tracking-wide">
            Quick Links
          </span>
          <ul className="font-light tracking-wider leading-8 pl-1.5 text-xs sm:text-sm lg:text-base">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>


        <div className="flex-1 gap-1 sm:gap-3 flex flex-col">
          <span className="font-semibold text-[13px] sm:text-sm lg:text-xl tracking-wide">
            Our services
          </span>
          <ul className="font-light tracking-wider leading-8 pl-1.5 text-xs sm:text-sm lg:text-base">
            <li>Emergency</li>
            <li>Emergency</li>
            <li>Emergency</li>
            <li>Emergency</li>
          </ul>
        </div>


        <div className="flex-1 gap-2.5 sm:gap-5 flex flex-col">
          <span className="font-semibold text-[13px] sm:text-sm lg:text-xl tracking-wide">
            Contact us
          </span>
          <div className="flex gap-1 sm:gap-3 text-xs  lg:text-base">
            <span className="text-sm sm:text-base lg:text-2xl pt-2">
              <MdWifiCalling3 />
            </span>
            <div className="flex flex-col">
              <span className="font-medium ">+91 9876543213</span>
              <span className="text-[10px] lg:text-sm font-light tracking-wide">
                24/7 Emergency
              </span>
            </div>
          </div>
          <div className="flex  gap-1 sm:gap-3 text-xs  lg:text-base">
            <span className="text-sm sm:text-base lg:text-2xl pt-2">
              <IoLocationSharp />
            </span>
            <div className="flex flex-col text-xs lg:text-[15px]">
              <span>123 Care Hospital Assam</span>
              <span>784123</span>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <span className="text-sm sm:text-base lg:text-2xl ">
              <IoMdMailUnread />
            </span>
            <span className="text-xs lg:text-[15px]">info@carehospital.com</span>
          </div>
        </div>


        <div className="flex flex-col sm:items-center flex-1 gap-1 sm:gap-3 ">
          <span className="font-semibold text-[13px] sm:text-sm lg:text-xl tracking-wide ">
            Opening Hours
          </span>
          <span className="text-xs lg:text-[15px]">Mon - Sun</span>
          <span className="-mt-2 text-xs lg:text-[15px] ">24/7 Open</span>
          <button className=" flex justify-start items-cente gap-1 sm:gap-3 bg-[#2e0596] w-fit py-2 px-3 rounded-xl mt-4 text-[10px] lg:text-base">
            <FaLocationArrow className="mt-1" /> Live Location
          </button>
        </div>

      </div>

      <div className="flex  justify-between py-3  mt-8 text-[8px] lg:text-sm border-t border-white/70">
        <span>&copy;2026 Care Hospital all rights reserved</span>
        <div className="flex gap-10">
          <span>Privacy Policy</span>
          <span>Terms and conditions</span>
        </div>
      </div>
    </div>
  );
}
