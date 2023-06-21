import React from 'react'
import CounterContainer from '../../common/counter/CounterContainer'

const ItemDetail = () => {

    let producto = {
        nombre: "telefono",
        precio: 222,
        id: 1,
        stock: 5
    }

    const onAdd = ( cantidad )=>{

        console.log( producto )
        console.log( cantidad )


    }

  return (
    <div>
        <h2>{producto.nombre}</h2>
        <h4>{producto.precio}</h4>

        <CounterContainer stock={producto.stock}  onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail