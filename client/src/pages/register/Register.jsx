import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value === passwordConfirmation.current.value) {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
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
            <p className='loginMsg'>Register here</p>
            <input
              type='text'
              className='loginInput'
              placeholder='user name'
              required
              ref={username}
            />
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
            <input
              type='password'
              className='loginInput'
              placeholder='verify password'
              minLength='6'
              required
              ref={passwordConfirmation}
            />
            <button className='loginButton' type='submit'>
              Signup
            </button>
            <button className='loginRegisterButton'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
