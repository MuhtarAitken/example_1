import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div>
                My posts
                <div>
                    <textarea name="a" id="a" cols="16" rows="8"></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.myPosts}>
                  <div>
                      <Posts message='hi TOM '  name="Comp" />
                      <Posts message='hi, how  are yoy' country="AStana" />
                      <Posts message2="its my first message" />
                      <Posts />
                  </div>
                </div>
            </div>
        </div>);
}
export default MyPosts;