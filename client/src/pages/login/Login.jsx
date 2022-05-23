import React, { useRef } from 'react';
import './Login.css';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Real SNS</h3>
          <span className='loginDesc'>making SNS</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
            <p className='loginMsg'>Login here</p>
            <input
              type='email'
              className='loginInput'
              placeholder='email'
              required
              ref={email}
            />
            <input
              type='password'
              className='loginInput'
              placeholder='password'
              minLength='6'
              required
              ref={password}
            />
            <button className='loginButton'>Login</button>
            <span className='loginForgot'>Do you forget your password?</span>
            <button className='loginRegisterButton'>create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
