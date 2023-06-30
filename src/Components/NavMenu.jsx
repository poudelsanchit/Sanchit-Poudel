import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';



const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleThemeSwitcher = () => {
        const html = document.querySelector('html');
        if (theme === 'light') {
            setTheme('dark');
            html.classList.add('dark');
        }
        else {
            html.classList.remove('dark');
            setTheme('light')
        }
        console.log(theme);

    }

    console.log(isOpen)
    return (
        <>

            <header className='fixed w-screen z-50   pt-5 top-0 bg-primary shadow-sm md:bg-primary dark:bg-bg-primary2 md:w-screen md:fixed md:pb-5 md:z-50 '>

                <nav className='items-baseline flex flex-row mt-0 md:justify-evenly'>
                    <button onClick={handleThemeSwitcher} className='p-3 bg-bg-secondary2  hover:bg-button-hover absolute top-5 right-10 rounded-md'>
                        {
                            theme == 'light' ? <BsMoonFill />
                                : <BsSunFill />

                        }
                    </button>
                    <div className='flex justify-start align-middle text-3xl pl-5 text-box dark:text-primary'>Sanchit</div>
                    <div className='hidden rounded-lg  items-end  flex-col z-50 gap-4 md:flex md:gap-10  text-box  md:z-50 md:flex-row ' >
                        <NavLink to={'/'} className={({ isActive, isPending }) =>
                            isPending ? "text-box " : isActive ? "text-bg-secondary2" : " text-box dark:text-white"
                        }><li>Home</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-primary" : isActive ? "text-bg-secondary2" : " text-box dark:text-white"
                        } to={'/about'}><li>About</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-primary" : isActive ? "text-bg-secondary2" : " text-box  dark:text-white"
                        } to={'/projects'}> <li>Projects</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "text-primary" : isActive ? "text-bg-secondary2" : " text-box  dark:text-white"
                        } to={'/contact'}><li>Contact</li></NavLink>
                        <NavLink></NavLink>
                    </div>
                    {isOpen ?
                        <div className='transition-all ease-out duration-300	 absolute flex flex-col gap-2 rounded-md right-0 z-50 bg-box mt-1 mr-6 md:hidden'>
                            <div className="close-icon"><IoCloseOutline className='close-icon text-4xl cursor-pointer md:hidden dark:text-primary' onClick={() => setIsOpen((value) => false)} /></div>
                            <NavLink className='pr-4 pl-4' to={'/'} onClick={() => setIsOpen((value) => false)}><li>Home</li></NavLink>
                            <NavLink className='pr-4 pl-4' to={'/about'} onClick={() => setIsOpen((value) => false)} ><li>About</li></NavLink>
                            <NavLink className='pr-4 pl-4' to={'/projects'} onClick={() => setIsOpen((value) => false)}> <li>Projects</li></NavLink>
                            <NavLink className='pr-4 pl-4' to={'/contact'} onClick={() => setIsOpen((value) => false)}><li>Contact</li></NavLink>

                        </div>
                        :
                        <div className=" absolute top-0 right-0 mt-6 mr-6 text-3xl cursor-pointer z-50 md:hidden" onClick={() => setIsOpen((value) => true)} ><CgMenuRight /></div>


                    }


                </nav >

            </header >


        </>
    )
}

export default NavMenu