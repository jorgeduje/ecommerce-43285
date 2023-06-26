import { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // ACA ES DONDE VA TODO CODIGO QUE NO QUIERO QUE SE LEA NUEVAMENTE
    console.log("pedimos datos a la API");
  }, []);

  return (
    <div>
      <h1>Aca van los productos</h1>
    </div>
  );
};

export default ItemList;
