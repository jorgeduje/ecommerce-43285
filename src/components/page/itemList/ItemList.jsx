import { useState, useEffect } from "react"

const ItemList = ( {edad} ) => {

  const [items, setItems] = useState([])

  // Se ejecuta el efecto solo una vez, en el montaje del componente

  useEffect( ()=>{
    // ACA ES DONDE VA TODO CODIGO QUE NO QUIERO QUE SE LEA NUEVAMENTE
    console.log("pedimos datos a la API")
  } , [] )

  // Se ejecuta el efecto una vez, en el montaje del componente pero tambien
  // cada vez que escucha un cambio en sus dependencias!
  // useEffect( ()=>{
  //   // ACA ES DONDE VA TODO CODIGO QUE NO QUIERO QUE SE LEA NUEVAMENTE
  //   console.log("pedimos datos a la API")
  // } , [ items ] )

  console.log("me ejecute primero")

  return (
    <div>
      <h1>Aca van los productos</h1>
      <h2>la edad es { edad }</h2>
      <button onClick={()=>setItems([...items, {}])}>Traer productos</button>
    </div>
  )
}

export default ItemList