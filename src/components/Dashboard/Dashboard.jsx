import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Components
import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm';
import Message from '../Message/Message';

// Context and Auth
import { useFirebaseAuthContext } from '../../context/AuthContext';
import getItems from '../../api/itemApi';

// Styles
import './Dashboard.scss';

const Dashboard = () => {
  const { user, logOut } = useFirebaseAuthContext();

  const {
    isLoading,
    error,
    data: items,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  const sortedItems = useMemo(() => {
    return items && items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  // If no user, redirect to login
  if (user === null) {
    return <Navigate to='/' replace />;
  }

  // Display loading message
  if (isLoading) {
    return (
      <div className='login-form__container'>
        <div className='login-form__message'>
          <Message type='info' message='Loading List...' />
        </div>
      </div>
    );
  }
  // If error fetching, display persisting error
  if (error) {
    return <Message type='error' message='Error fetching items' />;
  }

  return (
    <>
      <div className='dashboard'>
        <div className='dashboard__user'>
          <div className='dashboard__greeting'>Hi, {user.displayName}</div>
          <button className='dashboard__button' onClick={() => logOut()}>
            Logout
          </button>
        </div>
      </div>
      <div className='dashboard__container'>
        <ItemForm items={sortedItems} />
        <ItemList items={sortedItems} />
      </div>
    </>
  );
};

export default Dashboard;
