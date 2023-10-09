import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonClient, ButtonContainer, ContainerClientId, ContainerDetailsInfo, ContainerInfoClientId, ContainerUpdateClient, ContentModalDelete, ModalDeleteStyle, Title } from './style';
import { handleDeleteClient } from '../../core/functions/deleteClient';
import { handleUpdateClient } from '../../core/functions/updateClient';

export const ClientIdComponent: React.FC = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [ modal, setModal ]  = useState(false);
  const [ closeModalDelete, setCloseModalDelete ]  = useState(false);

  const { data } = useQuery([ 'clientI', id ], async () => {
    return await axios.get(`http://localhost:3000/client/${id}`)
      .then(response => response.data)
      .catch(error => {
        return error;
      });
  });

  const [ name, setName ] = useState(data?.client?.name);
  const [ email, setEmail ] = useState(data?.client?.email);
  const [ cep, setCep ] = useState(data?.client?.cep);
  const [ address, setAddress ] = useState(data?.client?.address);
  const [ phoneNumber, setPhoneNumber ] = useState(data?.client?.phoneNumber);

  useEffect(() => {
    if (data && data.client) {
      setName(data.client.name || '');
      setEmail(data.client.email || '');
      setCep(data.client.cep || '');
      setAddress(data.client.address || '');
      setPhoneNumber(data.client.phoneNumber || '');
    }
  }, [ data ] );

  return (
    <ContainerClientId >
      <div>
        <Link to='/dashboard'>back to home</Link>
        <Title>clients {'>'} info</Title>
        <ContainerInfoClientId>
          <ContainerDetailsInfo>
            <p>
              nome: {data?.client?.name}
            </p>
            <p>email : {data?.client?.email}</p>
            <p>phone : {data?.client?.phoneNumber}</p>
            <p>address : {data?.client?.address}</p>
            <p>cep : {data?.client?.cep}</p>
          </ContainerDetailsInfo>
          <ButtonContainer>
            <div>
              <Button
                onClick={() => setModal(true)}
                bgColor="rgba(24, 120, 231, 0.8)"
                hover="rgba(49, 137, 238, 0.8)"
              >
                edit this client
              </Button>
            </div>
            <div>
              <Button
                onClick={() => setCloseModalDelete(true)}
                bgColor="rgb(220, 38, 38)"
                hover="rgba(212, 0, 0, 0.788)"
              >
                Delete this client
              </Button>
            </div>
          </ButtonContainer>
        </ContainerInfoClientId>
        {closeModalDelete &&
          <ModalDeleteStyle>
            <ContentModalDelete>
              <h3>tem certeza que deseja excluir esse cliente? </h3>
              <p>essa ação não poderá ser revertida.</p>
              <div style={{
                marginTop: '30px',
                marginLeft: '20px'
              }}>
                <ButtonClient
                  onClick={() =>
                    handleDeleteClient(id, navigate)}
                  bgColor='#0475d1'
                >
                  excluir cliente
                </ButtonClient>
                <ButtonClient
                  bgColor='#e22b13'
                  onClick={() => setCloseModalDelete(false)}>
                  cancelar
                </ButtonClient>
              </div>
            </ContentModalDelete>
          </ModalDeleteStyle>}
        {modal &&
          <ContainerUpdateClient>
            <div>
              <label htmlFor="">nome</label>
              <input type="text"
                placeholder='novo nome'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="">email</label>
              <input type="text"
                placeholder='novo nome'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="">telefone</label>
              <input type="text"
                placeholder='novo nome'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="">cep</label>
              <input type="text"
                placeholder='novo nome'
                value={cep}
                onChange={e => setCep(e.target.value)}
              />
              <label htmlFor="">address</label>
              <input type="text"
                placeholder='novo nome'
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <button onClick={() => setModal(false)}>fechar modal</button>
              <button onClick={() => handleUpdateClient(String(id), name, email, cep,address, phoneNumber)}>salvar alterações</button>
            </div>
          </ContainerUpdateClient>}
      </div>
    </ContainerClientId>
  );
};
