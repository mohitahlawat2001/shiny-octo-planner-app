import React, { useState } from 'react'
import './App.css'
import WidgetGalleryModal from './modals/WidgetGalleryModal'
import Draggable from 'react-draggable'
import WeatherWidget from './widgets/WeatherWidget'
import GameWidget from './widgets/GameWidget'
import WhiteBoardWidget from './widgets/WhiteBoardWidget'
import NewsWidget from './widgets/NewWidget'
import QuoteWidget from './widgets/QuoteWidget'
import ClockWidget from './widgets/ClockWidget'
import BookWidget from './widgets/BookWidget'
import VideoRecorder from './widgets/VideoRecorder'
import PomodoroWidget from './widgets/PomodoroWidget'
import Pass from './widgets/Pass'
import AlarmWidget from './widgets/AlarmWidget'

function App () {
  const [widgets, setWidgets] = useState([
    {
      id: new Date().getTime(),
      component: <WeatherWidget />,
      area: 'right-widget',
      name: 'Weather'
    },
    {
      id: new Date().getTime() + 4,
      component: <QuoteWidget />,
      area: 'left-widget',
      name: 'Quote'
    },
    {
      id: new Date().getTime() + 5,
      component: <ClockWidget />,
      area: 'main-widget',
      name: 'Date and Time'
    },
    {
      id: new Date().getTime() + 1,
      component: <GameWidget />,
      area: 'main-widget',
      name: 'Game'
    },
    {
      id: new Date().getTime() + 2,
      component: <WhiteBoardWidget />,
      area: 'left-widget',
      name: 'Whiteboard'
    },
    {
      id: new Date().getTime() + 6,
      component: <BookWidget />,
      area: 'right-widget',
      name: 'Book'
    },
    {
      id: new Date().getTime() + 7,
      component: <VideoRecorder />,
      area: 'left-widget',
      name: 'VideoRecorder'
    },
    {
      id: new Date().getTime() + 8,
      component: <PomodoroWidget />,
      area: 'main-widget',
      name: 'Pomodoro Timer'
    },
    {
      id: new Date().getTime() + 9,
      component: <Pass />,
      area: 'right-widget',
      name: 'Pass'
    },
    {
      id: new Date().getTime() + 10,
      component: <AlarmWidget />,
      area: 'right-widget',
      name: 'Alarm Clock'
    }
  ])

  const [showWidgetModal, setShowWidgetModal] = useState(false)
  const [selectedWidgetArea, setSelectedWidgetArea] = useState('')

  const removeWidget = (index) => {
    try {
      setWidgets(widgets.filter((widget) => widget.id !== index))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {showWidgetModal && (
        <WidgetGalleryModal
          setShowWidgetModal={setShowWidgetModal}
          selectedWidgetArea={selectedWidgetArea}
          widgets={widgets}
          setWidgets={setWidgets}
        />
      )}
      <div className='App w-full h-screen'>
        <div className='dashboard-container'>
          {widgets.length > 0 &&
            widgets.map((widget, index) => {
              if (widget.area === 'none-widget') {
                return (
                  <Draggable
                    bounds='parent'
                    key={widget.id}
                    defaultPosition={{ x: 0, y: 0 }}
                  >
                    <div className='floating-widget-wrapper'>
                      <div style={{ padding: 10 }} className='widget-container'>
                        <div style={{ marginBottom: 10 }}>
                          <select
                            value={widget.area}
                            onChange={(e) => {
                              const widgetList = [...widgets]
                              widgetList[index].area = e.target.value
                              setWidgets(widgetList)
                            }}
                          >
                            <option value='none-widget'>Floating</option>
                            <option value='left-widget'>Left</option>
                            <option value='main-widget'>Main</option>
                            <option value='right-widget'>Right</option>
                          </select>
                          <button
                            onClick={() => {
                              removeWidget(widget.id)
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'white',
                              fontSize: '15px',
                              cursor: 'pointer',
                              float: 'right'
                            }}
                          >
                            Close
                          </button>
                        </div>
                        {widget.component}
                      </div>
                    </div>
                  </Draggable>
                )
              }
              return null
            })}
          <div className='container'>
            <div className='left-widget'>
              {widgets.length > 0 &&
                widgets.map((widget, index) => {
                  if (widget.area === 'left-widget') {
                    return (
                      <div style={{ padding: 10 }} className='widget-container'>
                        <div style={{ marginBottom: 10 }}>
                          <select
                            value={widget.area}
                            onChange={(e) => {
                              const widgetList = [...widgets]
                              widgetList[index].area = e.target.value
                              setWidgets(widgetList)
                            }}
                          >
                            <option value='none-widget'>Floating</option>
                            <option value='left-widget'>Left</option>
                            <option value='main-widget'>Main</option>
                            <option value='right-widget'>Right</option>
                          </select>
                          <button
                            onClick={() => {
                              removeWidget(widget.id)
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'white',
                              fontSize: '15px',
                              cursor: 'pointer',
                              float: 'right'
                            }}
                          >
                            Close
                          </button>
                        </div>
                        {widget.component}
                      </div>
                    )
                  }
                })}
              {widgets.filter((widget) => widget.area === 'left-widget')
                .length < 3 &&
                widgets.filter((widget) => widget.area === 'left-widget')
                  .length > 0 && (
                    <button
                      className='add-widget-button'
                      onClick={() => {
                        setShowWidgetModal(true)
                        setSelectedWidgetArea('left-widget')
                      }}
                    >
                      + Add Widget
                    </button>
              )}
            </div>

            <div className='main-widget'>
              {widgets.length > 0 &&
                widgets.map((widget, index) => {
                  if (widget.area === 'main-widget') {
                    return (
                      <div style={{ padding: 10 }} className='widget-container'>
                        <div style={{ marginBottom: 10 }}>
                          <select
                            value={widget.area}
                            onChange={(e) => {
                              const widgetList = [...widgets]
                              widgetList[index].area = e.target.value
                              setWidgets(widgetList)
                            }}
                          >
                            <option value='none-widget'>Floating</option>
                            <option value='left-widget'>Left</option>
                            <option value='main-widget'>Main</option>
                            <option value='right-widget'>Right</option>
                          </select>
                          <button
                            onClick={() => {
                              removeWidget(widget.id)
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'white',
                              fontSize: '15px',
                              cursor: 'pointer',
                              float: 'right'
                            }}
                          >
                            Close
                          </button>
                        </div>
                        {widget.component}
                      </div>
                    )
                  }
                })}
              {widgets.filter((widget) => widget.area === 'main-widget')
                .length < 2 && (
                  <button
                    className='add-widget-button'
                    onClick={() => {
                      setShowWidgetModal(true)
                      setSelectedWidgetArea('main-widget')
                    }}
                  >
                    + Add Widget
                  </button>
              )}
            </div>

            <div className='right-widget'>
              {widgets.length > 0 &&
                widgets.map((widget, index) => {
                  if (widget.area === 'right-widget') {
                    return (
                      <div style={{ padding: 10 }} className='widget-container'>
                        <div style={{ marginBottom: 10 }}>
                          <select
                            value={widget.area}
                            onChange={(e) => {
                              const widgetList = [...widgets]
                              widgetList[index].area = e.target.value
                              setWidgets(widgetList)
                            }}
                          >
                            <option value='none-widget'>Floating</option>
                            <option value='left-widget'>Left</option>
                            <option value='main-widget'>Main</option>
                            <option value='right-widget'>Right</option>
                          </select>
                          <button
                            onClick={() => {
                              removeWidget(widget.id)
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'white',
                              fontSize: '15px',
                              cursor: 'pointer',
                              float: 'right'
                            }}
                          >
                            Close
                          </button>
                        </div>
                        {widget.component}
                      </div>
                    )
                  }
                })}
              {widgets.filter((widget) => widget.area === 'right-widget')
                .length < 3 &&
                widgets.filter((widget) => widget.area === 'right-widget')
                  .length > 0 && (
                    <button
                      className='add-widget-button'
                      onClick={() => {
                        setShowWidgetModal(true)
                        setSelectedWidgetArea('right-widget')
                      }}
                    >
                      + Add Widget
                    </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
