import React from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    return (
        <div className='posts col-md-6'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Posts;