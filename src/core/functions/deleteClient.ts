import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from '../types';

export const handleDeleteClient = (id: string | undefined, navigate : Navigate) => {

  const token = localStorage.getItem('userToken');

  axios
    .delete(`http://localhost:5000/colaborator/${id}`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    .then(() => {
      toast.success('client deleted successfully');
      navigate('/dashboard');
      return;
    })
    .catch( error => {
      return error;
    });
};
