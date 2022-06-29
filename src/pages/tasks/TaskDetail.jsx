import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const TaskDetail = () => {
    const { id } = useParams();
    const [isLogged, setIsLogged] = useState();
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path)
    }

    useEffect(() => {
        setIsLogged(
            localStorage.getItem('credentials')
        )

        if (!isLogged) {
            alert('You must be logged in. Redirecting to login...')
            return navigateTo('/login')
        }
    }, [])

    return (
        <div>
            <h2>Task Detail {id}</h2>

        </div>
    )
}

export default TaskDetail