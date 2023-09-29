import axios from "axios";
import React from "react"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { ContainerClientId, ContainerInfoClientId } from "./style";

export const ClientIdComponent : React.FC = () => {
    
    const { id } = useParams();
    const { data } = useQuery('clientI', async() => {
        return await axios.get(`http://localhost:3000/client/${id}`)
        .then(response => response.data)
        .catch(error => {
            return error;
        })
    })
    console.log(data);
    return(
        <ContainerClientId>
           <div>
             <p>clients {'>'} info</p>
              <ContainerInfoClientId>
                 <p>
                   nome: {data?.client.name}
                 </p>
                 <p>email : {data?.client.email}</p>
                 <p>phone : {data?.client.phoneNumber}</p>
                 <p>address : {data?.client.address}</p>
                 <p>cep :{data?.client.cep}</p>
              </ContainerInfoClientId>
           </div>
        </ContainerClientId>
    )
}