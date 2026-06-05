import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { BiSolidInjection } from "react-icons/bi";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { TbUrgent } from "react-icons/tb";
import { ImLab } from "react-icons/im";


export default function FacilitiesSection() {
    return (
        <div className='rounded-xl py-4 px-6 flex-1 shadow-[1px_2px_10px_#73849366]'>
            <h2 className='font-semibold  text-[10px] sm:text-sm text-[#1eb9bf] mb-1.5'>OUR FACILITIES</h2>
            <h1 className='font-semibold text-sm sm:text-xl text-[#051d70]'>World Class Facilities for </h1>
            <h1 className='font-semibold text-sm sm:text-xl text-[#051d70]'>Better Outcomes </h1>
            <div className='flex flex-wrap gap-4 lg:gap-6 gap-y-4 mt-8 justify-evenly text-[10px] sm:text-sm'>


                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'><TbActivityHeartbeat style={{color:"darkblue"}}/> Advance ICU</span>
                </div>
                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'> <BiSolidInjection style={{color:"darkblue"}}/> Modular OT</span>
                </div>
                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'><AiFillMedicineBox style={{color:"darkblue"}}/> 24/7 Pharmacy</span>
                </div>
                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'><TbUrgent style={{color:"darkblue"}}/> Emergency Care</span>
                </div>
                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'><ImLab style={{color:"darkblue"}}/> Diagnostic Lab</span>
                </div>
                <div className='p-2 bg-white rounded-lg shadow-[1px_1px_10px_#43546566] h-12.5 w-[44%]  flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-1.5'><FaAmbulance style={{color:"darkblue"}}/> Ambulance Service</span>
                </div>
            </div>

            <span className='font-semibold text-sm text-[#051d70] flex items-center gap-2 mt-6'>View all Doctors <FaArrowRight size={12}/></span>
        </div>
    )
}

