import React from 'react'
import Sportism from '../assets/sportism.png'
import Twitter from '../assets/twitter.png'
import Portfolio from '../assets/image4.jpg'
import CoinTracker from '../assets/cointracker.jpg'
import ProjectsItem from '../Components/ProjectsItem'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'Sportism',
            desc: 'Sportism is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community. ',
            img: `${Sportism}`,
        },
        {
            id: 2,
            name: 'TwitterVerse',
            desc: 'Introducing "TweetVerse," a dynamic webapp that mirrors the essence of Twitter. Connect, engage, and express yourself.',
            img: `${Twitter}`
        },
        {
            id: 3,
            name: 'Coin Tracker',
            desc: 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
            img: `${CoinTracker}`
        },
        {
            id: 4,
            name: 'Sportism',
            desc: 'Sportism is the ultimate sports app, offering live scores, standings, personalized notifications, and a social community',
            img: `${Sportism}`,
        },

    ];

    return (
        <div className='pt-32 flex flex-col justify-center items-center w-full dark:bg-bg-dark pb-10'>
            <div className='flex flex-col items-center text-xs text-text-secondary dark:text-text-tertiary'>some of my recent works</div>
            <div className='flex flex-col items-center text-5xl w-full  justify-center font-Montserrat font-bold pt-2s text-box dark:text-primary'>Projects</div>
            <div className='w-4/5 '>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
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
                    }>
                    {
                        projects.map((projects) => {
                            return (
                                <SwiperSlide key={projects.id} >
                                    <ProjectsItem name={projects.name} img={projects.img} desc={projects.desc} />
                                </SwiperSlide>



                            );



                        })
                    }

                </Swiper>


            </div >
        </div>



    )
}

export default Projects