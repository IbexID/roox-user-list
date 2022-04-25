import React from "react";
import UserInfo from "./UserInfo";

const ShowInfo = (e, userInfo) => {
    let infoTab = e.target.closest('.user__list')
    //infoTab.outerHTML = UserInfo
    console.log(userInfo)
    
    
}

export default ShowInfo;