import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
      </Navbar>
    </div>
  );
}

export default App;
