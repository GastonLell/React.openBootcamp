import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();

  const goToHome = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => goToHome('/profile')}>Go To Profile</button>

      </div>
    </div>

  )
}

export default HomePage