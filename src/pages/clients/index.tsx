import React from "react";
import { Table, TableClientsContainer } from "./style"
import { Link } from 'react-router-dom'
import { useQuery } from "react-query";
import axios from "axios";


export const Clients: React.FC = () => {

   const { data } = useQuery('clients', async () => {
      return await axios.get('http://localhost:3000/')
         .then(res => res.data)
         .catch(error => {
            return error;
         })
   })

   type Client = {
      _id:string,
      address: string,
      cep: string,
      email: string
      name: string,
      phoneNumber: string,
   }
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
               {data?.clients.length > 0 && data.clients.map((client : Client) =>
                  <tr key={client._id}>
                     <Link to={`client/${client._id}`}>
                        {client.name}
                     </Link>
                     <td>{client.email}</td>
                     <td>{client.phoneNumber}</td>
                     <td>{client.cep}</td>
                     <td>{client.address}</td>
                  </tr>
               )}
            </tbody>
         </Table>
      </TableClientsContainer>
   )
}