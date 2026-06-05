import React from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { RiMedal2Fill } from "react-icons/ri";

import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

//

export default function HeroSection() {
  return (
    <div className="h-[80vh] sm:h-[78vh] md:h-[82vh] lg:h-[80vh] relative ">
      <div className="bg-[url(/bgimg4.jpeg)] bg-cover shadow-md flex flex-col justify-center items-center sm:pt-8 h-[75vh] md:h-[78vh] lg:h-[75vh]">
        <span
          className={`bg-[#dffffd]/80  text-[#014643] font-semibold px-3 py-1 rounded-full shadow mb-7 md:mb-5 sm:text-xs md:text-sm ${caveat.className}`}
        >
          Your Health, Our Priority
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-bold sm:my-1 md:my-2">
          24/7 <b>Emergency Care</b>
        </span>
        <span className="text-xl sm:text-2xl md:text-4xl tracking-wide font-semibold  sm:my-1.5">
          When Every Second Matters
        </span>
        <span className="text-[8px] sm:text-[10px] md:text-sm">
          Expert doctors and advanced technology delivering high-quality
          healthcare
        </span>

        <div className=" flex justify-center items-start mt-28 text-[10px] sm:text-xs xl:text-base  w-full">
          <div className=" tagLinesDiv flex-1  ">
            <span className="text-[#1b0888] text-2xl sm:text-4xl">
              <MdOutlineHealthAndSafety />
            </span>
            <h3 className="font-semibold mb-1.5">Expert Care</h3>
            <h4 className=" font-light text-[10px] sm:text-[11px] xl:text-[13px]">
              Experienced &{" "}
            </h4>
            <h4 className="font-light text-[10px] sm:text-[11px] xl:text-[13px]">
              Trusted Specialist
            </h4>
          </div>
          <div className=" tagLinesDiv flex-1 ">
            <span className="text-[#1b0888] text-2xl sm:text-4xl">
              <IoPerson  />
            </span>
            <h3 className="font-semibold mb-1.5">Patient First</h3>
            <h4 className="font-light text-[10px] sm:text-[11px] xl:text-[13px]">
              Personalized care
            </h4>
            <h4 className="font-light text-[10px] sm:text-[11px] xl:text-[13px]">
              for every patient
            </h4>
          </div>
          <div className=" flex-1  flex flex-col  justify-start items-center ">
            <span className="text-[#1b0888] text-2xl sm:text-4xl">
              <LuAlarmClock  />
            </span>
            <h3 className="font-semibold mb-1.5">24/7 Service</h3>
            <h4 className="font-light text-[10px] sm:text-[11px] xl:text-[13px]">
              Experienced care{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-[#05644e] flex w-[96%] lg:w-3/4 text-[8px] sm:text-xs lg:text-base absolute bottom-0  2xl:bottom-5 left-2.5 sm:left-4 lg:left-36 xl:left-40 justify-between py-1.5 sm:py-3 rounded-2xl text-white">
        <div className=" banner flex-col sm:flex-row gap-1.5 md:gap-4  ">
          <span>
            <IoIosPeople className="text-xl sm:text-2xl lg:text-3xl" />
          </span>
          <div className="flex flex-col justify-center    items-center">
            <h2 className="font-bold">20,000+</h2>
            <h4 className="text-[8px] sm:text-[10px] lg:text-sm opacity-85">Happy Patients</h4>
          </div>
        </div>

        <div className="banner flex-col sm:flex-row  gap-1.5 md:gap-4  ">
          <span >
            <FaBedPulse className="text-xl sm:text-2xl lg:text-3xl" />
          </span>
          <div className="flex flex-col justify-center    items-center">
            <h2 className="font-bold">500+</h2>
            <h4 className="text-[8px] sm:text-[10px] lg:text-sm  opacity-85">
              Advanced Beds
            </h4>
          </div>
        </div>

        <div className="banner flex-col sm:flex-row gap-1.5 md:gap-4  ">
          <span>
            <FaUserDoctor className="text-xl sm:text-2xl lg:text-3xl" />
          </span>
          <div className="flex flex-col justify-center    items-center">
            <h2 className="font-bold">250+</h2>
            <h4 className="text-[8px] sm:text-[10px] lg:text-sm  opacity-85">
              Expert Doctors
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1 gap-1.5 md:gap-4 flex-col sm:flex-row   ">
          <span>
            <RiMedal2Fill className="text-xl sm:text-2xl lg:text-3xl" />
          </span>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">15+</h2>
            <h4 className="text-[6px] sm:text-[10px] lg:text-sm  opacity-85 text-center">
              Years of Experience
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
