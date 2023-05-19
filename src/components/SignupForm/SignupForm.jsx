import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Toast
import { toast } from 'react-toastify';

import './SignupForm.scss';
import { useFirebaseAuthContext } from '../../context/AuthContext';

import { FaGoogle, FaUser } from 'react-icons/fa';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, signup } = useFirebaseAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0) {
      toast.error('Must provide a name');
      return;
    }

    if (email.length < 6 || !email.includes('@')) {
      toast.error('Must provide a valid email address');
      return;
    }

    if (password.length === 0) {
      toast.error('Must provide a password');
      return;
    }

    await signup(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label htmlFor='name' className='login-form__label'>
        <input
          placeholder='Name'
          type='text'
          name='name'
          className='login-form__input'
          onChange={(e) => setName(e.target.value)}
        />
      </label>
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
        Sign Up
        <FaUser className='button--icon' />
      </button>
      <div className='signup-form__rule'></div>
      <button
        className='button button--stretch button--secondary-outline'
        type='button'
        onClick={() => navigate('/')}
      >
        Back
        <FaArrowLeft className='button--icon' />
      </button>
    </form>
  );
};

export default SignupForm;
