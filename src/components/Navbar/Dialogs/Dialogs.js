import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return(<div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Messages = (props) => {
    return (<div className={s.message}>{props.message}</div>)
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItems name="Dimych" id="1"/>
                <DialogsItems name="Andrei" id="2"/>
                <DialogsItems name="Sveta" id="3"/>
                <DialogsItems name="Sasha" id="4"/>
                <DialogsItems name="Viktor" id="5"/>
                <DialogsItems name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Messages message="hi" />
                <Messages message="how is your it-KAmasutra" />
                <Messages message="hi YOOOO" />
                <Messages message="hi YOOOO" />
                <Messages message="hi YOOOO" />
                <Messages message="hi YOOOO" />
            </div>
        </div>

    )
}
export default Dialogs