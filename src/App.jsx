import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import CartContainer from "./components/page/cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Layout from "./components/layout/Layout";
import ItemDetail from "./components/page/itemDetail/ItemDetail";

// CONFIGURAR EL ROUTING
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<h1>Aca el checkout</h1>} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
