import React from 'react';
import axios from 'axios';
import { Table, TableClientsContainer } from './style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Client } from '../../core/types';


export const Clients: React.FC = () => {

  const { data } = useQuery('clients', async () => {
    return await axios.get('http://localhost:3000/clients')
      .then(res => res.data)
      .catch(error => {
        return error;
      });
  });

  const navigate = useNavigate();

  return (
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
          {data?.clients.length > 0 && data.clients.map((client: Client) =>
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
          )}
        </tbody>
      </Table>
    </TableClientsContainer>
  );
};
