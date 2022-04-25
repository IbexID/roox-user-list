import React, { useState } from "react";
import cl from './UserItem.module.scss'
import UserInfo from "./UserInfo";

const UserItem = ({lists}) => {

    const [info, setInfo] = useState(false)
    const hideInfo = (e) => {
        setInfo(true);
        document.querySelector('h2').style.display = 'none'; 
        const current = e.target.closest("[class^=UserItem_user__item]")
        let items = document.querySelectorAll("[class^=UserItem_user__item]")
        items.forEach( item => {
            if (item!==current){
                item.hidden= true
            }
        })
    }
    
    return (
        <div className={cl.user__item} >
            {info
            ?   <UserInfo list={lists} />
            :   <div className={cl.user__entries}>
                    <div className={cl.user__cred}>
                    <div className={cl.user__entry}>
                        <span className={cl.user__key}>ФИО:</span>
                        {lists.name}
                    </div>
                    <div className={cl.user__entry}>
                        <span className={cl.user__key}>город:</span>
                        {lists.address.city}
                    </div>
                    <div className={cl.user__entry}>
                        <span className={cl.user__key}>компания:</span>
                        {lists.company.name}
                    </div>
                    </div>
                    <div className={cl.user__link} onClick={ (e) => { hideInfo(e)}}>Подробнее</div>
                </div>
            }
        </div>
    )
}

export default UserItem;