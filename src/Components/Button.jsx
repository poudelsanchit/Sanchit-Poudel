import React from 'react'

const Button = ({ button_text }) => {
    return (
        <button className='w-max px-5 py-3 bg-bg-secondary2 rounded-md hover:bg-button-hover'>
            <p className='text-white'>{button_text}   </p>


        </button>)
}

export default Button