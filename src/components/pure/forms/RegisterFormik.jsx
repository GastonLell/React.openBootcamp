import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { user } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum'

const validationSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(4, 'Username too short.')
            .max(12, 'Username too long.')
            .required('Username is required.'),
        email: Yup.string()
            .email('Invalid email format.').
            required('Email is required.'),
        password: Yup.string().required('Password is required'),
        confirm: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Passwords must match!'
                )
            }).required('You must confirm the password'),
        rol: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN, 'You must select a Role: User / Admin'])
                .required('Rol is required.'),
    }
)

const RegisterFormik = () => {
    // let user = new user();
    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        rol: ROLES.USER
    }
    return (
        <div className='container mt-5'>
            <h4>Register Formik</h4>

            <Formik
                initialValues={
                    initialValues
                }
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {
                    ({ values, touched, errors, isSubmitting }) => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor='username' className="form-label">Nombre de usuario</label>
                                <Field type="text" className="form-control" name="username" id="username" aria-describedby="username" placeholder="Insert your username" />
                                {
                                    errors.username && touched.username && (
                                        <ErrorMessage name='username' component="div" />
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor='email' className="form-label">Email</label>
                                <Field type="email" className="form-control" name="email" id="email" aria-describedby="email" placeholder="example@email.com" />
                                {
                                    errors.email && touched.email && (
                                        <ErrorMessage name='email' component="div" />
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor='password' className="form-label">Password</label>
                                <Field type="password" className="form-control" name="password" id="password" aria-describedby="password" placeholder="Insert your password" />
                                {
                                    errors.password && touched.password && (
                                        <ErrorMessage name='password' component="div" />
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor='confirm' className="form-label">Confirme su password</label>
                                <Field type="password" className="form-control" name="confirm" id="confirm" aria-describedby="confirm" placeholder="Confirm your password" />
                                {
                                    errors.confirm && touched.confirm && (
                                        <ErrorMessage name='confirm' component="div" />
                                    )
                                }

                            </div>
                            <button className='btn btn-primary' type='submit'>Register account</button>
                            {
                                isSubmitting && <p>Sending your credentials...</p>
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default RegisterFormik