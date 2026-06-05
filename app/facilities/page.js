import React from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

export default function page() {
  return (
    <div className=" flex flex-col items-center  ">
      <span className="text-4xl font-semibold text-[#04155f] mt-8 mb-3 tracking-wider">
        Our Facilities
      </span>

      <div className=" w-[90%] mt-16 flex flex-wrap gap-20 justify-center mb-16">
        <div className=" flex flex-col w-[98%] sm:w-[60%] lg:w-[45%]  py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className=" p-1  rounded-lg w-full flex justify-center mb-4">
            <Image
              src={"/facility.jpeg"}
              alt="doctor img"
              width={100}
              height={10}
              className="h-70 w-62.5 rounded-2xl"
            />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">
            Surgical Wing
          </span>
          <span className="text-sm font-light">
            Equipped for complex cardiothoracic, neurosurgical, and orthopedic
            procedures with real-time digital integration.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Da Vinci Robotic Systems
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Hybrid Operating Suites
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              HEPA-Filtered Laminar Flow
            </span>
          </div>
          <button className="font-semibold text-sm flex gap-1 items-center border border-black p-2 rounded-3xl justify-center">
            View Details
          </button>
        </div>

        <div className=" flex flex-col w-[98%] sm:w-[60%] lg:w-[40%]  py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className=" p-1  rounded-lg w-full flex justify-center mb-4">
            <Image
              src={"/facility.jpeg"}
              alt="doctor img"
              width={100}
              height={10}
              className="h-70 w-62.5 rounded-2xl"
            />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">
            Surgical Wing
          </span>
          <span className="text-sm font-light">
            Equipped for complex cardiothoracic, neurosurgical, and orthopedic
            procedures with real-time digital integration.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Da Vinci Robotic Systems
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Hybrid Operating Suites
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              HEPA-Filtered Laminar Flow
            </span>
          </div>
          <button className="font-semibold text-sm flex gap-1 items-center border border-black p-2 rounded-3xl justify-center">
            View Details
          </button>
        </div>

        <div className=" flex flex-col w-[98%] sm:w-[60%] lg:w-[40%]  py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className=" p-1  rounded-lg w-full flex justify-center mb-4">
            <Image
              src={"/facility.jpeg"}
              alt="doctor img"
              width={100}
              height={10}
              className="h-70 w-62.5 rounded-2xl"
            />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">
            Surgical Wing
          </span>
          <span className="text-sm font-light">
            Equipped for complex cardiothoracic, neurosurgical, and orthopedic
            procedures with real-time digital integration.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Da Vinci Robotic Systems
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Hybrid Operating Suites
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              HEPA-Filtered Laminar Flow
            </span>
          </div>
          <button className="font-semibold text-sm flex gap-1 items-center border border-black p-2 rounded-3xl justify-center">
            View Details
          </button>
        </div>

        <div className=" flex flex-col w-[98%] sm:w-[60%] lg:w-[40%]  py-6 px-6 rounded-2xl shadow-[1px_1px_30px_#87967533]">
          <span className=" p-1  rounded-lg w-full flex justify-center mb-4">
            <Image
              src={"/facility.jpeg"}
              alt="doctor img"
              width={100}
              height={10}
              className="h-70 w-62.5 rounded-2xl"
            />
          </span>
          <span className="font-semibold tracking-wide mb-2.5">
            Surgical Wing
          </span>
          <span className="text-sm font-light">
            Equipped for complex cardiothoracic, neurosurgical, and orthopedic
            procedures with real-time digital integration.
          </span>
          <div className="text-[11px] flex flex-col gap-1 mt-3 mb-6">
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Da Vinci Robotic Systems
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              Hybrid Operating Suites
            </span>
            <span className="flex gap-2 items-center font-semibold">
              <TiTick className="border border-black rounded-full" />
              HEPA-Filtered Laminar Flow
            </span>
          </div>
          <button className="font-semibold text-sm flex gap-1 items-center border border-black p-2 rounded-3xl justify-center">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
