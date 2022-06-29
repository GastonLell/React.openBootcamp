import React, {useState, useEffect} from 'react'
import TaskList from '../../components/container/TaskList'
import { useNavigate } from 'react-router-dom'

const TasksPage = () => {
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
      <TaskList />
    </div>
  )
}

export default TasksPage