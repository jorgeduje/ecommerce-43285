import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({ children }) => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <h4>Comision 43285</h4>

          <ul className="categories">
            <li>Todas</li>
            <li>Deportivas</li>
            <li>Urbanas</li>
          </ul>

          <CartWidget />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Navbar;
