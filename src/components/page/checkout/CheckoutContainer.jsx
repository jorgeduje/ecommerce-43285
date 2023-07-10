import { useState } from "react";

const CheckoutContainer = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [apellido, setApellido] = useState("");

  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });


  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("se envio");
    console.log(evento);
    
    // LAS VALIDACIONES

    // AXIOS.POST(URL, DATOS)
    console.log(data);
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };


  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
