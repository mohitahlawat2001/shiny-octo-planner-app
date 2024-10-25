import React, { useRef, useState } from 'react'
import '../styles/WhiteBoardWidget.css'

const WhiteBoardWidget = () => {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDrawing, setDrawing] = useState(false)

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    ctx.moveTo(x, y)
    ctx.beginPath()

    setDrawing(true)
  }

  const handleMouseMove = (event) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const handleMouseUp = () => {
    setDrawing(false)
  }

  const handleMouseLeave = () => {
    setDrawing(false)
  }

  const handleReset = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className='whiteboard-container'>
      <canvas
        ref={canvasRef}
        className='whiteboard'
        data-draggable='false'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ zIndex: 5 }}
      />
      <button className='reset-button' onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

export default WhiteBoardWidget
