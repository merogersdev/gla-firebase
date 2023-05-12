import React, { useState, useContext } from 'react';

// Toast
import { toast } from 'react-toastify';

import './SignupForm.scss';
import AuthContext from '../../context/auth/AuthContext';

import { FaGoogle, FaUser } from 'react-icons/fa';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { user, login, loginWithGoogle } = useContext(AuthContext);

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

    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label htmlFor='name' className='login-form__label'>
        <input
          placeholder='Name'
          type='text'
          name='name'
          className='login-form__input'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='email' className='login-form__label'>
        <input
          placeholder='Email'
          type='text'
          name='email'
          className='login-form__input'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='password' className='login-form__label'>
        <input
          placeholder='Password'
          type='password'
          name='password'
          className='login-form__input'
          onChange={handleChange}
        />
      </label>
      <button type='submit' className='button button--stretch'>
        Sign Up
        <FaUser className='button--icon' />
      </button>
    </form>
  );
};

export default SignupForm;
