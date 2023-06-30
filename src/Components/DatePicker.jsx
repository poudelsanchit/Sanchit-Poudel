import React, { useState } from 'react';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    console.log(selectedDate)

    return (
        <div>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className='text-box border-2 border-solid rounded-md'
            />
        </div>
    );
};

export default DatePicker;
