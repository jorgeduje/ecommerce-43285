import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        // [{1}, {}, {3}]
        if (elemento.id === item.id) {
          return { ...elemento, quantity: item.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  // CALCULAR EL TOTAL

  const getTotalPrice = ()=>{

    let total = cart.reduce( (acc, elemento)=>{
      return acc + (elemento.price * elemento.quantity)
    }, 0)
    return total
  }

  // CALCULAR LA CANTIDAD DE ITEMS
  const getTotalQuantity = ()=>{
    let total = cart.reduce( (acc, elemento)=>{
      return acc +  elemento.quantity
    }, 0)
    return total
  }

  const getQuantityById = (id)=>{

    const product = cart.find( (elemento)=> elemento.id === id)
    return product?.quantity

  }


  let data = { cart, addToCart, clearCart, deleteById, getTotalPrice, getTotalQuantity, getQuantityById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
