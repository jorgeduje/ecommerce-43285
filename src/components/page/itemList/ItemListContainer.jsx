import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db, ingresarConGoogle } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  const ingresarGoogle = async()=>{
    let res = await ingresarConGoogle()
    console.log(res)
  }

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos);
    });
  }, [categoryName]);

  return (
    <>
      <button onClick={ingresarGoogle}>Google</button>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
