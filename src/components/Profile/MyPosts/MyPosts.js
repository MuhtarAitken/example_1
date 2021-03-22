import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Posts message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let Text = newPostElement.current.value;
        props.addPost(Text);
        newPostElement.current.value='';

    };


    return (
        <div className={s.postBlock}>
            <div>
                <h4>My posts</h4>
                <div>
                    <div>
                        <textarea cols="16" rows="2" ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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