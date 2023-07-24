import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  let userRol = "admin";

  return <div>{userRol !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
