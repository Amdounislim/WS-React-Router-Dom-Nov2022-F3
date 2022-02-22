import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: RoutComponent, isAuth }) => {

    if (!isAuth) {
        // return <Redirect to='/' />
        return <Navigate to='/' />
    }
    return (
        <div>
            <RoutComponent />
        </div>
    )
}

export default PrivateRoute