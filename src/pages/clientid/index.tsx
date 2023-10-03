import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonContainer, ContainerClientId, ContainerDetailsInfo, ContainerInfoClientId, ContainerUpdateClient, ModalDeleteStyle, Title } from './style';
import { handleDeleteClient } from '../../core/functions/deleteUser';
import { toast } from 'react-toastify';

export const ClientIdComponent: React.FC = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [ modal, setModal ] = useState(false);
  const [ modalDelete, setModalDelete ] = useState(false);

  const { data } = useQuery('clientI', async () => {
    return await axios.get(`http://localhost:3000/client/${id}`)
      .then(response => response.data)
      .catch(error => {
        return error;
      });
  });


  const handleUpdateClient = (id: string) => {

    axios.put(`http://localhost:3000/client/${id}`, {
      name: 'hebertsantos',
      email: 'jussaradeveloper0704@gmail.com',
      cep: '11714140',
      address: 'novo endereço',
      phoneNumber: '13996623994'
    })
      .then(() => {
        toast.success('cliente editado com sucesso');
      })
      .catch(error => {
        return error;
      });
  };

  const handleAtivateModal = () => {
    setModal(true);
  };
  const handleAtivateModalDelete = () => {
    setModalDelete(true);
  };

  return (
    <ContainerClientId >
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
                onClick={() => handleAtivateModal()}
                bgColor="rgba(24, 120, 231, 0.8)"
                hover="rgba(49, 137, 238, 0.8)"
              >
                edit this client
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleAtivateModalDelete()}
                bgColor="rgb(220, 38, 38)"
                hover="rgba(212, 0, 0, 0.788)"
              >
                Delete this client
              </Button>
            </div>
          </ButtonContainer>
        </ContainerInfoClientId>
        {modalDelete &&
          <ModalDeleteStyle>
            <div>
              <h3>tem certeza que deseja excluir esse cliente? </h3>
              <p>essa ação não poderá ser revertida.</p>
              <button onClick={() => handleDeleteClient(id, navigate)}>sim</button>
              <button onClick={() => setModalDelete(false)}>cancelar</button>
            </div>
          </ModalDeleteStyle>}
        {modal &&
          <ContainerUpdateClient>
            <div>
              aqui vai os inputs para editar o cliente
              <button onClick={() => setModal(false)}>fechar modal</button>
              <button onClick={() => handleUpdateClient(String(id))}>salvar alterações</button>
            </div>
          </ContainerUpdateClient>}
      </div>
    </ContainerClientId>
  );
};
