import React, { useState, useContext } from 'react';

// Toast
import { toast } from 'react-toastify';

import './LoginForm.scss';
import AuthContext from '../../context/auth/AuthContext';

import { FaGoogle, FaUser } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, login, loginWithGoogle } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length < 6 || !email.includes('@')) {
      toast.error('Must provide a valid email address');
      return;
    }

    if (password.length === 0) {
      toast.error('Must provide a password');
      return;
    }

    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label htmlFor='email' className='login-form__label'>
        <input
          placeholder='Email'
          type='text'
          name='email'
          className='login-form__input'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor='password' className='login-form__label'>
        <input
          placeholder='Password'
          type='password'
          name='password'
          className='login-form__input'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit' className='button button--stretch'>
        Login
        <FaUser className='button--icon' />
      </button>
      <button type='submit' className='button button--stretch button--login'>
        Login with Google
        <FaGoogle className='button--icon' />
      </button>
    </form>
  );
};

export default LoginForm;
