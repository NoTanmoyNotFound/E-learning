import React from 'react'
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";
function Signinprotact() {

    const { currentUser, loading, error } = useSelector((state) => state.user);
  return currentUser === null ? <Outlet /> :  <Navigate to="/" />;
}

export default Signinprotact
