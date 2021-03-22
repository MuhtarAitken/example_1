import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>);

    let newMessageElement = React.createRef();

    let addPost = () => {
        let Text = newMessageElement.current.value;
        alert(Text)
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addPost}>add Post</button>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs