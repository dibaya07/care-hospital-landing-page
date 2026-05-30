import React from 'react'
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { RiMedal2Fill } from "react-icons/ri";




export default function HeroSection() {
    return (
        <div className='bg-[#F9F8FB] shadow-md'>
            <div className='flex flex-col justify-center items-center pt-8 pb-28'>
                <span className='bg-[#64fffa]/30  text-[#014643] font-semibold px-3 py-1 rounded-full shadow mb-5 text-sm'>Your Health, Our Priority</span>
                <span className='text-4xl tracking-wide font-bold my-2'>24/7 Emergency Care</span>
                <span className='text-4xl tracking-wide font-semibold my-1.5'>When Every Second Matters</span>
                <span className='text-sm'>Expert doctors and advance technology delivering high-quality healthcare</span>

                <div className=' flex justify-center items-start mt-28'>
                    <div className=' tagLinesDiv'>
                        <span className='text-[#1b0888]'><MdOutlineHealthAndSafety size={40} /></span>
                        <h3 className='font-semibold mb-1.5'>Expert Care</h3>
                        <h4 className='tagLinesH4'>Experienced & </h4>
                        <h4 className='tagLinesH4'>Trusted Spacialist</h4>
                    </div>
                    <div className=' tagLinesDiv'>
                        <span className='text-[#1b0888]'><IoPerson size={40} /></span>
                        <h3 className='font-semibold mb-1.5'>Patient First</h3>
                        <h4 className='tagLinesH4'>Personalized care</h4>
                        <h4 className='tagLinesH4'>for every patient</h4>
                    </div>
                    <div className=' px-32 flex flex-col  justify-start items-center '>
                        <span className='text-[#1b0888]'><LuAlarmClock size={40} /></span>
                        <h3 className='font-semibold mb-1.5'>24/7 Service</h3>
                        <h4 className='tagLinesH4'>Experienced care </h4>
                    </div>
                </div>
            </div>

            <div className='bg-[#05644e] flex w-3/4  absolute bottom-5 mx-44 justify-between py-3 rounded-2xl text-white'>

                <div className=' banner'>
                    <span><IoIosPeople size={40} /></span>
                    <div >
                        <h2 className='font-bold'>20,000+</h2>
                        <h4 className='text-sm opacity-85'>Happy Patient</h4>
                    </div>
                </div>

                <div className='banner '>
                    <span><FaBedPulse size={30} /></span>
                    <div>
                        <h2 className='font-bold'>500+</h2>
                        <h4 className='text-sm opacity-85'>Advance Beds</h4>
                    </div>
                </div>

                <div className='banner'>
                    <span><FaUserDoctor size={30} /></span>
                    <div>
                        <h2 className='font-bold'>250+</h2>
                        <h4 className='text-sm opacity-85'>Expert Doctors</h4>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-1 gap-4 '>
                    <span><RiMedal2Fill size={30} /></span>
                    <div>
                        <h2 className='font-bold'>15+</h2>
                        <h4 className='text-sm opacity-85'>Years of Experience</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}
