import React, { useState } from 'react';
import c from '../Styles/Calendar.module.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = () => {
    const blanks = [];
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      blanks.push(
        <div key={`blank-${i}`} className={c.calendarDay}>
          {""}
        </div>
      );
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = 
        d === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <div 
          key={d} 
          className={`${c.calendarDay} ${isToday ? c.today : ''}`}
        >
          {d}
        </div>
      );
    }

    return [...blanks, ...days];
  };

  return (
    <div className={c.calendarContainer}>
      <div className={c.calendarHeader}>
        <button className={c.navButton} onClick={prevMonth}>&lt;</button>
        <h2 className={c.monthTitle}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button className={c.navButton} onClick={nextMonth}>&gt;</button>
      </div>

      <div className={c.weekdaysGrid}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
          <div key={day} className={c.weekday}>{day}</div>
        ))}
      </div>

      <div className={c.calendarGrid}>
        {renderCalendar()}
      </div>
    </div>
  );
}

export default Calendar;