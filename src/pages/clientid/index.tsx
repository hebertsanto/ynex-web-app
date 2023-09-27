import React from "react"
import { useParams } from "react-router-dom"
import { clientsMock } from "../clients";

export const ClientIdComponent : React.FC = () => {
    const { id } = useParams();

   const client = clientsMock.find((client) => client.id === Number(id));
   
   console.log(client)
    return(
        <div>
           pagina cliente
        </div>
    )
}