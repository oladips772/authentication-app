/** @format */
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = window.localStorage.getItem("adminInfo");
  if (token) {
    return children;
  } else {
    return <Navigate to="/Login" replace />;
  }
}

export default PrivateRoute;
