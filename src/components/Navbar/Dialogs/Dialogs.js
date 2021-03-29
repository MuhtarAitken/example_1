import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {sendMessageCreator, ubdateNewMessageBodyCreator} from "../../../redux/dilogsReducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
        props.store.dispatch(ubdateNewMessageBodyCreator(body))

    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>


                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder='Enter ypur message'
                        onChange={onNewMessageChange}></textarea></div>
                    <div> <button onClick={onSendMessageClick}>Send</button></div>

                </div>
            </div>
        </div>

    )
}

export default Dialogs