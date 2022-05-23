import { MoreVert } from '@mui/icons-material';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Post.css';
// import { Users } from '../../dummyData';
import axios from 'axios';
import { format } from 'timeago.js';
import { AuthContext } from '../../state/AuthContext';

export default function post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || '/assets/person/noAvatar.png'}
                alt=''
                className='postProfileImg'
              />
            </Link>
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
