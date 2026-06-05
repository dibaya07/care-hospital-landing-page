import React from 'react'
import { ImLab } from "react-icons/im";


export default function Departments() {
  return (
    <div className='my-6 flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-[#068391] text-lg sm:text-2xl'>Our Spacialties</h1>
      <span className='font-semibold text-[#060991] text-base sm:text-2xl'>Comprehensive Care Across Spacialties</span>
      <div className='flex flex-wrap sm:flex-nowrap gap-3 sm:gap-8 mt-10 text-[10px] sm:text-base justify-center'>

        <div className='flex flex-col shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg px-2 py-4 w-30 sm:w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-[16px] sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[8px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col px-2 py-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-30 sm:w-40  justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-sm sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[8px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col px-2 py-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-30 sm:w-40  justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-sm sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[8px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>
        

        <div className='hidden md:flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-30 sm:w-40  justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-sm sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[10px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='hidden lg:flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-sm sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[10px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='hidden xl:flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b] text-sm sm:text-3xl' /></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-[10px] sm:text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

      </div>
    </div>
  )
}
