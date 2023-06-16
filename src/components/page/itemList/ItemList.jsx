
const ItemList = ( {saludo, cambiarSaludo, cambiarNombre} ) => {

  let nombreUsuario = "carmen"

  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={()=> cambiarSaludo("bien")}>Cambiar saludo</button>
      <button onClick={()=> cambiarNombre(nombreUsuario)}>Cambiar nombre</button>
    </div>
  )
}

export default ItemList