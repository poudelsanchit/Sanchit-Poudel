import React from 'react'
import { NavLink } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Testimonals = () => {
    return (
        <div className='pt-32 flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col items-center text-xs text-text-tertiary'>see what our clients say about me</div>
            <div className='flex flex-col items-center text-5xl w-full  justify-center font-Montserrat font-bold pt-2s'>Testimonals</div>
            <div className='flex flex-col  items-center w-full bg-box rounded-md px-10 pt-5 pb-5 mt-5 md:3/5 '>
                <div className="content text-sm text-text-tertiary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate ad.
                </div>
                <div className="person-name flex justify-center text-xl">Sanchit Poudel</div>
                <div className="person-work flex justify-center text-sm text-text-tertiary">CEO,</div>
                <div className="person-work flex justify-center text-sm text-text-tertiary">NetBros</div>

            </div>
            <div className="buttons flex flex-row gap-5">
                <div className=" flex flex-col items-center pt-5">
                    <button className=' px-12 py-3 border-bg-secondary2 border-solid border-2 rounded-md hover:bg-button-hover'>
                        <p className='text-white'>  <HiChevronLeft /> </p>

                    </button>
                </div>
                <div className=" flex flex-col items-center pt-5">
                    <button className=' px-12 py-3 border-bg-secondary2 border-solid border-2 rounded-md hover:bg-button-hover'>
                        <p className='text-white'>  <HiChevronRight /> </p>

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Testimonals