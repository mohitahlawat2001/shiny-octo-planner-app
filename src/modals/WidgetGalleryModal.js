import React, { useState } from 'react'
import ClockWidget from '../widgets/ClockWidget'
import ReminderListWidget from '../widgets/ReminderListWidget'
import TimerWidget from '../widgets/TimerWidget'
import CalendarWidget from '../widgets/CalendarWidget'
import WeatherWidget from '../widgets/WeatherWidget'
import GameWidget from '../widgets/GameWidget'
import WhiteBoardWidget from '../widgets/WhiteBoardWidget'
import NewsWidget from '../widgets/NewWidget'
import QuoteWidget from '../widgets/QuoteWidget'
import VideoRecorder from '../widgets/VideoRecorder'
import PomodoroWidget from '../widgets/PomodoroWidget'
import Pass from '../widgets/Pass'
export default function WidgetGalleryModal ({
  setShowWidgetModal,
  selectedWidgetArea,
  widgets,
  setWidgets
}) {
  const [galleryWidgets, setGalleryWidgets] = useState([
    { component: <ClockWidget />, name: 'Date and Time' },
    { component: <ReminderListWidget />, name: 'Reminder List' },
    { component: <TimerWidget />, name: 'Timer' },
    { component: <CalendarWidget />, name: 'Calendar' },
    { component: <WeatherWidget />, name: 'Weather' },
    { component: <GameWidget />, name: 'Game' },
    { component: <WhiteBoardWidget />, name: 'Whiteboard' },
    { component: <NewsWidget />, name: 'News' },
    { component: <QuoteWidget />, name: 'Quote' },
    { component: <VideoRecorder />, name: 'Video Recorder' },
    { component: <PomodoroWidget />, name: 'Pomodoro' },
    { component: <Pass />, name: 'Pass' }
  ])
  return (
    <div
      className='modal'
      onClick={(e) => {
        setShowWidgetModal(false)
      }}
    >
      <h2
        style={{
          position: 'absolute',
          left: '50%',
          top: '20px',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
          fontSize: '30px',
          fontWeight: '700',
          color: '#FFFFFF',
          padding: '12px 24px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          background: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          transition: 'all 0.3s ease-in-out',
          cursor: 'default',
          userSelect: 'none'
        }}
        className='widget-gallery-title'
      >
        Widget Gallery
      </h2>

      <div style={{ borderRadius: '16px' }} className='modal-content'>
        <div className='modal-header'>
          <div>
            {galleryWidgets.map((widget, index) => {
              return (
                <div
                  key={index}
                  className='widget-gallery-item'
                  onClick={() => {
                    let flag = false
                    for (let i = 0; i < widgets.length; i++) {
                      if (widgets[i].name === widget.name) {
                        flag = true
                        break
                      }
                    }
                    if (!flag) {
                      setWidgets([
                        ...widgets,
                        {
                          id: new Date().getTime(),
                          component: widget.component,
                          area: selectedWidgetArea,
                          name: widget.name
                        }
                      ])
                      setShowWidgetModal(false)
                    } else {
                      alert('You can only add one of each widget')
                    }
                  }}
                >
                  <div className='row'>
                    <div className='widget-gallery-item-name'>
                      {widget.name}
                    </div>
                    <div className='widget-gallery-item-add-button'>+</div>
                  </div>
                  {widget.component}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
