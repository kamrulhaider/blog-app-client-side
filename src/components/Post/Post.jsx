import React from 'react';
import './Post.css'

const Post = () => {
    return (
        <div className='post'>
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='postImg' />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <br />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quasi aliquid! Culpa, itaque eum consequatur sit pariatur enim debitis illo fugit omnis ipsum ipsa nostrum alias excepturi perspiciatis cum dolorum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quasi aliquid! Culpa, itaque eum consequatur sit pariatur enim debitis illo fugit omnis ipsum ipsa nostrum alias excepturi perspiciatis cum dolorum!
            </p>
        </div>
    );
};

export default Post;