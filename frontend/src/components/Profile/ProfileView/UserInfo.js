import React from 'react'

function UserInfo () {
    dispatch(userInfoStart());
    const response = await fetch(`/api/user/updateInfo/${currentUser._id}`);
    const data = await response.json();
    if (data.success === false) {
        dispatch(userInfoFailure(data.message));
        return;
    }
    dispatch(userInfoSuccess(data));
    return response.json();
}

export default UserInfo
