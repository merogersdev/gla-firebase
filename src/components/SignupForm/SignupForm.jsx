import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Toast
import { toast } from 'react-toastify';

// Context
import { useFirebaseAuthContext } from '../../context/AuthContext';

// Icons
import { FaUser } from 'react-icons/fa';

// Styles
import './SignupForm.scss';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signup } = useFirebaseAuthContext();
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
    <div className='signup-form__container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h1 className='signup-form__h1'>Sign Up</h1>
        <label htmlFor='name' className='signup-form__label'>
          <input
            placeholder='Name'
            type='text'
            name='name'
            className='signup-form__input'
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='email' className='signup-form__label'>
          <input
            placeholder='Email'
            type='text'
            name='email'
            className='signup-form__input'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password' className='signup-form__label'>
          <input
            placeholder='Password'
            type='password'
            name='password'
            className='signup-form__input'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className='signup-form__signup-btn'>
          Sign Up
          <FaUser className='signup-form__icon' />
        </button>
        <div className='signup-form__rule'>
          <div className='signup-form__rule-text'>or</div>
        </div>
        <button
          className='signup-form__back-btn'
          type='button'
          onClick={() => navigate(import.meta.env.BASE_URL)}
        >
          Go Back
          <FaArrowLeft className='signup-form__icon' />
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
