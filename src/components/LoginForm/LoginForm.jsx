import React, { useState } from 'react';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Toast
import { toast } from 'react-toastify';

// Context
import { useFirebaseAuthContext } from '../../context/AuthContext';

// Components
import Spinner from '../Spinner/Spinner';

// Styles
import './LoginForm.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn, authLoading, signInWithGoogle } = useFirebaseAuthContext();

  const navigate = useNavigate();

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

    try {
      const result = await logIn(email, password);
      navigate(`${import.meta.env.BASE_URL}/dashboard`);
    } catch (error) {
      // User-readable error message to user
      switch (error.message) {
        case 'FirebaseError: Firebase: Error (auth/wrong-password)':
          toast.error('Wrong Credentails');
          break;
        case 'Firebase: Error (auth/user-not-found).':
          toast.error('User not found');
          break;
        default:
          toast.error('An Unexpected Error Occured');
          console.log(error.message);
          break;
      }
    }
  };

  if (authLoading)
    return (
      <div className='login-form__container'>
        <div className='login-form__spinner'>
          <Spinner />
        </div>
      </div>
    );

  return (
    <div className='login-form__container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1 className='login-form__h1'>Login</h1>
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

        <button type='submit' className='login-form__email-btn'>
          Login with Email
          <FaUser className='login-form__icon' />
        </button>

        <div className='login-form__rule'>
          <div className='login-form__rule-text'>or</div>
        </div>
        <button
          className='login-form__google-btn'
          type='button'
          onClick={() => signInWithGoogle()}
        >
          Login with Google
          <FaGoogle className='login-form__icon' />
        </button>
        <div className='login-form__center'>
          <p>
            Not a user?
            <span
              className='login-form__signup'
              onClick={() => navigate(`${import.meta.env.BASE_URL}/signup`)}
            >
              Sign Up
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
