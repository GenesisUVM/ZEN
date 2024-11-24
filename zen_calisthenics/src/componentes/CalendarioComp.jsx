import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css'

const CalendarioComp = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    setDate(newDate);
    navigate('/ingresarDatos', { state: {selectedDate: newDate} })
  };

  

  return (
    <div className='contCalendario'>
      <Calendar onChange={handleDateChange} value={date} className='calenderBody' />
    </div>
  );
};

export default CalendarioComp;