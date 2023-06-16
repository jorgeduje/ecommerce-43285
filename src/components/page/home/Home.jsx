// useState

import { useState } from "react";

const Home = ({ nombre, apellido }) => {
  const [contador, setContador] = useState(0); // [ variable , funcion que modifica esa variable ]
  const [name, setName] = useState("pepe");

  const sumar = (num) => {
    setContador(contador + num);
  };

  return (
    <>
      <h1>
        {nombre} y {apellido}
      </h1>
      <h1>el nombre es {name}</h1>
      <button onClick={() => setName("maria")}>Cambiar a maria</button>
      <h3>El contador esta en {contador}</h3>
      <button onClick={() => sumar(15)}>Sumar en 15</button>
      <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
    </>
  );
};

export default Home;
