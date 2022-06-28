import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div> Id: {post.id}</div>
            <div> Title :{post.title}</div>
            <hr/>
        </div>
    );
};

export default Post;