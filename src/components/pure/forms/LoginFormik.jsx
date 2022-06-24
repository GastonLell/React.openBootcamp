import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email().required(),
        password: Yup.string().required()
    }
)

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div className='container'>
            <h4>Login Formik</h4>
            <Formik
                // configuracion

                /* valores iniciales */
                initialValues={
                    initialCredentials
                }
                /* validacion con yup */
                validationSchema={loginSchema}
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 2000))
                        alert(JSON.stringify(values, null, 2))
                        localStorage.setItem('credentials', values)
                    }
                }
            >
                {
                    ({ isSubmitting, handleChange, handleBlur }) => {
                        return (
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor='email' className="form-label">Email</label>
                                    <Field type="email" className="form-control" name="email" id="email" aria-describedby="email" placeholder="example@email.com" />
                                    <ErrorMessage name='email' component="div" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='password' className="form-label">Email</label>
                                    <Field type="password" className="form-control" name="password" id="password" aria-describedby="password" placeholder="Ingrese password" />
                                    <ErrorMessage name='password' component="div" />
                                </div>

                                <button className='btn btn-primary' type='submit'>Enviar</button>
                                {
                                    isSubmitting && <p>Login your credentials...</p>
                                }
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginFormik