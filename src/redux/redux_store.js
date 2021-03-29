import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dilogsReducer";
import sideReducer from "./sidbarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer ,
    sidebar: sideReducer,
})


let store = createStore(reducers);


export default store;