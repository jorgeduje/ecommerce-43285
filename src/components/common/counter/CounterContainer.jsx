import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  let dataProps = {
    contador,
    sumar,
    restar,
    onAdd,
  };

  return <Counter {...dataProps} />;
};

export default CounterContainer;
