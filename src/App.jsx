// Components
import Header from "./components/Header/Header";
import ItemForm from "./components/ItemForm/ItemForm";
import ItemList from "./components/ItemList/ItemList";

// Context
import { ItemProvider } from "./context/ItemContext";
import { LoadingProvider } from "./context/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
      <ItemProvider>
        <Header title="Grocery List App" />
        <ItemForm />
        <ItemList />
      </ItemProvider>
    </LoadingProvider>
  );
};

export default App;
