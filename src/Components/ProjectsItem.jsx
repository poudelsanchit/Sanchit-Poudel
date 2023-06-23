import React from 'react'

const ProjectsItem = ({ name, img, desc }) => {
    console.log(img)

    return (

        <>
            <div className='text-3xl bg-bg-secondary2 px-20 py-3 rounded-lg m-2' >
                <div>{name}</div>
            </div>

        </>
    )
}

export default ProjectsItem