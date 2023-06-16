import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';

const NavMenu = () => {
    return (
        <>
            <header className='fixed w-screen   pt-5 top-0    md:bg-bg-primary md:w-screen md:fixed md:pb-5 md:z-50 '>
                <nav className=' flex justify-end mr-5 mt-0  md:justify-center md:mt-0'>
                    <div className=" absolute top-0 right-0 mt-5 mr-6 text-3xl cursor-pointer z-20"><CgMenuRight /></div>
                    <div className='rounded-lg  items-end flex flex-col z-50   md:gap-10 bg-box md:flex md:bg-bg-primary md:z-50 md:flex-row'>
                        <IoCloseOutline className='flex flex-col float-right text-end text-2xl' />
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/about'}><li>About</li></NavLink>
                        <NavLink to={'/projects'}> <li>Projects</li></NavLink>
                        <NavLink to={'/contact'}><li>Contact</li></NavLink>
                    </div>


                </nav >

            </header >


        </>
    )
}

export default NavMenu