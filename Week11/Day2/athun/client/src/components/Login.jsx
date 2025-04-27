import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/useAuth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      const { user, token } = response.data;
      login(user, token);
      navigate("/");
    } catch (error) {
      console.log(error);
      logout()
      setError(error.response?.data?.message || "Register failed");
    }
  };
  return (
    <div>
      <h2>login</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value={"Register"} />
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </form>
    </div>
  );
}

export default Login;
