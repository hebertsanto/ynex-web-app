import React from "react";
import { Table, TableClientsContainer } from "./style"
import { Link } from 'react-router-dom'

export const clientsMock = [
   {
      id: 1,
      name: 'João Silva',
      email: 'joaosilva@gmail.com',
      tel: '123456789',
      address: 'Rua Principal, 123'
   },
   {
      id: 2,
      name: 'Maria Oliveira',
      email: 'mariaoliveira@gmail.com',
      tel: '987654321',
      address: 'Avenida Secundária, 456'
   },
   {
      id: 3,
      name: 'Carlos Pereira',
      email: 'carlospereira@gmail.com',
      tel: '555555555',
      address: 'Travessa das Flores, 789'
   },
   {
      id: 4,
      name: 'Ana Souza',
      email: 'anasouza@gmail.com',
      tel: '111111111',
      address: 'Praça Central, 101'
   },
   {
      id: 5,
      name: 'Pedro Alves',
      email: 'pedroalves@gmail.com',
      tel: '222222222',
      address: 'Rua da Esquina, 303'
   },
   {
      id: 6,
      name: 'Mariana Santos',
      email: 'marianasantos@gmail.com',
      tel: '333333333',
      address: 'Avenida das Palmeiras, 555'
   },
   {
      id: 7,
      name: 'Lucas Oliveira',
      email: 'lucasoliveira@gmail.com',
      tel: '777777777',
      address: 'Rua do Comércio, 777'
   }
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
                     adress
                  </th>
               </tr>
            </thead>
            <tbody>
               {clientsMock.map((client) => 
                 <tr key={client.id}>
                  <Link to={`client/${client.id}`}>
                    {client.name}
                  </Link>
                  <td>{client.email}</td>
                  <td>{client.tel}</td>
                  <td>{client.address}</td>
                 </tr>
               )}
            </tbody>
         </Table>
      </TableClientsContainer>
   )
}