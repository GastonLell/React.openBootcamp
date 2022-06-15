import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

function TaskForm({ add }) {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef('')

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        )
        add(newTask);
        
        nameRef.current.value = ''
        descriptionRef.current.value = ''
        levelRef.current.value = LEVELS.NORMAL
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4' >
            <div className='form-outline flex-fill'>
                <input type="text" ref={nameRef} id='inputName' className='form-control form-control-lg' placeholder='Task name' required autoFocus />
                <input type="text" ref={descriptionRef} id='inputDescription' className='form-control form-control-lg' placeholder='Task description' required />

                <label htmlFor="selectLevel" className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">

                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENTE}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>

                <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
            </div>

        </form>
    )
}

TaskForm.prototype = {
    add: PropTypes.func.isRequired
}

export default TaskForm