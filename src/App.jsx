import { useState } from "react";
import Home from "./components/page/home/Home";
import ItemList from "./components/page/itemList/ItemList";
import Navbar from "./components/layout/navbar/Navbar";

function App() {

  const [saludo, setSaludo] = useState("hola como estas")
  const [ name, setName] = useState("maria")
  console.log(name)
  
  const cambiarSaludo = ( nuevoSaludo )=>{
    setSaludo( nuevoSaludo )
  }

  const cambiarNombre = (nuevoNombre)=>{
    setName(nuevoNombre)
  }

  // props
  return (
    <div>
      <Navbar />
      <h1>Hola Mundo!</h1>
      <Home nombre={"juancito"} apellido={"perez"} /> 
      <ItemList saludo={saludo} cambiarSaludo={cambiarSaludo} cambiarNombre={cambiarNombre} />
    </div>
  );
}

export default App;
