import React, { useEffect } from 'react';
import { Clients } from '../clients';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <Clients />
    </div>
  );
};
