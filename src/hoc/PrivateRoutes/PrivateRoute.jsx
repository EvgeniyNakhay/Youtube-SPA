import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/authorization" replace />;
};

export default PrivateRoute;
