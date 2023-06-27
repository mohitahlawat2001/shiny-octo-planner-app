import React, { useState } from 'react';
import './App.css';
import ClockWidget from './widgets/ClockWidget';
import WidgetGalleryModal from './modals/WidgetGalleryModal';
import Draggable from 'react-draggable';
import TimerWidget from './widgets/TimerWidget';
import CalendarWidget from './widgets/CalendarWidget';
 
function App() {
 const [widgets, setWidgets] = useState([
  { id: new Date().getTime(), component: <ClockWidget />, area: 'main-widget', name: "Date and Time" },
  { id: new Date().getTime() + 2, component: <CalendarWidget />, area: 'right-widget', name: "Calendar" },
  { id: new Date().getTime() + 1, component: <TimerWidget />, area: 'left-widget', name:"Timer" },
 ])
 const [showWidgetModal, setShowWidgetModal] = useState(false)
 const [selectedWidgetArea, setSelectedWidgetArea] = useState('')
 
 const removeWidget = (index) => {
  try {
   setWidgets(widgets.filter(widget => widget.id !== index))
  } catch (error) {
   console.log(error)
  }
 }
 
 return (
  <>
   {showWidgetModal && <WidgetGalleryModal setShowWidgetModal={setShowWidgetModal} selectedWidgetArea={selectedWidgetArea} widgets={widgets} setWidgets={setWidgets} />}
   <div className="add-button"
    onClick={() => {
     console.log('add button clicked')
     setShowWidgetModal(true)
     setSelectedWidgetArea('none-widget')
    }}
   >
    <p
     className='add-widget-button'
     style={{ background: "none", border: "none", color: "black", fontSize: "30px", cursor: "pointer", backgroundColor: "white", borderRadius: "50%", width: "50px", display: "flex", justifyContent: "center", alignItems: "center", height: "50px", position: "fixed", bottom: "10px", right: "10px" }}
    >+</p>
   </div>
   <div className='none-widget' >
    {widgets.length > 0 && widgets.map((widget, index) => {
     if (widget.area === 'none-widget') {
      return (
       <Draggable>
            <div style={{ padding: 10,}} className='widget-container' >
             <div style={{ marginBottom: 10 }}>
              <select value={widget.area}
               onChange={(e) => {
                let widgetList = [...widgets]
                widgetList[index].area = e.target.value
                setWidgets(widgetList)
               }}
              >
               <option value="none-widget">Floating</option>
               <option value="left-widget">Left</option>
               <option value="main-widget">Main</option>
               <option value="right-widget">Right</option>
              </select>
              <button
               onClick={() => {
                removeWidget(widget.id)
               }}
               style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
              >Close</button>
             </div>
             {widget.component}
            </div>
       </Draggable>
      )
     }
    })}
   </div>
   <div className="App">
    <div className="container">
     <div className='left-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'left-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container'>
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}
      {widgets.filter(widget => widget.area === 'left-widget').length < 3 && widgets.filter(widget => widget.area === 'left-widget').length > 0 &&
       <button
        className='add-widget-button'
        onClick={() => {
         setShowWidgetModal(true)
         setSelectedWidgetArea('left-widget')
        }}>+ Add Widget</button>
      }
     </div>
     <div className='main-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'main-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container' >
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}
      {widgets.filter(widget => widget.area === 'main-widget').length < 2 &&
       <button
        className='add-widget-button'
        onClick={() => {
         setShowWidgetModal(true)
         setSelectedWidgetArea('main-widget')
        }}>+ Add Widget</button>
      }
     </div>
     <div className='right-widget'>
      {widgets.length > 0 && widgets.map((widget, index) => {
       if (widget.area === 'right-widget') {
        return (
         <div style={{ padding: 10,}} className='widget-container'>
          <div style={{ marginBottom: 10 }}>
           <select value={widget.area}
            onChange={(e) => {
             let widgetList = [...widgets]
             widgetList[index].area = e.target.value
             setWidgets(widgetList)
            }}
           >
            <option value="none-widget">Floating</option>
            <option value="left-widget">Left</option>
            <option value="main-widget">Main</option>
            <option value="right-widget">Right</option>
           </select>
           <button
            onClick={() => {
             removeWidget(widget.id)
            }}
            style={{ background: "none", border: "none", color: "white", fontSize: "15px", cursor: "pointer", float: "right" }}
           >Close</button>
          </div>
          {widget.component}
         </div>
        )
       }
      })}
      {widgets.filter(widget => widget.area === 'right-widget').length < 3 && widgets.filter(widget => widget.area === 'right-widget').length > 0 &&
       <button
        className='add-widget-button'
        onClick={() => {
         setShowWidgetModal(true)
         setSelectedWidgetArea('right-widget')
        }}>+ Add Widget</button>
      }
     </div>
    </div>
   </div>
  </>
 )
}
 
export default App;