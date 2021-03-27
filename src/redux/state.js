let rerenderEntireTree = () => {
    console.log('state  changed')
}

let state = {
    profilePage: {
        postData:  [
            {id: 1, message: " first my  post", likesCount:12},
            {id: 2, message: "post it-KAmasutra", likesCount:17},
            {id: 3, message: "post ", likesCount:17}],
        newPostText: 'it-www'
       },
    dialogsPage: {
        messages:[
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
}

window.state =state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
     state.profilePage.newPostText = '';
     rerenderEntireTree(state);
}

export const ubdateNewPostText = (newText) => {

    state.profilePage.newPostText =newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree=observer;

}

export default state;