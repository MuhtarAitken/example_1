import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p=> <Posts message={p.message}  like={p.likesCount} />)

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
                      {postsElement}
                  </div>
                </div>
            </div>
        </div>);
}
export default MyPosts;