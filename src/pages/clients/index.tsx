import React from 'react';
import axios from 'axios';
import { Table, TableClientsContainer, Container, Search, SubContainer, ButtonRegisterAClient } from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Client } from '../../core/types';
import { Loading } from '../../components/loading';

export const Clients: React.FC = () => {

  const token = localStorage.getItem('userToken');
  const id = localStorage.getItem('userId');

  const navigate = useNavigate();
  const { data, isLoading } = useQuery('clients', async () => {
    return await axios.get(`http://localhost:5000/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.data.msg == 'o token não é mais válido, executar o login novamente.') {
          //code
        }
        return res.data;
      })
      .catch(error => {
        return error;
      });
  });

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          <div style={{ minHeight: '100vh' }}>
            <Container>
              <SubContainer>
                <div>
                  <p>Dashboard ynex</p>
                </div>
                <div>
                  <Search placeholder='pesquise pelo nome' />
                  <ButtonRegisterAClient
                    onClick={() => navigate('/dashboard/contribuidor/novo')}
                  >
                    adicionar novo contribuidor
                  </ButtonRegisterAClient>
                </div>
              </SubContainer>
            </Container>
            colaboradores
            <TableClientsContainer>
              <Table>
                <thead>
                  <tr>
                    <th>
                      nome
                    </th>
                    <th>
                      email
                    </th>
                    <th>
                      telefone
                    </th>
                    <th>
                      cep
                    </th>
                    <th>
                      endereço
                    </th>
                    <th>
                      execute ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.clientsUser?.length > 0 &&
                    data?.clientsUser.map((client: Client) =>
                      <>
                        <tr key={client._id}>
                          <td>
                            {client.name}
                          </td>
                          <td>{client.email}</td>
                          <td>{client.phoneNumber}</td>
                          <td>{client.cep}</td>
                          <td>{client.address}</td>
                          <td>
                            <button onClick={() => navigate(`/dashboard/contribuidor/${client._id}?name=${client.name.replace(/ /g, '-')}`)}>ver todas informações</button>
                          </td>
                        </tr>
                      </>
                    )}
                </tbody>
              </Table>
            </TableClientsContainer>
          </div>

        </>
      }
    </>
  );
};
