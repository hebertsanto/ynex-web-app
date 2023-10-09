import axios from 'axios';
import { FormData } from '../types';
import { toast } from 'react-toastify';

export const createUser = async (data: FormData) => {
  return await axios
    .post('http://localhost:3000/clients', {
      name: data.name,
      email: data.email,
      cep: data.cep,
      address: data.address,
      phoneNumber: data.phoneNumber
    })
    .then(res => {
      if (res.data) {
        toast.success('client add success');
      } else {
        toast.error('something went wrong');
      }
    })
    .catch( error => {
      return error;
    });
};
