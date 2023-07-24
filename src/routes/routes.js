import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import Dashboard from "../components/page/dashboard/Dashboard";
import FormularioFormik from "../components/page/formularioFormik/FormularioFormik";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormularioFormik,
  }
];
