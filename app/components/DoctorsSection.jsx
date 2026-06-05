import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export default function DoctorsSection() {
  return (
    <div className=' rounded-xl py-4 px-6 md:px-3 lg:px-6 flex flex-1 shadow-[1px_2px_10px_#73849366] flex-col justify-between'>
      <span>
      <h2 className='font-semibold text-[10px] sm:text-sm text-[#1eb9bf] mb-1.5'>OUR DOCTORS</h2>
      <h1 className='font-semibold text-sm sm:text-xl text-[#051d70]'>Experienced, Qualified </h1>
      <h1 className='font-semibold text-sm sm:text-xl text-[#051d70]'>Always by your side </h1>
      </span>
      <div className='flex mt-7 justify-start '>


        <div className='flex flex-col items-center justify-center flex-1'>
          {/* <span >img</span> */}
          <span className=' h-20 w-20 bg-white flex justify-center items-center rounded-full p-1 shadow-lg mb-2'>
            <Image src={"/DoctorImg.jpeg"} alt='doctor img' width={50} height={10} className='rounded-full h-20 w-20' />
          </span>

          <h5 className='text-xs font-medium'>Dr. Rajesh Sharma</h5>
          <h5 className='text-xs'>Cardiologist</h5>
        </div>
        <div className='flex flex-col items-center justify-center flex-1'>
          <span className=' h-20 w-20 bg-white flex justify-center items-center rounded-full p-1 shadow-lg mb-2'>
            <Image src={"/DoctorImg.jpeg"} alt='doctor img' width={50} height={10} className='rounded-full h-20 w-20' />
          </span>
          <h5 className='text-xs font-medium'>Dr. Rajesh Sharma</h5>
          <h5 className='text-xs'>Cardiologist</h5>
        </div>
        <div className='hidden sm:flex flex-col items-center justify-center flex-1'>
          <span className=' h-20 w-20 bg-white flex justify-center items-center rounded-full p-1 shadow-lg mb-2'>
            <Image src={"/DoctorImg.jpeg"} alt='doctor img' width={50} height={10} className='rounded-full h-20 w-20' />
          </span>
          <h5 className='text-xs font-medium'>Dr. Rajesh Sharma</h5>
          <h5 className='text-xs'>Cardiologist</h5>
        </div>
        {/* <div className='flex flex-col items-center justify-center flex-1'>
          <span className=' h-[70%] w-[60%] bg-white flex justify-center items-center rounded-full p-1 shadow-lg mb-1'>
             <Image src={"/DoctorImg.jpeg"} alt='doctor img' width={50} height={10}  className='rounded-full h-[97%]  w-[97%]'/>
        </span>
        <h5 className='text-xs font-medium'>Dr. Rajesh Sharma</h5>
        <h5 className='text-xs'>Cardiologist</h5>
      </div> */}

      </div>
      <span className='font-semibold text-sm text-[#051d70] flex items-center gap-2 mt-6 '>View all Doctors <FaArrowRight size={12} /></span>
    </div>
  )
}
