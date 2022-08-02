import React, { useState, useEffect } from 'react'
import { getAllPagedUser, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({})
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [userPerPage, setUserPerPage] = useState(6);


    const obtainUsers = () => {
        getAllUsers().then(response => {
            setUsers(response.data)
            setPages(response.total_pages)
            setTotalUsers(response.total)
            setUserPerPage(response.per_page)
        }).catch(() => alert('Error while retreiving the users')).finally(() => {
            console.log('Ended obtaing users')
            console.log(users)
        })
    }
    const obtainPagedUsers = (page) => {
        getAllPagedUser(page).then(response => {
            setUsers(response.data)
            setPages(response.total_pages)
            setTotalUsers(response.total)
            setUserPerPage(response.per_page)
        }).catch(() => alert('Error while retreiving the users')).finally(() => {
            console.log('Ended obtaing users')
            console.log(users)
        })
    }
    const obtainUsersById = (id) => {
        getUserDetails(id).then(response => {
            setSelectedUser(response.data)
        }).catch(() => alert('Error while retreiving the user')).finally(() => {
            console.log('Ended obtaing user')
            console.log(users)
        })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka').then(response => {

            console.log('Token', response.token)

            sessionStorage.setItem('Token', response.token)
        }).catch(() => alert('Error while login user')).finally(() => {
            console.log('Ended login user. Navigate to home')
        })
    }
    useEffect(() => {
        obtainUsers()
    }, [])

    return (
        <div>

            <div>
                <button onClick={authUser}>LOGIN</button>
            </div>

            <h2>Users:</h2>

            {
                users.map(user => <p onClick={() => obtainUsersById(user.id)} style={{cursor: 'pointer'}} key={user.id}>{user.first_name}</p>)
            }

            <p>Showing {userPerPage} user of {totalUsers} in total.</p>

            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>


            <div>
                {
                    Object.keys(selectedUser).length ? (<div className="card" style={{width: "18rem"}}>
                        <img src={selectedUser.avatar} className="card-img-top" alt='user' />
                        <div className="card-body">
                            <h5 className="card-title">{selectedUser.first_name} - {selectedUser.last_name}</h5>
                            <p className="card-text">{selectedUser.email}</p>
                            
                        </div>
                    </div>) : ( <p>Please, click on a User to see its details</p> )
                }

            </div>
        </div>
    )
}

export default FetchExample