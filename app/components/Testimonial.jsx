import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div className=" flex flex-col  justify-center items-center mx-6 my-20 ">
      <span className="font-semibold text-[#068391] text-lg sm:text-2xl">
        Patient Testimonials
      </span>
      <span className="font-semibold text-[#060991] text-sm sm:text-2xl">
        Trusted by Thousands, Love for Care
      </span>
      <div className="flex mt-10 justify-center items-center w-full">
        <span className="sm:flex hidden mr-6 sm:mr-12">
          <FaRegArrowAltCircleLeft size={40} />
        </span>

        <div className="flex gap-4 overflow-x-scroll scrollbar-none ">

          <div className="bg-[#e6f8e6] flex flex-col p-4 rounded-lg text-[10px] sm:text-[15px] w-60 sm:w-75 shrink-0">
          <span className="text-[#068391]">
            <FaQuoteLeft />
          </span>
          <div className="  pl-6 gap-2.5 flex flex-col -mt-2.5">
            <span>
              From admission to discharge the experience was smooth. Thank you
            </span>
            <span className="flex gap-2 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="font-semibold">- Anuj Sharma</span>
          </div>
        </div>


          <div className="bg-[#e6f8e6] flex flex-col p-4 rounded-lg text-[10px] sm:text-[15px] w-60 sm:w-75 shrink-0">
          <span className="text-[#068391]">
            <FaQuoteLeft />
          </span>
          <div className="  pl-6 gap-2.5 flex flex-col -mt-2.5">
            <span>
              From admission to discharge the experience was smooth. Thank you
            </span>
            <span className="flex gap-2 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="font-semibold">- Anuj Sharma</span>
          </div>
        </div>


          <div className="bg-[#e6f8e6] flex flex-col p-4 rounded-lg text-[10px] sm:text-[15px] w-60 sm:w-75 shrink-0">
          <span className="text-[#068391]">
            <FaQuoteLeft />
          </span>
          <div className="  pl-6 gap-2.5 flex flex-col -mt-2.5">
            <span>
              From admission to discharge the experience was smooth. Thank you
            </span>
            <span className="flex gap-2 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="font-semibold">- Anuj Sharma</span>
          </div>
        </div>


      

        </div>
      


      

        <span className="sm:flex hidden ml-6 sm:ml-12">
          <FaRegArrowAltCircleRight size={40} />
        </span>
      </div>
    </div>
  );
}








  {/* <div className="bg-[#e6f8e6] hidden sm:flex flex-col p-4 rounded-lg w-75">
          <span className="text-[#068391]">
            <FaQuoteLeft />
          </span>
          <div className="text-[15px] pl-6 gap-2.5 flex flex-col -mt-2.5">
            <span>
              From admission to discharge the experience was smooth. Thank you
            </span>
            <span className="flex gap-2 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="font-semibold">- Anuj Sharma</span>
          </div>
        </div>

        <div className="bg-[#e6f8e6] hidden sm:flex flex-col p-4 rounded-lg w-75">
          <span className="text-[#068391]">
            <FaQuoteLeft />
          </span>
          <div className="text-[15px] pl-6 gap-2.5 flex flex-col -mt-2.5">
            <span>
              From admission to discharge the experience was smooth. Thank you
            </span>
            <span className="flex gap-2 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="font-semibold">- Anuj Sharma</span>
          </div>
        </div> */}