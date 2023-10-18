import React from 'react';
import axios from 'axios';
import { ContainerPagination, Table, TableClientsContainer, Container, Search, SubContainer, ButtonRegisterAClient, ClientsNotFound } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Client } from '../../core/types';
import { useState } from 'react';
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

  const [ currentPage, setCurrentPage ] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedClients = data?.clientsUser?.slice(startIndex, endIndex) || [];

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          {paginatedClients?.length == 0 || undefined ? <ClientsNotFound><p>nenhum cliente., <Link to='/user/client/new'>registrar</Link></p></ClientsNotFound> :
            <div style={{ minHeight: '100vh' }}>
              <Container>
                <SubContainer>
                  <div>
                    <p>Dashboard ynex</p>
                  </div>
                  <div>
                    <Search placeholder='pesquise pelo nome' />
                    <ButtonRegisterAClient
                      onClick={() => navigate('/user/client/new')}
                    >
                      register client
                    </ButtonRegisterAClient>
                  </div>
                </SubContainer>
              </Container>
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
                        ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedClients.length > 0 &&
                      paginatedClients.map((client: Client) =>
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
                              <button onClick={() => navigate(`/user/client/${client._id}`)}>actions</button>
                            </td>
                          </tr>
                        </>
                      )}
                  </tbody>
                </Table>
                <ContainerPagination>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    prev page
                  </button>
                  <span>Página {currentPage}</span>
                  <button
                    disabled={endIndex >= data?.clients?.length}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    next page
                  </button>
                </ContainerPagination>
              </TableClientsContainer>
            </div>
          }
        </>
      }
    </>
  );
};
