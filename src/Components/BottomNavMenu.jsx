import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';





const BottomNavMenu = () => {
    return (
        <>
            <div className='flex flex-col text-sm justify-evenly bottom-0 w-screen bg-bottom-nav-background p-5  md:flex-row gap-5'>
                <div className='flex flex-row gap-10 text-lg order-2 md:order-1'>
                    <BsInstagram className='cursor-pointer' />
                    <FaFacebookSquare className='cursor-pointer' />
                    <FiGithub className='cursor-pointer' />

                </div>
                <div className='text-xs md:text-sm order-1 md:order-2'>Designed with 💜 and coded with frustrations</div>
                <div className='text-xs md:text-sm order-3'>© 2023 - Sanchit Poudel</div>
            </div>
        </>
    )
}

export default BottomNavMenu