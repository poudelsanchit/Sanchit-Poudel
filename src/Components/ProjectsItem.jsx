import React from 'react'
import { NavLink } from 'react-router-dom'
const ProjectsItem = ({ name, img, desc }) => {

    return (

        <>
            <div className='flex flex-col items-end  text-3xl  mt-2 pt-20 z-0 l:items-center'>
                <NavLink to={'/projects'}>
                    <div className='w-80 h-96 rounded-lg border-solid	border-2 border-bg-secondary2 2xl:w-96 cursor-pointer  md:w-72'>
                        <img src={img} alt="" className='object-cover w-full h-full rounded-md' />
                    </div>
                </NavLink>
                <div className='bg-box w-80 mt-5 p-3 rounded-md xl:w-96 md:w-72 '>{name}
                    <div className='text-sm'>{desc}</div>
                </div>

            </div>


        </>
    )
}

export default ProjectsItem