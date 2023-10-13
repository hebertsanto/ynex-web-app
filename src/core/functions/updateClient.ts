import axios from 'axios';
import { toast } from 'react-toastify';
const token = localStorage.getItem('userToken');

export const handleUpdateClient = (
  id: string,
  name: string,
  email: string,
  cep: string,
  address: string,
  phoneNumber: string
) => {
  axios
    .put(
      `http://localhost:5000/client/${id}`,
      {
        name: name,
        email: email,
        cep: cep,
        address: address,
        phoneNumber: phoneNumber
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(res => {
      toast.success('cliente editado com sucesso');
      console.log(res.data);
    })
    .catch(error => {
      return error;
    });
};
