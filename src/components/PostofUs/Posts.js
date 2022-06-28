import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/axios.services";
import Post from "./Post";

const Posts = ({status}) => {

    let [post,setPost] = useState([])

    useEffect(()=>{
        getAllPosts().then(value => setPost(value.filter(e => e.userId === status)))
    },[status])

    console.log(post);
    return (
        <div>
            {post.map(post => <Post post={post}/>)}
        </div>
    );
};

export default Posts;