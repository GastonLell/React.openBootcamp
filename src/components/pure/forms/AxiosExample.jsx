import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomUser } from '../../../services/axiosService'

const AxiosExample = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     getUser();
    // }, [])
    const getUser = () => {
        getRandomUser().then(resp => {
            if (resp.status === 200) {
                setUser(resp.data.results[0])
                console.log(user)
            }
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Axios example</h2>
            {
                user != null 
                ? (
                    <div>
                        <img src={user?.picture?.medium} alt="User" />
                        <h2>{user?.name.first}</h2>
                        {/* <h2>{user?.email}</h2> */}

                    </div>
                ) 
                : (<div>
                    <h3>Obtener nuevo usuario</h3>
                    <button onClick={getUser}>Random user</button>
                </div>)
            }
        </div>
    )
}

export default AxiosExample