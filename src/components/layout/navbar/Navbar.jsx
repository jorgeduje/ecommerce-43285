import { Link } from "react-router-dom";

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  let userRol = "admin";

  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link to="/">
            <h4>Comision 43285</h4>
          </Link>

          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/deportivas">Deportivas</Link>
            <Link to="/category/urbanas">Urbanas</Link>
          </ul>

          {userRol === "admin" && <Link to="dashboard">ADMIN</Link>}

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
