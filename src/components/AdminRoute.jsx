import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");

  // If no token, block access
  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  // Token exists → allow access
  return children;
}
