import { useState, useCallback, useEffect, useRef } from 'react'
import '../styles/PasswordGenerator.css'

function Pass () {
  const [password, setPassword] = useState('')
  const [symbols, setSymbols] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [length, setLength] = useState(8)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbers) str += '0123456789'
    if (symbols) str += '!@#$%^&*(){}[]_+=-?/>,<.;:|'
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, symbols, numbers])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, symbols, numbers, passwordGenerator])

  return (
    <div className='password-container'>
      <h1 className='password-title'>Password Generator</h1>

      <div className='password-input-group'>
        <input
          type='text'
          value={password}
          className='password-input'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='copy-button'>
          Copy
        </button>
      </div>

      <div className='controls-container'>
        <div className='length-control'>
          <input
            type='range'
            min={8}
            max={100}
            value={length}
            className='length-slider'
            onChange={(e) => {
              setLength(Number(e.target.value))
            }}
          />
          <label className='length-label'>Length: {length}</label>
        </div>

        <div className='checkbox-control'>
          <input
            type='checkbox'
            checked={numbers}
            id='numberInput'
            className='checkbox-input'
            onChange={() => setNumbers((prev) => !prev)}
          />
          <label htmlFor='numberInput' className='checkbox-label'>
            Numbers
          </label>
        </div>

        <div className='checkbox-control'>
          <input
            type='checkbox'
            checked={symbols}
            id='symbolInput'
            className='checkbox-input'
            onChange={() => setSymbols((prev) => !prev)}
          />
          <label htmlFor='symbolInput' className='checkbox-label'>
            Special Char
          </label>
        </div>
      </div>
    </div>
  )
}

export default Pass
