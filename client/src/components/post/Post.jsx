import { MoreVert } from '@mui/icons-material';
import React from 'react';
import './Post.css';

export default function post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <img src='/assets/person/1.jpeg' alt='' className='postProfileImg' />
          <span className='postUsername'>Shin</span>
          <span className='postDate'>5 min ago</span>
        </div>
        <div className='postRight'>
          <MoreVert />
        </div>
        <div className='postCenter'>
          <span className='postText'>making SNS</span>
          <img src='/assets/post/1.jpeg' alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='/assets/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>5 people like this article</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>4:comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
