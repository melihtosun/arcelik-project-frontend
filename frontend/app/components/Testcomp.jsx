'use client';

import { useEffect, useState } from 'react';
import { GET } from '../api/user/route'

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GET();
        console.log('Response from API:', response);

        if (response && response.status === 200) {
          const data = await response.json();
          console.log('Fetched data:', data);
          setUserData(data.users);
        } else {
          console.error('Error fetching data:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log('Before fetchData');
    fetchData();
    console.log('After fetchData');
  }, []);

  return (
    <>
      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
          ))}
      </ul>
    </>
  );
};

export default Users;

