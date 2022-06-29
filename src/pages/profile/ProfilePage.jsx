import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const navigate = useNavigate();
    let logged = false;

    const goBack = () => {
        navigate(-1)
    }
    const navigateTo = (path) => {
        navigate(path)
    }

    useEffect(() => {
        logged = localStorage.getItem('credentials')

        if (!logged) {
            alert('You must be logged in. Redirecting to login...')
            return navigateTo('/login')
        }
    }, [])


    return (
        <div>
            <h1>Your Profile</h1>

            <button onClick={goBack}>Go back</button>
            <button onClick={() => navigateTo('/task')}>Go Task List</button>
        </div>
    )
}

export default ProfilePage