import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({})

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    //   reject({message: "No autorizado", status: 401})
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));

  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
