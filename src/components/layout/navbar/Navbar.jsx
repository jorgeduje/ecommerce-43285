import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({ children }) => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <h4>Comision 39650</h4>

          <ul className="categories">
            <li>Todas</li>
            <li>deportivas</li>
            <li>urbanas</li>
          </ul>

          <CartWidget />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Navbar;
