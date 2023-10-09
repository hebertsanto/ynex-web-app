import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonContainer, ContainerClientId, ContainerDetailsInfo, ContainerInfoClientId, ContainerUpdateClient, ContentModalDelete, ModalDeleteStyle, Title } from './style';
import { handleDeleteClient } from '../../core/functions/deleteClient';
import { handleUpdateClient } from '../../core/functions/updateClient';

export const ClientIdComponent: React.FC = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [ modal, setModal ] = useState(false);
  const [ closeModalDelete, setCloseModalDelete ] = useState(false);

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
  }, [ data ]);

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
                width='100%'
                onClick={() => setModal(true)}
                bgColor="rgba(24, 120, 231, 0.8)"
                hover="rgba(49, 137, 238, 0.8)"
              >
                edit this client
              </Button>
            </div>
            <div>
              <Button
                width='100%'
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
                marginTop: '15px'
              }}>
                <Button
                  style={{
                    marginLeft: '15px'
                  }}
                  width='90%'
                  bgColor='#e22b13'
                  hover="rgba(212, 0, 0, 0.788)"
                  onClick={() =>
                    handleDeleteClient(id, navigate)}

                >
                  excluir cliente
                </Button>
                <Button
                  style={{
                    marginLeft: '15px'
                  }}
                  width='90%'
                  bgColor='#0475d1'
                  hover="rgba(49, 137, 238, 0.8)"
                  onClick={() => setCloseModalDelete(false)}>
                  cancelar
                </Button>
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
              <Button
                hover="rgba(49, 137, 238, 0.8)"
                bgColor='#0475d1'
                onClick={() => handleUpdateClient(String(id), name, email, cep, address, phoneNumber)}
                width='95%'
                style={{
                  marginLeft: '10px'
                }}
              >salvar alterações</Button>
              <Button
                style={{
                  marginLeft: '10px'
                }}
                bgColor='#e22b13'
                hover="rgba(212, 0, 0, 0.788)"
                width='95%'
                onClick={() => setModal(false)}>fechar modal</Button>

            </div>
          </ContainerUpdateClient>}
      </div>
    </ContainerClientId>
  );
};
