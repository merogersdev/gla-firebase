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
import { ItemProvider } from './context/item/ItemContext';
import { AuthProvider } from './context/auth/AuthContext';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ItemProvider>
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
        </ItemProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
