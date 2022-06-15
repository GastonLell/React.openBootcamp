import React, {useState} from 'react'

function registerForm() {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData)

    return (
        <div>registerForm</div>
    )
}

export default registerForm