import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Posts message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});


    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }


    return (
        <div className={s.postBlock}>
            <div>
                <h4>My posts</h4>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Ad d post</button>
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