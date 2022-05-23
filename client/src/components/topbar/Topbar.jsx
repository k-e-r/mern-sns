import { Search, Chat, Notifications } from '@mui/icons-material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import './Topbar.css';

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>SNS</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            type='text'
            className='searchInput'
            placeholder='Please enter keyword'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarItemIcons'>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? user.profilePicture
                  : '/assets/person/noAvatar.png'
              }
              alt=''
              className='topbarImg'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
