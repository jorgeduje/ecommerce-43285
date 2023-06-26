import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="main" sx={{fontSize: 40}} />
    </Badge>
  );
};

export default CartWidget;
