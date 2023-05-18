import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles/global.scss';

// Components
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';

// Context
import { AuthProvider } from './context/AuthContext';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Tanstack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Header title='Grocery List App' />
          <Main>
            <Container>
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
            </Container>
          </Main>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
