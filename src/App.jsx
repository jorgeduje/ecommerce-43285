import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

// CONFIGURAR EL ROUTING
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
