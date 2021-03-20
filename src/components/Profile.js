import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
                <div className={classes.item}>
                    <h3>My posts</h3>
                </div>
                <div className={classes.item}>
                    New post
                </div>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 1
                </div>
        </div>);
}
export default Profile;