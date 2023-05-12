import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm';

import AuthContext from '../../context/auth/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // If no user, redirect to login
  if (user === null) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      <ItemForm />
      <ItemList />
    </>
  );
};

export default Dashboard;
