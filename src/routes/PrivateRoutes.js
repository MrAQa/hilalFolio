import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoutes({ children }) {
    const userData = localStorage.getItem("user_token");
    const location = useLocation();
    if (userData) {
        return children
    }
    else {
        return <Navigate to="/sign-in" replace state={{ from: location }} />;
    }
}

export default PrivateRoutes