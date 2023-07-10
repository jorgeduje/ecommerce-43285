import { useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";


const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const {id} = useParams()
   const navigate = useNavigate()



  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado)
    });
    tarea.then(res => setProducto(res) )

  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
    navigate("/cart")
  };


  return (
    <div>
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;


// +"15" ---> 15