import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  let userRol = "user";

  return <div>{userRol !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
