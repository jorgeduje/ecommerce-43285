import Navbar from "./components/layout/navbar/Navbar";
import FetchingDB from "./components/page/FetchingDB/FetchingDB";
import FetchingData from "./components/page/fetchingData/FetchingData";
import ItemListContainer from "./components/page/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar>
        {/* <ItemListContainer /> */}
        {/* <FetchingData /> */}
        <FetchingDB />
      </Navbar>
    </div>
  );
}

export default App;
