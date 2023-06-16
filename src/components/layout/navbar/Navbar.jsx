import React from 'react'
import CartWidget from '../../common/cartWidget/CartWidget'

const Navbar = () => {
  return (
    <div>
        <h2>Logo</h2>
        <ul>
            <li>Todas</li>
            <li>deportivas</li>
            <li>urbanas</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar