import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';

const BottomNavMenu = () => {
    const links = [
        {
            'name': 'instagram',
            'icon': 'BsInstagram',
            'link': 'https://www.instagram.com/poudelsanchit/'
        },
        {
            'name': 'facebook',
            'icon': 'FaFacebookSquare',
            'link': 'https://www.facebook.com/snchtpdl12/'
        },
        {
            'name': 'github',
            'icon': 'FiGithub',
            'link': 'https://github.com/poudelsanchit/'

        },


    ]
    return (
        <>
            <div className='flex flex-col text-sm justify-evenly bottom-0 w-screen bg-bottom-nav-background p-5  md:flex-row gap-5'>
                <div className='flex flex-row gap-10 text-lg order-2 md:order-1'>

                    <a href="https://www.instagram.com/poudelsanchit/" target='_blank'><BsInstagram className='cursor-pointer' /></a>
                    <a href="https://www.facebook.com/snchtpdl12/" target='_blank'><FaFacebookSquare className='cursor-pointer' /></a>
                    <a href="https://github.com/poudelsanchit/" target='_blank'><FiGithub className='cursor-pointer' /></a>

                </div>
                <div className='text-xs md:text-sm order-1 md:order-2'>Designed with 💜 and coded with frustrations</div>
                <div className='text-xs md:text-sm order-3'>© 2023 - Sanchit Poudel</div>
            </div >
        </>
    )
}

export default BottomNavMenu