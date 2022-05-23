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
        <img src='/assets/event.jpeg' alt='' className='eventImg' />
        <h4 className='rightbarTitle'>online friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/1.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Shin</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/2.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Tanaka</span>
          </li>
        </ul>
        <p className='promotionTitle'>promotion</p>
        <img
          src='/assets/promotion/promotion1.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>shopping</p>
        <img
          src='/assets/promotion/promotion2.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>car shop</p>
        <img
          src='/assets/promotion/promotion3.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>company</p>
      </div>
    </div>
  );
}
