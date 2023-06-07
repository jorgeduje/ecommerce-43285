import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {


  const funcionSaludar = ()=>{
    console.log("Hola como estas")
  }

  return <div>
    <Navbar />
    <h1 style={{color: "steelblue"}}>Hola</h1>
    <button onClick={funcionSaludar} >Saludar</button>
    <Footer/>
  </div>;
}

export default App;
