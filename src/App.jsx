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

const App = () => {
  return (
    <ItemProvider>
      <Header title='Grocery List App' />
      <Main>
        <Container>
          <ItemForm />
          <ItemList />
        </Container>
      </Main>
    </ItemProvider>
  );
};

export default App;
