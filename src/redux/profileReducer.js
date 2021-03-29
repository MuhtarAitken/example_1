const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialSate = {
    postData: [
        {id: 1, message: " first my  post", likesCount: 12},
        {id: 2, message: "post it-KAmasutra", likesCount: 17},
        {id: 3, message: "post ", likesCount: 17}],
    newPostText: 'it-www'
}

const profileReducer = (state =initialSate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

}
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const ubdateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export default profileReducer;