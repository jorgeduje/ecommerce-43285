import { useState } from "react";
import ItemList from "./components/page/itemList/ItemList";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/page/home/Home";
import ItemDetail from "./components/page/itemDetail/ItemDetail";

function App() {
  const [showItems, setShowItems] = useState(false);

  const [edad, setEdad] = useState(22);

  return (
    <div>
      {/* {showItems ? <ItemList edad={edad} /> : <h1>No hay nada</h1>}

      <button onClick={() => setShowItems(!showItems)}>montar-desmontar</button>
      <button onClick={() => setEdad(edad + 1)}>sumar edad</button> */}

      {/* <Navbar>
        <ItemList />
        <Home />
      </Navbar> */}

      <ItemDetail />
    </div>
  );
}

export default App;
