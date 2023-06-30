import React from 'react'
import Sanchit from '../assets/image4.jpg'
const About = () => {
    return (
        <>
            <div className=' w-screen h-max flex items-center justify-center pt-32  '>
                <div className='w-11/12 flex flex-col  sm:flex-row'>
                    <div className='sm:w-full'>
                        <div className='sm:w-11/12'>
                            <div className='text-lg'>Hi,<br /> I am <span className='bg-box p-3 rounded-lg'>Sanchit Poudel.</span></div>
                            <div className='mt-5 text-3xl'>A Frontend developer
                            </div>
                            <div className='text-text-tertiary pt-5 text-sm'>I am from Pokhara, Nepal. A place of beauty and nature. Since my childhood, I loved tech stuffs. I always tried to design stuff with my unique point of view. I also love to create things that can be useful to others.</div>
                            <div className='text-text-tertiary pt-5 text-sm'>I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</div>
                            <div className='text-text-tertiary pt-5 text-sm'>My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.
                            </div>
                            <div className=" w-4/5 pt-5 pb-5">
                                <button className='w-max px-5 py-3 bg-bg-secondary2 rounded-md hover:bg-button-hover '>
                                    <p className='text-white'>Download CV   </p>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:items-center justify-center  sm:w-4/5  md:w-6/12 lg:w-1/4">
                        <img src={Sanchit} alt="" className='rounded-md' />
                    </div>
                </div >

            </div >
            <div className=' w-screen h-max flex items-center justify-center pt-32  '>
                <div className='mt-5 text-3xl'>My Journey

                </div>
            </div>

        </>
    )
}

export default About