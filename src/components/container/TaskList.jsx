import React, { useState } from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/TaskForm';
import TaskFormik from '../pure/forms/TaskFormik';
import TaskComponent from '../pure/Task';


const TaskList = () => {

  const defaultTask1 = new Task("Example1", 'Default description 1', false, LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2", 'Default description 2', false, LEVELS.BLOCKING);
  const defaultTask3 = new Task("Example3", 'Default description 3', false, LEVELS.URGENTE);
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])

  function completTask (task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks)
  }

  function removeTask (task){
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks)
  }

  function add(task) {
    const tempTasks = [...tasks, task];
    setTasks(tempTasks)
  }


  return (
    <div>
      <div className='col-12'>

        <div className='card'>
          {/* card header (title) */}
          <div className='card-header p-3'>
            <h5>Your Tasks</h5>
          </div>
          {/* card body (content) */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', heigth: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map((task, index) => <TaskComponent task={task} key={index} complete={completTask} remove={removeTask} />)
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <TaskFormik add={add}/>
    </div>
  )
}

export default TaskList;