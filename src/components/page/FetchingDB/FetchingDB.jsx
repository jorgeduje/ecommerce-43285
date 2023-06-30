import { useEffect, useState } from "react";

import { axiosCustom } from "../../../axiosInstance";

const FetchingDB = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});

console.log(products)
console.log(productSelected)
  useEffect(() => {
    let data = axiosCustom.get("/");

    data.then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    let data = axiosCustom.get("/3");

    data.then((res) => setProductSelected(res.data));
  }, []);

  // CREATE --- POST

  const createProduct = () => {
    let newProducts = {
      title: "maria",
      price: 12000,
      stock: 1,
      description: "Zapatillas buenas",
      category: "urbanas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669430220/rtokwmt3j03bblbfhwhb.jpg",
    };

    let data = axiosCustom.post("/", newProducts);
  };

  let id = 2;
  let nuevaInfo = {
    title: "nuevo titulo",
    price: 500,
  };

  const updateProduct = (id, informacion) => {
      // let data = axiosCustom.put(`http://localhost:5000/products/${id}`, informacion);
      let data = axiosCustom.patch(`/${id}`, informacion);
  };

  const deleteById = (id)=>{
    let data = axiosCustom.delete(`/${id}`)
  }

  return (
    <div>
      <h1>Probando json-server</h1>

      <button onClick={createProduct}>Crear producto</button>
      <button onClick={()=> updateProduct(id, nuevaInfo)}>Actualizar producto por id</button>
      <button onClick={()=> deleteById(4)}>Eliminar por id</button>
    </div>
  );
};

export default FetchingDB;
