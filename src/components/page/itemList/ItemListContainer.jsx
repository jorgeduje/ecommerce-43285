import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName === undefined ? products : productsFiltrados);
      }, 500);
      //   reject({message: "No autorizado", status: 401})
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  // if (items.length === 0) {
  //   return (
  //     <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  //       <PropagateLoader
  //         color="blue"
  //         // cssOverride={stilosLoader}
  //         size={50}
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
