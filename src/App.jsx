import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Components
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';

// Context
import { AuthProvider } from './context/AuthContext';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import './styles/global.scss';

// Tanstack Query Client for Items
const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Header title='Grocery List App' />
          <div className='app__main'>
            <Routes>
              <Route path='/' element={<LoginForm />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signup' element={<SignupForm />} />
            </Routes>
            <ToastContainer
              position='top-center'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </div>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
