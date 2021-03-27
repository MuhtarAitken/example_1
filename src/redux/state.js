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
            ]
        }
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


    dispatch (action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type ==='UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}


window.store = store;
export default store;