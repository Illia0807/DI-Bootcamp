import React, { useEffect, useState } from 'react'

interface User {
        id: number;
        name: string;
        email: string;
      }
      
      const UserList: React.FC = () => {
        const [users, setUsers] = useState<User[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
      
        useEffect(() => {
          const fetchUsers = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users');
              if (!response.ok) throw new Error('Failed to fetch users');
              const data: User[] = await response.json();
              setUsers(data);
            } catch (err) {
              setError('Error fetching users');
            } finally {
              setLoading(false);
            }
          };
      
          fetchUsers();
        }, []);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;
      
        return (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        );
      };
      
      export default UserList;