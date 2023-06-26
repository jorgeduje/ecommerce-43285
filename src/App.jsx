import ItemList from "./components/page/itemList/ItemList";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <ItemList />
      </Navbar>
    </div>
  );
}

export default App;
