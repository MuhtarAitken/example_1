const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialSate = {
    messages: [
        {id: 1, message: " hi Dimych"},
        {id: 2, message: "how is your it-KAmasutra"},
        {id: 3, message: "how are is your? "},
        {id: 4, message: "how are is your? Sasha"},
        {id: 5, message: "how are is your? Viktor"},
        {id: 5, message: "how are is your? Valera"}
    ],
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 5, name: "Valera"}
    ],
    newMessageBody: ""
}



export const dialogsReducer = (state = initialSate, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body});

    }

    return state;
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export const ubdateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;