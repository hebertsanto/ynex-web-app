import axios from 'axios';
import { toast } from 'react-toastify';

export const handleUpdateClient = (
  id: string,
  name:string,
  email:string,
  cep:string,
  address:string,
  phoneNumber: string
) => {
  axios
    .put(`http://localhost:3000/client/${id}`, {
      name:name,
      email:email,
      cep: cep,
      address: address,
      phoneNumber: phoneNumber
    })
    .then(() => {
      toast.success('cliente editado com sucesso');
    })
    .catch(error => {
      return error;
    });
};
