import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import React from 'react';
import './Share.css';

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img src='/assets/person/1.jpeg' alt='' className='shareProfileImg' />
          <input
            type='text'
            className='shareInput'
            placeholder='What are you doing now?'
          />
        </div>
        <hr className='shareHr' />
        <div className='shareButtons'>
          <div className='shareOptions'>
            <Image className='shareIcon' />
            <span className='shareOptionText'>Picture</span>
          </div>
          <div className='shareOptions'>
            <Gif className='shareIcon' />
            <span className='shareOptionText'>GIF</span>
          </div>
          <div className='shareOptions'>
            <Face className='shareIcon' />
            <span className='shareOptionText'>Feeling</span>
          </div>
          <div className='shareOptions'>
            <Analytics className='shareIcon' />
            <span className='shareOptionText'>Vote</span>
          </div>
        </div>
        <button className='shareButton'>Submit</button>
      </div>
    </div>
  );
}
