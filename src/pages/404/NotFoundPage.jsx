import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }
    return (
        <div>
            <h1>Page not found</h1>
            <button onClick={() => navigateTo('/')}>Go Back to home</button>

        </div>
    )
}

export default NotFoundPage