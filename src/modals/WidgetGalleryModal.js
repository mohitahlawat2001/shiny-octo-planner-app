import React, { useState } from 'react'
import ClockWidget from '../widgets/ClockWidget'
import ReminderListWidget from '../widgets/ReminderListWidget'
import TimerWidget from '../widgets/TimerWidget'
import CalendarWidget from '../widgets/CalendarWidget'

export default function WidgetGalleryModal({ setShowWidgetModal, selectedWidgetArea, widgets, setWidgets }) {
  const [galleryWidgets, setGalleryWidgets] = useState([
    { component: <ClockWidget />, name: "Date and Time" },
    { component: <ReminderListWidget />, name: "Reminder List" },
    { component: <TimerWidget />, name: "Timer" },
    { component: <CalendarWidget />, name: "Calendar" },
  ])
  return (
    <div className="modal"
      onClick={(e) => {
        setShowWidgetModal(false)
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>Widget Gallery</h2>
          <div>
            {galleryWidgets.map((widget, index) => {
              return (
                <div key={index} className='widget-gallery-item'
                  onClick={() => {
                    let flag = false
                    for (let i = 0; i < widgets.length; i++) {
                      if (widgets[i].name === widget.name) {
                        flag = true
                        break
                      }
                    }
                    if (!flag) {
                      setWidgets([...widgets, {
                        id: new Date().getTime(),
                        component: widget.component,
                        area: selectedWidgetArea,
				 name:widget.name
                      }])
                      setShowWidgetModal(false)
                    } else {
                      alert('You can only add one of each widget')
                    }
                  }}
                >
                  <div className='row'>
                    <div className='widget-gallery-item-name'>{widget.name}</div>
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