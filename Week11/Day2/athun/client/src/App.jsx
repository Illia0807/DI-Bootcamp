import { Routes, Route, Link, useNavigate } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./auth/useAuth";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      logout();
    }
  };
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to='/'>Home</Link>
        {!isAuthenticated && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
        <Link to='/dashboard'>Dashboard</Link>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
      <Routes>
        <Route path='/' element={<h2>Welcome to our App</h2>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        
        } />
      </Routes>
    </>
  );
}

export default App;
