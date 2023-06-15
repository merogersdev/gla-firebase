import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Components
import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';

// Context and Auth
import { useFirebaseAuthContext } from '../../context/AuthContext';
import getItems from '../../api/itemApi';

// Styles
import './Dashboard.scss';

const Dashboard = () => {
  const { user } = useFirebaseAuthContext();

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

  // Display loading spinner
  if (isLoading) {
    return (
      <div className='dashboard__container'>
        <div className='dashboard__spinner'>
          <Spinner />
        </div>
      </div>
    );
  }
  // If error fetching, display persisting error
  if (error) {
    return (
      <div className='dashboard__container'>
        <div className='dashboard__message'>
          <Message type='error' message='Error fetching items' />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='dashboard'>
        <div className='dashboard__header'>
          <div className='dashboard__container'>
            <ItemForm items={sortedItems} />
          </div>
        </div>
      </div>
      <div className='dashboard__container'>
        <ItemList items={sortedItems} />
      </div>
    </>
  );
};

export default Dashboard;
