import React from 'react';
import axios from 'axios';
import { ContainerPagination, Table, TableClientsContainer, Container, Search, SubContainer, ButtonRegisterAClient, ClientsNotFound } from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Client } from '../../core/types';
import { useState } from 'react';

export const Clients: React.FC = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery('clients', async () => {
    return await axios.get(`http://localhost:5000/user/${id}`, {
      headers:{
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiQyYiQxMCR1T1RCQldGTVg4MlJUenpSWjVVcU11S0M5b0h4N3pTSEJRdUhzS0llOWZQNWlCMDZpZUIveSIsImlhdCI6MTY5NzE2MTc3MywiZXhwIjoxNjk3MjQ4MTczfQ.-ZzSkwTXzDrtCBkrSwCW4vzaf7HfgRwtRjB_yFOSw7U'
      }
    })
      .then(res => {
        if(res.data.msg == 'o token não é mais válido, executar o login novamente.'){
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
  const paginatedClients = data?.usersClients?.slice(startIndex, endIndex) || [];

  return (
    <>
      {paginatedClients?.length == 0 || undefined ? <ClientsNotFound><p>voce não tem nehum cliente cadastrado com o usuario de id {id}, <Link to={`/userId/${id}/client/new`}>registrar</Link></p></ClientsNotFound> :
        <div style={{ minHeight: '100vh' }}>
          <Container>
            <SubContainer>
              <div>
                <p>Dashboard ynex</p>
              </div>
              <div>
                <Search placeholder='search clients'/>
                <ButtonRegisterAClient
                  onClick={() => navigate(`/userId/${id}/client/new`)}
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
