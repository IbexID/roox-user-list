import React, { useState } from "react";
import cl from './UserInfo.module.scss'
import UserHeader from './UI/UserHeader/UserHeader'
import Button from "./UI/button/Button";

const UserInfo = ({list}) => {
    const [edit, setEdit] = useState(true)
    
    
    const [name, setName] = useState(list.name)
    const [nameError, setNameError] = useState('')

    const [username, setUsername] = useState(list.username)
    const [usernameError, setUsernameError] = useState('')

    const [email, setEmail] = useState(list.email)
    const [emailError, setEmailError] = useState('')

    const [street, setStreet] = useState(list.address.street)
    const [streetError, setStreetError] = useState('')

    const [city, setCity] = useState(list.address.city)
    const [cityError, setCityError] = useState('')

    const [zip, setZip] = useState(list.address.zipcode)
    const [zipError, setZipError] = useState('')

    const [phone, setPhone] = useState(list.phone)
    const [phoneError, setPhoneError] = useState('')

    const [website, setWebsite] = useState(list.website)
    const [websiteError, setWebsiteError] = useState('')
    const errors = [websiteError, phoneError, zipError, cityError, streetError, emailError, usernameError, nameError]
    const errColor = '1px solid rgba(217, 19, 19, 1)'
    const normColor = '1px solid rgba(216, 216, 216, 1)'

    const userHandler = (e) =>{
        setName(e.target.value)
        const re = /^([A-Za-z])+(\s)*([A-Za-z])*$/g
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setNameError('Некорретное имя')
            e.target.style.border = errColor

        } else {
            setNameError('')
            e.target.style.border = normColor
        }
    }
    const usernameHandler = (e) =>{
        setUsername(e.target.value)
        const re = /(\w)+/g
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setUsernameError('Некорретный user name')
            e.target.style.border = errColor

        } else {
            setUsernameError('')
            e.target.style.border = normColor
        }
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
        const  re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setEmailError('Некорретный email')
            e.target.style.border = errColor
        } else {
            setEmailError('')
            e.target.style.border = normColor
        }
    }
    const streetHandler = (e) =>{
        setStreet(e.target.value)
        const re = /^(\w)+(\s)*(\w)*(\s)*(\w)*$/g
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setStreetError('Некорретное название улицы')
            e.target.style.border = errColor

        } else {
            setStreetError('')
            e.target.style.border = normColor
        }
    }
    const cityHandler = (e) =>{
        setCity(e.target.value)
        const re = /^([A-Za-z])+(\s)*([A-Za-z])*$/g
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setCityError('Некорретное название города')
            e.target.style.border = errColor

        } else {
            setCityError('')
            e.target.style.border = normColor
        }
    }
    const zipHandler = (e) =>{
        setZip(e.target.value)
        const re = /^[0-9-]*$/g
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setZipError('Некорретный zip code')
            e.target.style.border = errColor

        } else {
            setZipError('')
            e.target.style.border = normColor
        }
    }
    const phoneHandler = (e) =>{
        setPhone(e.target.value)
        const re = /^(\d)?\D*?(\d{3})\D*(\d{3})\D*(\d{4})\D*(\d{0,6})/
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setPhoneError('Некорретный номер телефона')
            e.target.style.border = errColor
        } else {
            setPhoneError('')
            e.target.style.border = normColor
        }
    }
    const websiteHandler = (e) =>{
        setWebsite(e.target.value)
        const re = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
        if (!re.test(String(e.target.value).toLowerCase()) || !e.target.value){
            setWebsiteError('Некорретный адрес вебсайта')
            e.target.style.border = errColor

        } else {
            setWebsiteError('')
            e.target.style.border = normColor
        }
        isValid()
    }
    const isValid = () =>{
        return errors.join('').length===0
    }
    const handleSubmit = (e) =>{
        const user = 
        {'name': document.getElementById('userName').value,
        'username': document.getElementById('userUsername').value,
        'email': document.getElementById('userEmail').value,
        'street': document.getElementById('userStreet').value,
        'city': document.getElementById('userCity').value,
        'zip': document.getElementById('userZip').value,
        'phone': document.getElementById('userPhone').value,
        'website': document.getElementById('userWebsite').value,
        'comment': document.getElementById('userComment').value
    }
        console.log(JSON.stringify(user))
    }
    
    return (
        <div className={cl.user__info}>
            <div className={cl.user__top}>
                <UserHeader name='Профиль пользователя' />
                <Button name={'Редактировать'} onClick={ () => {edit ? setEdit(false) : setEdit(true)}} />
            </div>
            <form className={cl.user__form} onSubmit={(e) => e.preventDefault() }>
                <div className={cl.user__fields}>
                    <label className={cl.user__label} htmlFor='userName'>Name</label>
                    <input   onChange={(e) => {userHandler(e)}} disabled={edit} value={name} className={cl.user__input} type="text" id='userName' />
                    
                    <label className={cl.user__label} htmlFor='userUsername'>User name</label>
                    <input   onChange={(e) => {usernameHandler(e)}} disabled={edit} value={username} className={cl.user__input} type="text" id='userUsername'/>
                    
                    <label className={cl.user__label} htmlFor='userEmail'>E-mail</label>
                    <input   onChange={(e) => { emailHandler(e)}} disabled={edit} value={email} className={cl.user__input} type="text" id='userEmail' />
                    
                    <label className={cl.user__label} htmlFor='userStreet'>Street</label>
                    <input   onChange={(e) => {streetHandler(e)}} disabled={edit} value={street} className={cl.user__input} type="text" id='userStreet' />
                    
                    <label className={cl.user__label} htmlFor='userCity'>City</label>
                    <input   onChange={(e) => {cityHandler(e)}} disabled={edit} value={city} className={cl.user__input} type="text" id='userCity' />
                    
                    <label className={cl.user__label} htmlFor='userZip'>Zip code</label>
                    <input   onChange={(e) => {zipHandler(e)}} disabled={edit} value={zip} className={cl.user__input} type="text" id='userZip' />
                    
                    <label className={cl.user__label} htmlFor='userPhone'>Phone</label>
                    <input   onChange={(e) => {phoneHandler(e)}} disabled={edit} value={phone} className={cl.user__input} type="phone" id="userPhone" />
                    
                    <label className={cl.user__label} htmlFor='userWebsite'>Website</label>
                    <input   onChange={(e) => {websiteHandler(e)}} disabled={edit} value={website} className={cl.user__input} type="text" id='userWebsite' />
                    
                    <label className={cl.user__label} htmlFor='userComment'>Comment </label>
                    <textarea className={cl.user__input} id='userComment' />
                </div>
            <div className={cl.user__button}>
                <Button onClick={(e)=>{ 
                    if(isValid()){
                     handleSubmit(e)
                    } else {
                        console.log('Form is not valid')
                    }
                }
                    } className='green__button' disabled={edit} name={'Отправить'} type='submit'  />
                </div></form>
        </div>
    )
}

export default UserInfo;