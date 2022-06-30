import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState(date);
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
};

export default Calendar;