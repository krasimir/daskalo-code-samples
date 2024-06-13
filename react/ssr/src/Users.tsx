import React, { useEffect, useState } from 'react';
import {useDependencies} from './dependencies';

export default function Users() {
  const [users, setUsers] = useState([]);
  const { getUsers } = useDependencies();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}