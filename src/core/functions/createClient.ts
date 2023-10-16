import axios from 'axios';
import { FormData } from '../types';
import { toast } from 'react-toastify';

export const createUser = async (data: FormData) => {

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');

  return await axios
    .post('http://localhost:5000/clients', {
      name: data.name,
      email: data.email,
      cep: data.cep,
      address: data.address,
      phoneNumber: data.phoneNumber,
      user:userId
    },{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.data.msg == 'email already exists') {
        console.log(res.data);
        return toast.error('este email já esta sendo ultilizado por algum cliente');
      }
      toast.success('cliente adicionado com sucesso');
    })
    .catch( error => {
      return error;
    });
};
