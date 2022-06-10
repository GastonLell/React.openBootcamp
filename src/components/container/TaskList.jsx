import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/Task';


const TaskList = () => {

  const defaultTask = new Task("Example", 'Default description', false, LEVELS.NORMAL);
  
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