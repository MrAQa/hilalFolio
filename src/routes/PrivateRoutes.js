import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
    const userData = JSON.parse(localStorage.getItem("user_token"));
    
    if (userData) {
        return children
    }
    else {
        return <Navigate to={"/sign-in"} />
    }
}

export default PrivateRoutes