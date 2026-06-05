import React from 'react'
import { GrCertificate } from "react-icons/gr";

export default function Certificate() {
  return (
    <div className='pt-8 sm:pt-14 flex flex-col justify-center items-center  mt-2 sm:mt-10 pb-6 '>
      <h1 className='font-semibold tracking-wider text-xl'>Trusted & Certified By</h1>
      <div className=' flex gap-5 lg:gap-20  mt-4 bg-[#e3e3e3] rounded-2xl py-4 px-6 shadow-md'>
        <div className='certificate flex text-[10px] sm:text-base shadow-md'>
          <span><GrCertificate className="text-3xl sm:text-4xl" style={{color:"blue"}}/></span>
          <span>NABH</span>
        </div>
        <div className='certificate shadow-md flex text-[10px] sm:text-base'>
          <span><GrCertificate className="text-3xl sm:text-4xl" style={{color:"blue"}}/></span>
          <span>NABL</span>
        </div>
        <div className='certificate shadow-md flex text-[10px] sm:text-base'>
          <span><GrCertificate className="text-3xl sm:text-4xl" style={{color:"blue"}}/></span>
          <span>ISO</span>
        </div>
        <div className='certificate shadow-md hidden sm:flex'>
          <span><GrCertificate size={40} style={{color:"blue"}}/></span>
          <span>ISO</span>
        </div>
        <div className='certificate shadow-md hidden sm:flex'>
          <span><GrCertificate size={40} style={{color:"blue"}}/></span>
          <span>ISO</span>
        </div>
        <div className='certificate shadow-md hidden sm:flex'>
          <span><GrCertificate size={40} style={{color:"blue"}}/></span>
          <span>ISO</span>
        </div>

      </div>
    </div>
  )
}
