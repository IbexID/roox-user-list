import React from "react";
import cl from './Button.module.scss'

const Button = (props) => {
    return (
        <button sort={props.sort} onClick={props.onClick} disabled={props.disabled} className={cl.button} onSubmit={props.onSubmit} type={props.type}>{props.name}</button>
    )
}

export default Button;