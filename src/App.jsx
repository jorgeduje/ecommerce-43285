import Navbar from "./components/layout/navbar/Navbar";
import FetchingData from "./components/page/fetchingData/FetchingData";
import ItemListContainer from "./components/page/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar>
        {/* <ItemListContainer /> */}
        <FetchingData />
      </Navbar>
    </div>
  );
}

export default App;
