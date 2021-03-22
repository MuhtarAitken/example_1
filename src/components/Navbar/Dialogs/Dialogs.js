import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs