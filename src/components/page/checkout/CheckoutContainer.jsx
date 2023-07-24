import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    // CREAR LA ORDEN EN FIREBASE
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    // MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENTO
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>

      {orderId ? (
        <div>
          <h3>Gracias por su compra.</h3>
          <h4>Su numero de comprar es: {orderId}</h4>
          <Link to="/">Volver a comprar</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
