import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = () => {
    const ls = localStorage.getItem('token')
    if(ls){
        return true
    }else{
        return false
    }
}

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }else{
  return children;
  }
};

export default PrivateRoute;