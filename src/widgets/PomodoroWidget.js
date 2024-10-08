import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/PomodoroWidget.css'
const PomodoroWidget = () => {
    const [pomordroSession, setPomordroSession] = useState({
        sessionTime: 1500,//25 minutes
        breakTime: 300,//5 minutes
        isStudying: false,
        isBreak: false,
    });


    useEffect(()=>{
        let timer = null;
        if(pomordroSession.isStudying && pomordroSession.sessionTime>0){
            timer=setInterval(()=>{
                setPomordroSession((prevTime)=>({
                        ...prevTime,
                        sessionTime: prevTime.sessionTime-1,
                }))
            },1000)
        }else if(pomordroSession.isStudying && pomordroSession.sessionTime===0 && !pomordroSession.isBreak){
            //start break
            alert('Time to take a break!')
            setPomordroSession((prevTime)=>({
                    ...prevTime,
                    isBreak: true,
                    sessionTime: prevTime.breakTime
            }))
            clearInterval(timer)
        }else if(pomordroSession.isStudying&&pomordroSession.sessionTime===0&&pomordroSession.isBreak){
            //end break
            alert('Break is over! Time to start studying again!')
            setPomordroSession((prevTime)=>({
                    sessionTime:1500,
                    breakTime:300,
                    isStudying:false,
                    isBreak:false
            }))
            clearInterval(timer)
        }
        

        return ()=>clearInterval(timer)
    },[pomordroSession.isStudying,pomordroSession.sessionTime,pomordroSession.isBreak,pomordroSession.breakTime])
    const remainingTime= (time)=>{
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(minutes<10){
            minutes = `0${minutes}`;
        }
        if(seconds<10){
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }
    return (
        <div className='pomodro-widget'>
            <h1 className='pomodro-h1'>Pomodoro Timer </h1>
            <div className="pomodro-container">

            <div className="pomodro-timer">
            {remainingTime(pomordroSession.sessionTime)}
            </div>
            <div className='pomodro-buttons'>
                <button className={pomordroSession.isStudying ? 'pause-btn' : 'start-btn'}  onClick={()=>setPomordroSession((prevTime)=>{
                    return {
                        ...prevTime,
                        isStudying: !prevTime.isStudying

                    }
                })}
                >
                    {pomordroSession.isStudying ? 'Pause' : pomordroSession.sessionTime===1500 ? 'Start' : 'Resume'}
                </button>
                <button className='restart-btn'
                onClick={()=>setPomordroSession((prevTime)=>{
                    return {
                        sessionTime:1500,
                        breakTime:300,
                        isStudying:false,
                        isBreak:false
                    }
                })}
                >Restart</button>
            </div>
            </div>
        </div>
        
    )
}

export default PomodoroWidget