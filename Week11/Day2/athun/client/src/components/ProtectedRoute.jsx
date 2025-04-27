import { useEffect } from "react";
import { useAuth } from "../auth/useAuth";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, refreshToken } = useAuth();

  useEffect(() => {
    refreshToken();
  }, []);

  if (!isAuthenticated) {
    return <h2>User not loged in</h2>;
  }
  return children;
}
