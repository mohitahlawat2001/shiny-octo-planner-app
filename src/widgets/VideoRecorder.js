import React, { useState, useRef } from 'react'
import '../styles/VideoRecorderWidget.css'

const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [videoBlob, setVideoBlob] = useState(null)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  const recordedChunks = useRef([])
  const mediaRecorderRef = useRef(null)

  const startCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      streamRef.current = videoStream
      videoRef.current.srcObject = videoStream
    } catch (err) {
      console.error('Error accessing media devices.', err)
      alert(
        'Unable to access camera and microphone. Please check permissions.'
      )
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }

  const startRecording = () => {
    if (!streamRef.current) {
      startCamera()
    }

    if (streamRef.current) {
      setIsRecording(true)
      recordedChunks.current = []

      const recorder = new MediaRecorder(streamRef.current)
      mediaRecorderRef.current = recorder

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data)
        }
      }

      recorder.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: 'video/webm' })
        setVideoBlob(blob)
        stopCamera()
      }

      recorder.start()
    } else {
      alert('Unable to start recording. Please try again.')
    }
  }

  const stopRecording = () => {
    setIsRecording(false)
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
    }
  }

  const downloadVideo = () => {
    if (videoBlob) {
      const url = URL.createObjectURL(videoBlob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'recorded-video.webm'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }

  return (
    <div id='video-recorder-widget'>
      <h2>Video Recorder</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ display: isRecording ? 'block' : 'none' }}
      />

      <div className='controls'>
        {!isRecording
          ? (
            <button className='record-button' onClick={startRecording}>
              Start Recording
            </button>
            )
          : (
            <button className='record-button' onClick={stopRecording}>
              Stop Recording
            </button>
            )}
      </div>

      {videoBlob && (
        <div id='preview-section'>
          <h3>Preview</h3>
          <video
            id='preview-video'
            controls
            src={URL.createObjectURL(videoBlob)}
          />
          <br />
          <button id='download-btn' onClick={downloadVideo}>
            Download Video
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoRecorder
