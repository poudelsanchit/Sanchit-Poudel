import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='pt-24 w-screen flex justify-center h-full pb-10 bg-primary dark:bg-bg-dark'>
            {/* intro */}
            <div className='flex flex-col w-full items-center '>
                <div className='text-text-secondary dark:text-text-tertiary text-sm '>get in touch</div>
                <div className='text-4xl font-bold font-Montserrat text-box dark:text-white'>CONTACT ME</div>
                {/* form */}
                <div className='flex flex-col items-center md:items-start  md:flex-row w-11/12 lg:w-4/5 justify-around mt-10 gap-10  mb-16'>
                    <div className='flex flex-col gap-10  w-full l:w-4/5'>
                        <div className='flex  text-lg l:text-3xl bg-box rounded-md p-3 items-center gap-3 w-full'>
                            <div className=' bg-button-hover p-2 rounded-lg' ><BsTelephone /></div>
                            <div className='text-sm l:text-lg'>9846905213</div>
                        </div>
                        <div className='flex  text-lg l:text-3xl bg-box rounded-md p-3 items-center gap-3'>
                            <div className=' bg-button-hover p-2 rounded-lg' ><HiOutlineMail /></div>
                            <div className=' text-sm l:text-lg'>snchtpdl12@gmail.com</div>
                        </div>
                        <div className='flex  text-lg l:text-3xl bg-box rounded-md p-3 items-center gap-3'>
                            <div className=' bg-button-hover p-2 rounded-lg' ><HiLocationMarker /></div>
                            <div className='text-sm l:text-lg'>Pokhara, Nepal</div>
                        </div>

                    </div>
                    <div className='w-1 h-4/5 bg-box dark:bg-white rounded-lg' />
                    <div className='flex flex-col gap-10 w-full l:w-4/5'>

                        <div className='flex text-3xl bg-box rounded-md  items-center gap-3'>
                            <input type="text" name="" id="" className=' bg-box w-full p-5 focus:outline-none rounded-md text-sm l:text-lg ' placeholder='Your Name' />
                        </div>
                        <div className='flex text-3xl bg-box rounded-md items-center gap-3'>
                            <input type="email" name="" id="" className=' bg-box w-full p-5 focus:outline-none rounded-md text-sm l:text-lg ' placeholder='Email' />

                        </div>
                        <div className='flex text-3xl bg-box rounded-md items-center gap-3'>
                            <textarea type="text" name="" id="" className='bg-box w-full p-5 focus:outline-none rounded-md text-sm l:text-lg ' placeholder='Your Message' />

                        </div>
                        <button className='w-max px-10 py-3 bg-bg-secondary2 rounded-md hover:bg-button-hover'>
                            <p className='text-white'>Send</p>


                        </button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact