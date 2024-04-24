import React from 'react'
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";


function SuperPrivateRoute() {

    const { currentUser, loading, error } = useSelector((state) => state.user);
    console.log(currentUser);
    return currentUser && currentUser.role === 'super_admin' ? <Outlet /> :  <Navigate to="/" />;

}

export default SuperPrivateRoute
