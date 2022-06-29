import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToHome = (path) => {
        navigate(path)
    }
    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(+1)
    }

    return (
        <div>
            <h2>
                About | FAQs Page
            </h2>
            <div>
                <button onClick={() => goToHome('/')}>Go To Home</button>
                <button onClick={goBack}>Go To Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    )
}

export default AboutPage