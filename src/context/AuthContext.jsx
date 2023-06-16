import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase Auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// Firebase Config
import { auth, googleProvider } from '../config/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const navigate = useNavigate();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      // If user present, redirect to dashboard - session persistence
      if (auth !== null) {
        navigate('/dashboard');
      }
      setAuthLoading(false);
    });

    // Auth Cleanup
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authLoading, logIn, signUp, logOut, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useFirebaseAuthContext() {
  return useContext(AuthContext);
}
