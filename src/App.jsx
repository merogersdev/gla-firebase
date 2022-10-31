// Styles
import './styles/global.scss';

// Components
import Header from './components/Header/Header';
import ItemForm from './components/ItemForm/ItemForm';
import ItemList from './components/ItemList/ItemList';
import Container from './components/Container/Container';
import Main from './components/Main/Main';

// Context
import { ItemProvider } from './context/ItemContext';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ItemProvider>
      <Header title='Grocery List App' />
      <Main>
        <Container>
          <ItemForm />
          <ItemList />
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
  );
};

export default App;
