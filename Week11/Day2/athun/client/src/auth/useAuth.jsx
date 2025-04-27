import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const login = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/auth`, {
        withCredentials: true,
      });
      const { user, token } = response.data;
      login(user, token);
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  const isAuthenticated = !!user && !!token;
  return (
    <AuthContext
      value={{ isAuthenticated, login, user, token, logout, refreshToken }}
    >
      {children}
    </AuthContext>
  );
};
