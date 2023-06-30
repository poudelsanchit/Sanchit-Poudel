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
                className='text-box'
            />
        </div>
    );
};

export default DatePicker;
