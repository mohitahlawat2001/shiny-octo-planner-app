import React, { useEffect, useState } from 'react'
 
export default function ClockWidget() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
 
  const tidyDate = (date) => {
    const dateArray = date
    const day = dateArray.getDay()
    const dateNumber = dateArray.getDate()
    const month = dateArray.getMonth() + 1
    const year = dateArray.getFullYear()
 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
 
    return `${days[day]}, ${dateNumber} ${months[month - 1]} ${year}`
 
  }
 
  return (
    <div>
      <p className='time'>{time}</p>
      <p className='date'>{tidyDate(date)}</p>
    </div>
  )
}