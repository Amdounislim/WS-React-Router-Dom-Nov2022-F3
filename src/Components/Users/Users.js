import React from 'react'
import User from '../User/User'
import './Users.css'

const Users = ({ persons }) => {
    return (
        <div>
            <h1>Welcome, this is the Users List Page</h1>
            <div className="usersList">
                {persons.map((el, i) => <User user={el} key={i} />)}
            </div>
        </div>
    )
}

export default Users