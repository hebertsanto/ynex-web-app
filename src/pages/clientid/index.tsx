import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonContainer, ContainerClientId, ContainerDetailsInfo, ContainerInfoClientId, Title } from './style';
import { handleDeleteClient } from '../../core/functions/deleteUser';
import { toast } from 'react-toastify';

export const ClientIdComponent: React.FC = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useQuery('clientI', async () => {
    return await axios.get(`http://localhost:3000/client/${id}`)
      .then(response => response.data)
      .catch(error => {
        return error;
      });
  });


  const handleUpdateClient = (id: string) => {
    alert('isso vai editar o cliente');

    axios.put(`http://localhost:3000/client/${id}`, {
      name: 'hebertsantos',
      email: 'hebertsantosdeveloper0704@gmail.com',
      cep: '11714140',
      address: 'novo endereço',
      phoneNumber: '13996623994'
    })
      .then(() => {
        toast.success('cliente editado com sucesso');
      })
      .catch(error => {
        // Houve um erro na requisição
        console.error('Erro ao atualizar cliente', error);
      });
  };

  return (
    <ContainerClientId>
      <div>
        <Link to='/dashboard'>back to home</Link>
        <Title>clients {'>'} info</Title>
        <ContainerInfoClientId>
          <ContainerDetailsInfo>
            <p>
              nome: {data?.client.name}
            </p>
            <p>email : {data?.client.email}</p>
            <p>phone : {data?.client.phoneNumber}</p>
            <p>address : {data?.client.address}</p>
            <p>cep : {data?.client.cep}</p>
          </ContainerDetailsInfo>
          <ButtonContainer>
            <div>
              <Button
                onClick={() => handleUpdateClient(String(id))}
                bgColor="rgba(24, 120, 231, 0.8)"
                hover="rgba(49, 137, 238, 0.8)"
              >
                edit this client
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleDeleteClient(id, navigate)}
                bgColor="rgb(220, 38, 38)"
                hover="rgba(212, 0, 0, 0.788)"
              >
                Delete this client
              </Button>
            </div>
          </ButtonContainer>
        </ContainerInfoClientId>
      </div>
    </ContainerClientId>
  );
};
