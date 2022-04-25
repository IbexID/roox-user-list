import React from "react";
import UserList from "./UserList";

const UserFilter = ({lists, sort, setSort}) => {
    return (
            <div className="user__list-container">
                { 
                lists.map( (list, index) => {
                    return(
                            <UserItem lists={list} key={index} />
                        
                    )
                })} 
                
            </div>
    )
}

export default UserFilter;