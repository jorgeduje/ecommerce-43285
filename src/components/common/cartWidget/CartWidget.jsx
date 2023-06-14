import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = () => {
  return (
    <div>
        <BsFillCartCheckFill color='purple' size={40} title='Este es el carrito' />
        <span>0</span>
    </div>
  )
}

export default CartWidget