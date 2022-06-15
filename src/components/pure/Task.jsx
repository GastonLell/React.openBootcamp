import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove}) => {

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENTE:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
    }

    function taskIconCompleted() {
        return task.completed
            ? (<i onClick={() => complete(task)} className='bi-toggle-on' style={{ color: 'green' }}></i>)
            : (<i onClick={() => complete(task)} className='bi-toggle-off' style={{ color: 'grey' }}></i>)
    }
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {
                    taskIconCompleted()
                }
                <i className='bi-trash' onClick={() => remove(task)} style={{ color: 'tomato', fontWeight: 'bold' }}></i>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent;