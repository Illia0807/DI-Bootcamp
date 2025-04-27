import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// console.log(BASE_URL);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/register`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Register failed");
    }
  };
  return (
    <div>
      <h2>Register</h2>
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

export default Register;
