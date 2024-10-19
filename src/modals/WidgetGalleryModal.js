import React, { useState } from "react";
import ClockWidget from "../widgets/ClockWidget";
import ReminderListWidget from "../widgets/ReminderListWidget";
import TimerWidget from "../widgets/TimerWidget";
import CalendarWidget from "../widgets/CalendarWidget";
import WeatherWidget from "../widgets/WeatherWidget";
import GameWidget from "../widgets/GameWidget";
import WhiteBoardWidget from "../widgets/WhiteBoardWidget";
import NewsWidget from "../widgets/NewWidget";
import QuoteWidget from "../widgets/QuoteWidget";
import VideoRecorder from "../widgets/VideoRecorder";
import PomodoroWidget from "../widgets/PomodoroWidget";
export default function WidgetGalleryModal({
  setShowWidgetModal,
  selectedWidgetArea,
  widgets,
  setWidgets,
}) {
  const [galleryWidgets, setGalleryWidgets] = useState([
    { component: <ClockWidget />, name: "Date and Time" },
    { component: <ReminderListWidget />, name: "Reminder List" },
    { component: <TimerWidget />, name: "Timer" },
    { component: <CalendarWidget />, name: "Calendar" },
    { component: <WeatherWidget />, name: "Weather" },
    { component: <GameWidget />, name: "Game" },
    { component: <WhiteBoardWidget />, name: "Whiteboard" },
    { component: <NewsWidget />, name: "News" },
    { component: <QuoteWidget />, name: "Quote" },
    {component: <VideoRecorder/>, name : "Video Recorder" },
    { component: <PomodoroWidget />, name: "Pomodoro" },
  ]);
  return (
    <div
      className="modal"
      onClick={(e) => {
        setShowWidgetModal(false);
      }}
    >
      <div style={{borderRadius: '16px'}} className="modal-content" >
        <div  className="modal-header">
          <h2
          style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: '28px',
              fontWeight: '600',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              padding: '10px 20px',
              backgroundColor: '#183a37',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}  
            className="widget-gallery-title"
           >
            Widget Gallery
          </h2>
          
          <div >
            {galleryWidgets.map((widget, index) => {
              return (
                <div 
                  key={index}
                  className="widget-gallery-item"
                  onClick={() => {
                    let flag = false;
                    for (let i = 0; i < widgets.length; i++) {
                      if (widgets[i].name === widget.name) {
                        flag = true;
                        break;
                      }
                    }
                    if (!flag) {
                      setWidgets([
                        ...widgets,
                        {
                          id: new Date().getTime(),
                          component: widget.component,
                          area: selectedWidgetArea,
                          name: widget.name,
                        },
                      ]);
                      setShowWidgetModal(false);
                    } else {
                      alert("You can only add one of each widget");
                    }
                  }}
                >
                  <div className="row">
                    <div className="widget-gallery-item-name">
                      {widget.name}
                    </div>
                    <div className="widget-gallery-item-add-button">+</div>
                  </div>
                  {widget.component}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
