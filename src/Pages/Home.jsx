import React from 'react'
import { GrProjects } from 'react-icons/gr';

const Home = () => {
    return (
        <div className='  pt-24  w-screen flex  justify-center h-screen'>
            {/* intro */}
            <div className='flex flex-col w-4/5 items-center '>

                <div className="img w-4/5"><img src='https://sanchitpoudel.com.np/assets/logo.jpeg' alt="" className='rounded-md' /></div>
                <div className="text-3xl w-4/5 pt-5">Hi, I'm Sanchit</div>
                <div className="text w-4/5">I am working as a Frontend Developer. I love to design and make new web experiences for the people.</div>
                <div className="see-my-works w-4/5 pt-5"><button className='w-max px-5 py-3 bg-bg-secondary2 rounded-md hover:bg-button-hover'>
                    <p className='text-white'>see my works   </p>

                </button>
                </div>

                <div className='pt-32'>
                    <div>About Me</div>
                    <div>jnhb</div>
                </div>
            </div>



        </div>
    )
}

export default Home