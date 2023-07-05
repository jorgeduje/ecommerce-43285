import ContadorCustom from "./ContadorCustom";
import FetchDos from "./FetchDos";
import FetchTres from "./FetchTres";
import FetchUno from "./FetchUno";
import { ComponentWithData } from "./HighOrder";
import Padre from "./Padre";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar>
       
       <Padre title="Este es el titulo" >
        <div>
          <h3>Aca va la descripcion </h3>
          <h4>mas informacion </h4>
        </div>
        <div>
          <h3>Aca va la descripcion </h3>
          <h4>mas informacion </h4>
        </div>
       </Padre>
       
       {/* <Padre>
        <main>
          <p>asdadsadasdas</p>
        </main>
       </Padre> */}

       <ComponentWithData endpoint="https://jsonplaceholder.typicode.com/users" />
       <ComponentWithData endpoint="https://jsonplaceholder.typicode.com/albums" />
       <ComponentWithData endpoint="https://jsonplaceholder.typicode.com/comments" />
      


      </Navbar>
     
    </div>
  );
}

export default App;
