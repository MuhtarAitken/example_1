import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <div>
               <h4>My posts</h4>
                <div>
                    <div>
                        <textarea cols="16" rows="2"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.myPosts}>
                  <div>
                      <Posts message='hi TOM '  like='0' />
                      <Posts message='hi Roma '  like='1' />
                      <Posts  message='hi TOMas '  like='25'/>
                      <Posts message='hi Jone '  like='4'/>
                  </div>
                </div>
            </div>
        </div>);
}
export default MyPosts;