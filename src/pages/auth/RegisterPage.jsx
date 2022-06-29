import React from 'react'
import { Link } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/RegisterFormik'

const RegisterPage = () => {
  return (
    <div>
    <h2>Register Page</h2>

    <RegisterFormik/>
    <Link to="/login">login page</Link>
</div>
  )
}

export default RegisterPage