import React from 'react'
import { NavLink } from 'react-router-dom'
const NavMenu = () => {
    return (
        <>
            <header className='fixed z-50 top-0 left-0 w-screen bg-bg-primary p-5'>
                <nav className=' flex w-screen justify-center'>
                    <div className='z-50  flex flex-row justify-between gap-10'>
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/about'}><li>About</li></NavLink>
                        <NavLink to={'/projects'}> <li>Projects</li></NavLink>
                        <NavLink to={'/contact'}><li>Contact</li></NavLink>
                    </div>
                </nav >
            </header>


        </>
    )
}

export default NavMenu