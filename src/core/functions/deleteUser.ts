import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate } from '../types';

export const handleDeleteClient = (id: string | undefined, navigate : Navigate) => {
  axios
    .delete(`http://localhost:3000/client/${id}`)
    .then(res => {
      const { data } = res;
      console.log(data);
      toast.success('client deleted successfully');
      navigate('/dashboard');
      return;
    })
    .catch( error => {
      return error;
    });
};
