import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Real SNS</h3>
          <span className='loginDesc'>making SNS</span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <p className='loginMsg'>Register here</p>
            <input type='text' className='loginInput' placeholder='user name' />
            <input type='text' className='loginInput' placeholder='email' />
            <input type='text' className='loginInput' placeholder='password' />
            <input
              type='text'
              className='loginInput'
              placeholder='verify password'
            />
            <button className='loginButton'>Signup</button>
            <button className='loginRegisterButton'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
