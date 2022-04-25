import React from "react";
import UserItem from './UserItem'
import sortUsers from "./sortUsers";

const UserList = ({lists, sort, method}) => {
    
    if (sort){
        lists = sortUsers(lists, method)
    }
    
    return (
            <div className="user__list-container" >
                
                { 
                lists
                .map( (item, index) => {
                    return(
                            <UserItem lists={item} key={index} />
                        
                    )
                })} 
                
            </div>
    )
}

export default UserList;