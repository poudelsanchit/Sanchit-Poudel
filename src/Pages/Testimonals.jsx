import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Testimonals = () => {

    const testimonals = [
        {
            id: 1,
            name: 'Sugam Khanal',
            position: 'Fullstack Trader',
            title: 'Matrix',
            content: 'Sanchit is a person of commitment.He is really good at what he is doing.I really like his work.Especially the unique point of view of developing sites'

        },
        {
            id: 2,
            name: 'Ananda Bastakoti',
            position: 'Co-founder',
            title: 'NetBros',
            content: 'Really hard- working person.Deliver the work as promised.Planning to work more with this person.'
        },
        {
            id: 3,
            name: 'Prashant Lamichane',
            position: 'Senior Data Engineer',
            title: 'NetBros',
            content: 'Really amazing communication skills.Always understand what I am trying to achieve.Also, his work is really amazing.Do really high- quality work.'

        }
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonals[activeIndex];
    const handlePrev = () => {

        if (activeIndex <= 0) {
            setActiveIndex(testimonals.length - 1);
        }
        else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }

    }
    const handleNext = () => {
        if (activeIndex >= testimonals.length - 1) {
            setActiveIndex(0);
        }
        else {
            setActiveIndex((oldIndex) => ++oldIndex);
        }
        console.log(activeIndex)
    }

    console.log(activeSlide);
    return (
        <div className='pt-32 flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col items-center text-xs text-text-tertiary'>see what our clients say about me</div>
            <div className='flex flex-col items-center text-5xl w-full  justify-center font-Montserrat font-bold pt-2s'>Testimonals</div>
            <SwitchTransition component={null}>
                <CSSTransition key={activeSlide.id} timeout={300} classNames='fade'>
                    <div className='flex flex-col 	items-center w-full bg-box rounded-md px-10 pt-5 pb-5 mt-5 md:3/5 '>
                        <div className="content text-sm text-text-tertiary">
                            {activeSlide.content}
                        </div>
                        <div className="person-name flex justify-center text-xl">{activeSlide.name}</div>
                        <div className="person-work flex justify-center text-sm text-text-tertiary">{activeSlide.position},</div>
                        <div className="person-work flex justify-center text-sm text-text-tertiary">{activeSlide.title}</div>

                    </div>
                </CSSTransition>

            </SwitchTransition>

            <div className="buttons flex flex-row gap-5">
                <div className=" flex flex-col items-center pt-5">
                    <button className=' px-12 py-3 border-bg-secondary2 border-solid border-2 rounded-md hover:bg-button-hover' onClick={handlePrev}>
                        <p className='text-white'>  <HiChevronLeft /> </p>

                    </button>
                </div>
                <div className=" flex flex-col items-center pt-5">
                    <button className=' px-12 py-3 border-bg-secondary2 border-solid border-2 rounded-md hover:bg-button-hover' onClick={handleNext}>
                        <p className='text-white'>  <HiChevronRight /> </p>

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Testimonals