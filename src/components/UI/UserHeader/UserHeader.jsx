import React from "react";
import cl from './UserHeader.module.scss'

const UserListHeader = (props) => {
    return (
        <h2 className={cl.user__header} >{props.name}</h2>
    )
}

export default UserListHeader;