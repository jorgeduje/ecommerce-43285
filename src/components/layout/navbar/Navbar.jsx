import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "steelblue",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "10vh",
          alignItems: "center",
        }}
      >
        <h2>Logo</h2>
        <ul>
          <li>Todas</li>
          <li>deportivas</li>
          <li>urbanas</li>
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
