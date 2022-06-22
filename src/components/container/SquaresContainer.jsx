import React, { useState, useEffect } from 'react'
import Squares from '../pure/Squares'

const SquaresContainer = () => {

  const initialState = {
    R: 0,
    G: 0,
    B: 0
  }

  const [numberColor, setNumberColor] = useState(initialState)
  const [count, setCount] = useState(0)
  const [finish, setFinish] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const stopChange = () => {
    setNumberColor(initialState)
    setFinish(true)
  }

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [])


  useEffect(() => {
    const newColor = (isHover && !finish) ? ({
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255)
    }) : initialState;
    setNumberColor(newColor)

  }, [count])


  return (
    <div className='container d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
      <Squares setIsHover={setIsHover} stopChange={stopChange} numberColor={numberColor} />
    </div>
  )
}

export default SquaresContainer