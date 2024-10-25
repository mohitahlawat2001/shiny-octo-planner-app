import '../styles/AlarmWidget.css'
import { useState } from 'react'

const AlarmWidget = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isAlarm, setIsAlarm] = useState(false)

  let interval = 0
  const container = document.getElementById('alarms')
  const alarmDiv = document.createElement('div')
  const selectedDate = new Date(date + 'T' + time)

  const setAlarm = (e) => {
    e.preventDefault()
    const now = new Date()
    if (selectedDate <= now) {
      // not allowed to set alarm for time before current date
      alert(`Invalid time. Please select 
        a future date and time.`)
      return
    }
    if (isAlarm) {
      // implies that alarm is already set and another cannot be set
      alert('Only one alarm can be set! ')
    } else {
      // no alarm has been set
      setIsAlarm(true)
      const timeUntilAlarm = selectedDate - now
      alarmDiv.classList.add('alarm')
      alarmDiv.innerHTML = `
                <div class="set-alarm-list">
                    <span>${date}</span>
                    <span>${time}</span>
                    <button class="delete-alarm">Delete</button>
                </div>
            `
      alarmDiv.querySelector('.delete-alarm').addEventListener('click', () => {
        setIsAlarm(false)
        alarmDiv.remove()
        clearTimeout(interval)
      })
      interval = setTimeout(() => {
        alert('Time to wake up!')
        setIsAlarm(false)
        alarmDiv.remove()
      }, timeUntilAlarm)
      container.appendChild(alarmDiv)
    }
  }

  return (
    <>
      <div>
        <form class='alarm-clock' onSubmit={setAlarm}>
          <div className='alarm-inp-container'>
            <label htmlFor='date'>Date: </label>
            <input
              className='alarm-input'
              id='date'
              type='date'
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className='alarm-inp-container'>
            <label htmlFor='time'>Time: </label>
            <input
              className='alarm-input'
              id='time'
              type='time'
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>
          <button type='submit' className='alarm-button'>
            Set Alarm
          </button>
        </form>
        <div className='alarms' id='alarms' />
      </div>
    </>
  )
}

export default AlarmWidget
