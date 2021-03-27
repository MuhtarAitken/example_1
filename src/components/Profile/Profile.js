import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ubdateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     ubdateNewPostText = {props.ubdateNewPostText}
                     addPost={props.addPost}
                      />
        </div>);
}
export default Profile;