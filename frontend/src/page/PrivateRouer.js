import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

function PrivateRouer() {

    const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRouer
