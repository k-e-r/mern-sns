import React from 'react';
import Online from '../online/Online';
import './Rightbar.css';
import { Users } from '../../dummyData';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='eventContainer'>
          <img src='/assets/star.png' alt='' className='starImg' />
          <span className='eventText'>Event holding!</span>
        </div>
        <img src='/assets/event.jpeg' alt='' className='eventImg' />
        <h4 className='rightbarTitle'>online friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>from:</span>
            <span className='rightbarInfoKey'>Fukuoka</span>
          </div>
          <h4 className='rightbarTitle'>Your friends</h4>
          <div className='rightbarFollowings'>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/1.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>Shin</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/2.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>Tanaka</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/3.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>Yamaki</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/4.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>John</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
