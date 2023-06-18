import React from 'react'
import { GrProjects } from 'react-icons/gr';

const Home = () => {
    return (
        <div className='  pt-24  w-screen flex  justify-center h-max'>
            {/* intro */}
            <div className='flex flex-col w-4/5 items-center '>

                <div className="img w-4/5"><img src='https://sanchitpoudel.com.np/assets/logo.jpeg' alt="" className='rounded-md' /></div>
                <div className="text-3xl w-full pt-5">Hi, I'm Sanchit</div>
                <div className='flex flex-row w-full gap-3'>
                    <div className='pt-1'>
                        <div className='flex flex-col items-center'>
                            <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                            <div className='block w-0.5 h-12 bg-button-hover'></div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                            <div className='block w-0.5 h-12 bg-button-hover'></div>
                        </div>  <div className='flex flex-col items-center'>
                            <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                        </div></div>
                    <div className='w-full'>
                        <div className="flex  justify-start  text w-4/5  text-text-tertiary">Software Engineer </div>

                        <div className="flex  justify-start text w-4/5 pt-10 text-text-tertiary">Frontend Developer </div>
                        <div className="flex  justify-start text w-4/5 pt-10  text-text-tertiary">Problem Solver </div>
                    </div>


                </div>


                <div className="see-my-works w-4/5 pt-5"><button className='w-max px-5 py-3 bg-bg-secondary2 rounded-md hover:bg-button-hover'>
                    <p className='text-white'>see my works   </p>

                </button>
                </div>

                <div className='pt-32 flex flex-col justify-center  w-full '>
                    <div className='flex flex-col items-center text-xs text-text-tertiary '>Let me introduce myself</div>
                    <div className='flex flex-col items-center text-4xl w-full  justify-center font-Montserrat font-bold pt-2 '>ABOUT ME</div>
                    <div className='flex flex-col items-start text-text-tertiary text-sm  pt-3'>I'm a Frontend Developer currently studying software enginnering in Nepal.</div>
                    <div className='text-text-tertiary text-sm  pt-3'>Fast forward to 2023 and I’ve tried it all, from HTML/CSS to React,Tailwind. Everything I have done, small or big, has been a vital stepping stone for where I am today</div>
                    <div className=" flex flex-col w-full items-center pt-5">
                        <button className='w-max px-16 py-3 border-bg-secondary2 border-solid border-2 rounded-md hover:bg-button-hover'>
                            <p className='text-white'>Read more   </p>

                        </button>
                    </div>

                    {/*
                    <div className='text-text-tertiary text-sm  pt-3'>What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design. </div> */}
                </div>
            </div>



        </div>
    )
}

export default Home