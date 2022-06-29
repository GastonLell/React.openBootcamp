import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/LoginFormik'

const LoginPage = () => {
  return (
    <div>
        <h2>Login Page</h2>

        <LoginFormik/>
        <Link to="/register">Register page</Link>
    </div>
  )
}

export default LoginPage