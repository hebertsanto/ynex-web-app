import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';


export const Account: React.FC = () => {

  const id = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');
  const { data } = useQuery('dataAccout', () => {
    return axios.get(`http://localhost:5000/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.data)
      .catch(e => console.log(e.message));
  });

  console.log(data);
  return (
    <div>
      <h1>informações da conta</h1>
    </div>
  );
};
