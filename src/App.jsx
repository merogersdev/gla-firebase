// Components
import Header from "./components/Header/Header";
import ItemForm from "./components/ItemForm/ItemForm";
import ItemList from "./components/ItemList/ItemList";

const App = () => {
  return (
    <>
      <Header title="Grocery List App" />
      <ItemForm />
      <ItemList />
    </>
  );
};

export default App;
