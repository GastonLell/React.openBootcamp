import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';


const TaskList = () => {
  const defaultTask = new Task("Example", 'Default description', false, LEVELS.NORMAL);

  // estado del componente
  const [tasks, setTasks] = useState([defaultTask])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    console.log('Tasks state has been modified');

    setLoading(false)

    return () => {
      console.log("Tasks List component is going to unmount...")
    }

  }, [tasks])
  
  const changeCompleted = () => {
    console.log("tarea edited")
  }
  
  return (
    <div>
      <div>
        Your Tasks:
      </div>
      <TaskComponent task={defaultTask}/>
    </div>
  )
}

export default TaskList;