// Components
import Header from "./components/Header/Header";
import ItemForm from "./components/ItemForm/ItemForm";
import ItemList from "./components/ItemList/ItemList";

// Context
import { ItemProvider } from "./context/ItemContext";

const App = () => {
  return (
    <ItemProvider>
      <Header title="Grocery List App" />
      <ItemForm />
      <ItemList />
    </ItemProvider>
  );
};

export default App;
