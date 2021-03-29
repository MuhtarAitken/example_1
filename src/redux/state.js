import profileReducer from "./profileReducer";
import dialogsReducer from "./dilogsReducer";
import sideReducer from "./sidbarReducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: " first my  post", likesCount: 12},
                {id: 2, message: "post it-KAmasutra", likesCount: 17},
                {id: 3, message: "post ", likesCount: 17}],
            newPostText: 'it-www'
        },
        dialogsPage: {
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


        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state  changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}






window.store = store;
export default store;