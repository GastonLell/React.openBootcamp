import React, { useState } from 'react'

function loginForm() {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials)

    return (
        <div>loginForm</div>
    )
}

export default loginForm