import React from "react";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

export default function page() {
  return (
    <div className=" flex flex-col items-center  ">
      <span className="text-xl sm:text-4xl font-semibold text-[#04155f] mt-8 mb-3 tracking-wider">
        Our Specialized Departments
      </span>
      <p className="text-[10px] sm:text-sm w-[98%] sm:w-1/2 font-light text-center">
        Care Hospital provides precision-driven clinical care across a wide
        spectrum of medical specialties. Our departments are equipped with
        state-of-the-art diagnostic technology and staffed by world-renowned
        experts.
      </p>

      <div className=" w-[90%] mt-16 flex flex-wrap gap-10 justify-center mb-16">
        <div className=" flex flex-col  md:w-[45%] lg:w-[35%] xl:w-1/4 py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className="p-1.5 text-4xl bg-gray-400 rounded-lg w-fit mb-4">
            <LiaHeartbeatSolid />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">Cardiology</span>
          <span className="text-sm font-light">
            Advanced cardiovascular care focused on prevention, diagnosis, and
            treatment of complex heart conditions using minimally invasive
            techniques.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Echocardiography & Imaging
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Interventional Cardiology
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Heart Failure Management{" "}
            </span>
          </div>
          <span className="font-semibold text-sm flex gap-1 items-center">
            Learn More <FaArrowRight />
          </span>
        </div>

        <div className=" flex flex-col md:w-[45%] lg:w-[35%] xl:w-1/4 py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className="p-1.5 text-4xl bg-gray-400 rounded-lg w-fit mb-4">
            <LiaHeartbeatSolid />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">Cardiology</span>
          <span className="text-sm font-light">
            Advanced cardiovascular care focused on prevention, diagnosis, and
            treatment of complex heart conditions using minimally invasive
            techniques.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Echocardiography & Imaging
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Interventional Cardiology
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Heart Failure Management{" "}
            </span>
          </div>
          <span className="font-semibold text-sm flex gap-1 items-center">
            Learn More <FaArrowRight />
          </span>
        </div>

        <div className=" flex flex-col md:w-[45%] lg:w-[35%] xl:w-1/4 py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className="p-1.5 text-4xl bg-gray-400 rounded-lg w-fit mb-4">
            <LiaHeartbeatSolid />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">Cardiology</span>
          <span className="text-sm font-light">
            Advanced cardiovascular care focused on prevention, diagnosis, and
            treatment of complex heart conditions using minimally invasive
            techniques.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Echocardiography & Imaging
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Interventional Cardiology
            </span>
            <span className="flex gap-2 items-center">
              <TiTick className="border border-black rounded-full" />
              Heart Failure Management{" "}
            </span>
          </div>
          <span className="font-semibold text-sm flex gap-1 items-center">
            Learn More <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
