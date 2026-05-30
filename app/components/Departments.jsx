import React from 'react'
import { ImLab } from "react-icons/im";


export default function Departments() {
  return (
    <div className='my-6 flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-[#068391] text-2xl'>Our Spacialties</h1>
      <span className='font-semibold text-[#060991] text-2xl'>Comprehensive Care Across Spacialties</span>
      <div className='flex gap-8 mt-10'>

        <div className='flex flex-col shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg p-4 w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>
        

        <div className='flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

        <div className='flex flex-col p-4 shadow-[3px_5px_30px_rgba(0,0,0,0.2)] rounded-lg w-40 justify-center items-center gap-3'>
            <span><ImLab className='text-[#08a09b]' size={35}/></span>
            <span className='font-medium text-[#060991]'>Cardiology</span>
            <span className='text-sm text-center text-black/85'>Advance Heart care with expert cardiologist</span>
        </div>

      </div>
    </div>
  )
}
