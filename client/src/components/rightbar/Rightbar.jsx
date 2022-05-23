import React from 'react';
import './Rightbar.css';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='eventContainer'>
          <img src='/assets/star.png' alt='' className='starImg' />
          <span className='eventText'>Event holding!</span>
        </div>
        <img src='/assets/event.jpeg' alt='' />
        <h4 className='rightbarTitle'>online friends</h4>
        <ul className='rightbarFriend'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='/assets/person/1.jpeg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Shin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
