import React, { useEffect, useState } from 'react'
 
export default function ReminderListWidget() {
  const [reminderListData, setReminderListData] = useState()
 
  useEffect(() => {
    let reminderList = JSON.parse(localStorage.getItem('reminderList')) || []
    if (!reminderList || reminderList == "undefined") {
      reminderList = []
    }
    setReminderListData(reminderList)
  }, [])
 
  useEffect(() => {
    if (!reminderListData) {
      return
    }
    localStorage.setItem('reminderList', JSON.stringify(reminderListData))
  }, [reminderListData])
 
  return (
    <div style={{ minWidth: 300 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
        <p>Reminder List</p>
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => {
            setReminderListData([...reminderListData, {
              title: '',
              datestamp: '',
            }])
          }}
        >+ New</button>
      </div>
      {reminderListData?.length > 0 && reminderListData.map((reminder, index) => {
        return (
          <div className='reminder-container' key={index}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
              <input className='text-input' value={reminder.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    let reminderList = [...reminderListData]
                    reminderList[index].title = e.target.value
                    reminderList[index].datestamp = new Date()
                    setReminderListData([...reminderList, {
                      title: '',
                      datestamp: '',
                    }])
                  }
                }}
                onChange={(e) => {
                  let reminderList = [...reminderListData]
                  reminderList[index].title = e.target.value
                  reminderList[index].datestamp = new Date()
                  setReminderListData(reminderList)
                }} />
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  let reminderList = [...reminderListData]
                  reminderList.splice(index, 1)
                  setReminderListData(reminderList)
                }}
              >X</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}