import { MoreVert } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

import './Post.css';
// import { Users } from '../../dummyData';
import axios from 'axios';
import { format } from 'timeago.js';

export default function post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={user.profilePicture || '/assets/person/noAvatar.png'}
              alt=''
              className='postProfileImg'
            />
            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={post.img} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src='/assets/heart.png'
              alt=''
              className='likeIcon'
              onClick={() => handleLike()}
            />
            <span className='postLikeCounter'>
              {like} people like this article
            </span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment}:comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
