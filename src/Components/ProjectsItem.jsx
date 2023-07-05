import React from 'react'
import { NavLink } from 'react-router-dom'
const ProjectsItem = ({ name, img, desc }) => {

    return (

        <>
            <div className='flex flex-col items-center  text-3xl  mt-2 pt-20 z-0 l:items-center'>
                <NavLink to={'/projects'} className={'w-full flex items-center justify-center'}>
                    <div className=' w-60 h-72 s:w-64 m:w-72 m:h-80 l:w-11/12 l:h-96  cursor-pointer rounded-lg border-solid	border-2 border-bg-secondary2 2xl:w-96  md:w-72 '>
                        <img src={img} alt="" className='object-cover w-full h-full rounded-md' />
                    </div>
                </NavLink>
                <div className=' bg-bg-secondary2 dark:bg-box w-60 s:w-64 m:w-72 l:w-11/12 text-lg mt-5 p-3 rounded-md xl:w-96 md:w-72 '>{name}
                    <div className='text-xs text-primary'>{desc}</div>
                </div>

            </div>


        </>
    )
}

export default ProjectsItem