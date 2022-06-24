import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const taskSchema = Yup.object().shape({
    name: Yup.string().min(6, 'Task name too short').max(20, 'Task name soo long').required('Task name is required'),
    description: Yup.string().min(10, 'Description too short').max(50, 'Description soo long').required('Description is required'),
    level: Yup.string().required()
})

const TaskFormik = ({ add }) => {

    const initialValue = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }
    async function addTask(value, isSubmitting) {
        await new Promise((r) => setTimeout(r, 2000))
        const newTask = new Task(
            value.name,
            value.description,
            false,
            value.level,
        )

        add(newTask);
        isSubmitting.resetForm()
        isSubmitting.setSubmitting(false)
    }

    return (

        <div>
            <h4 className='text-center m-4'>New Task</h4>
            <Formik
                initialValues={initialValue}
                validationSchema={taskSchema}
                onSubmit={(value, isSubmitting) => addTask(value, isSubmitting)}
            >
                {
                    ({ errors, touched, isSubmitting }) => (
                        <div className='d-flex justify-content-center align-items-center mb-1'>


                            <Form className='w-75' >
                                <div className='form-outline flex-fill'>
                                    <div className='form-group mb-2'>
                                        <Field type="text" name="name" id='name' className='form-control form-control-lg' placeholder='Task name' />
                                        {
                                            errors.name && touched.name && (
                                                <ErrorMessage name='name' component='div' />
                                            )
                                        }
                                    </div>

                                    <div className='form-group mb-2'>
                                        <Field type="text" name="description" id='description' className='form-control form-control-lg' placeholder='Task description' />
                                        {
                                            errors.description && touched.description && (
                                                <ErrorMessage name='description' component='div' />
                                            )
                                        }
                                    </div>
                                    <label htmlFor="selectLevel" className='sr-only'>Priority</label>
                                    <Field as="select" name='level' id="selectLevel">

                                        <option value={LEVELS.NORMAL}>Normal</option>
                                        <option value={LEVELS.URGENTE}>Urgent</option>
                                        <option value={LEVELS.BLOCKING}>Blocking</option>
                                    </Field>

                                    <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
                                    {
                                        isSubmitting && <p>Sending your task...</p>
                                    }
                                </div>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}

export default TaskFormik