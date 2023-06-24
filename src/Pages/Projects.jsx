import React from 'react'
import Sportism from '../assets/sportism.png'
import Twitter from '../assets/twitter.png'
import Portfolio from '../assets/image4.jpg'
import ProjectsItem from '../Components/ProjectsItem'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation]);

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Sportism',
            desc: 'Sportism is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Sportism}`
        },
        {
            id: 2,
            name: 'TwitterVerse',
            desc: 'Introducing "TweetVerse," a dynamic webapp that mirrors the essence of Twitter. Connect, engage, and express yourself with real-time tweets, trending hashtags, private messaging, and powerful search features. Join TweetVerse today!',
            img: `${Twitter}`
        },
        {
            id: 3,
            name: 'Portfolio',
            desc: 'Protfolio is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Portfolio}`
        },
        {
            id: 3,
            name: 'Twitter',
            desc: 'Protfolio is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Portfolio}`
        },
        {
            id: 1,
            name: 'Sportism',
            desc: 'Sportism is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Sportism}`
        },
        {
            id: 2,
            name: 'TwitterVerse',
            desc: 'Introducing "TweetVerse," a dynamic webapp that mirrors the essence of Twitter. Connect, engage, and express yourself with real-time tweets, trending hashtags, private messaging, and powerful search features. Join TweetVerse today!',
            img: `${Twitter}`
        },
        {
            id: 3,
            name: 'Portfolio',
            desc: 'Protfolio is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Portfolio}`
        },
        {
            id: 3,
            name: 'Twitter',
            desc: 'Protfolio is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. Stay updated, engage with fellow fans, and never miss a moment of sporting excitement. Download Sportism now and experience sports like never before.',
            img: `${Portfolio}`
        },
    ];

    return (
        <div className='pt-32 flex flex-col justify-center items-center w-full '>
            <div className='flex flex-col items-center text-xs text-text-tertiary'>some of my recent works</div>
            <div className='flex flex-col items-center text-5xl w-full  justify-center font-Montserrat font-bold pt-2s'>Projects</div>
            {/* project items */}

            <div className='w-full   items-center justify-center'>
                < div className='w-full  rounded-lg pt-20'>
                    <Swiper slidesPerView={1} navigation={true} modules={[Navigation, Pagination]}
                        breakpoints={
                            {
                                640: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                }
                            }
                        }

                    >

                        {
                            projects.map((projects) => {
                                return (
                                    <SwiperSlide >
                                        <ProjectsItem name={projects.name} img={projects.img} desc={projects.desc} />
                                    </SwiperSlide>



                                );



                            })
                        }
                    </Swiper >


                </div >
            </div>


        </div >

    )
}

export default Projects