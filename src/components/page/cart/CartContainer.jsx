import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>Carritoooo</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{ border: "2px solid black" }}>
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h5>{elemento.quantity}</h5>
            <button onClick={() => deleteById(elemento.id)}>eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}

      <h2>El total es: {total}</h2>
      <Link to="/checkout" >Finalizar compra</Link>
    </div>
  );
};

export default CartContainer;
