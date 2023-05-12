import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase Auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

// Firebase Config
import { db, auth, googleProvider } from '../../config/firebase';

// Auth Reducer
import AuthReducer, { INITIAL_AUTH_STATE, ACTIONS } from './AuthReducer';

// Main Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_AUTH_STATE);

  const navigate = useNavigate();

  // Sign up with Email/Password
  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({
        type: ACTIONS.LOGIN,
        payload: response.user,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Login with Email/Password
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      dispatch({
        type: ACTIONS.LOGIN,
        payload: response.user,
      });
      navigate('/dashboard');
    } catch (error) {
      dispatch({
        type: ACTIONS.LOGIN_FAIL,
      });
      console.error(error.message);
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      dispatch({
        type: ACTIONS.LOGIN_FAIL,
      });
      console.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      dispatch({
        type: ACTIONS.LOGOUT_FAIL,
      });
      console.error(error.message);
    }
  };

  // // GET items
  // const getItems = async () => {
  //   try {
  //     const data = await getDocs(collection(db, "items"));
  //     const itemList = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     dispatch({ type: ACTIONS.GET_ITEMS, payload: itemList });
  //   } catch (error) {
  //     dispatch({
  //       type: ACTIONS.GET_FAIL,
  //     });
  //     console.error(error.message);
  //   }
  // };

  // Return State items individually, with functions
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        loginWithGoogle,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
