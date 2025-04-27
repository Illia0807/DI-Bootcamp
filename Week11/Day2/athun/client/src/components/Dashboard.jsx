import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/all`,{
        withCredentials:true
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {users &&
        users.map((item) => {
          return <div key={item.id}>{item.email}</div>;
        })}
    </div>
  );
}
