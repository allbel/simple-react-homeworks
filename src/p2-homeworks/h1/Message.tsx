import React from 'react'
import css from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={css.message}>
            <div className={css.avatar}>
                <img src={props.avatar} alt={props.name}/>
            </div>
            <div className={css.textBox}>
                <div className={css.name}>{props.name}</div>
                <div className={css.text}>{props.message}</div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
