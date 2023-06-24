import React from 'react'

const ProjectsItem = ({ name, img, desc }) => {
    console.log(img)

    return (

        <>
            <div className='flex flex-col items-center justify-center text-3xl  mt-2 pt-20 z-0' >
                <div className='w-72 h-72 rounded-lg xl::w-96'>
                    <img src={img} alt="" className='object-cover w-full h-full rounded-lg' />
                </div>
                <div>{name}</div>

            </div>


        </>
    )
}

export default ProjectsItem