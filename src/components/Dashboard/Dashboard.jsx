import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm';

import { useFirebaseAuthContext } from '../../context/AuthContext';

import './Dashboard.scss';

const Dashboard = () => {
  const { user, logOut } = useFirebaseAuthContext();

  // If no user, redirect to login
  if (user === null) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <div className='dashboard'>
        <div>Hi, {user.displayName}</div>
        <button
          className='button button--secondary button--mini'
          onClick={() => logOut()}
        >
          Logout
        </button>
      </div>
      {/* <ItemForm />
      <ItemList /> */}
      <ItemList />
    </>
  );
};

export default Dashboard;
