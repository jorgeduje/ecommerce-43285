import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextComponent from "./context/CartContext";

// CONFIGURAR EL ROUTING
function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
          <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
