import React from "react";
import { Table, TableClientsContainer } from "./style"
import { Link } from 'react-router-dom'

export const clientsMock = [
   {
      id: 1,
      name: 'João Silva',
      email: 'joaosilva@gmail.com',
      tel: '123456789',
      address: 'Rua Principal, 123',
      cep: 11714140,
   },
];



export const Clients: React.FC = () => {

   return (
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
                     phone
                  </th>
                  <th>
                     cep
                  </th>
                  <th>
                     adress
                  </th>
               </tr>
            </thead>
            <tbody>
               {clientsMock.length > 0 && clientsMock.map((client) => 
                 <tr key={client.id}>
                  <Link to={`client/${client.id}`}>
                    {client.name}
                  </Link>
                  <td>{client.email}</td>
                  <td>{client.tel}</td>
                  <td>{client.cep}</td>
                  <td>{client.address}</td>
                 </tr>
               )}
            </tbody>
         </Table>
      </TableClientsContainer>
   )
}