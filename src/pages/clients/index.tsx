import React from 'react';
import axios from 'axios';
import { ContainerPagination, Table, TableClientsContainer, Container, Search, SubContainer, ButtonRegisterAClient } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Client } from '../../core/types';
import { useState } from 'react';


export const Clients: React.FC = () => {

  const { data } = useQuery('clients', async () => {
    return await axios.get('http://localhost:3000/clients')
      .then(res => res.data)
      .catch(error => {
        return error;
      });
  });

  const [ currentPage, setCurrentPage ] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedClients = data?.clients?.slice(startIndex, endIndex) || [];
  const navigate = useNavigate();

  return (
    <>
      {paginatedClients?.length == 0 || undefined ? <div>voce não tem nehum cliente cadastrado, <Link to='/dashboard/client/new'>registrar</Link></div> :
        <div style={{ minHeight: '100vh' }}>
          <Container>
            <SubContainer>
              <div>
                <p>dashboard ynex</p>
              </div>
              <div>
                <Search placeholder='search clients'/>
                <ButtonRegisterAClient
                  onClick={() => navigate('/dashboard/client/new')}
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
                    name
                  </th>
                  <th>
                    email
                  </th>
                  <th>
                    phone
                  </th>
                  <th>
                    cep
                  </th>
                  <th>
                    adress
                  </th>
                  <th>
                    actions
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
                          <button onClick={() => navigate(`client/${client._id}`)}>actions</button>
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
  );
};
