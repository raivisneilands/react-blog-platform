import React from "react";
import "./Posts.css";
import Post from "./Post"

function Posts(){
    return (
        <div className="posts">
            <h2>Your Latest Posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;