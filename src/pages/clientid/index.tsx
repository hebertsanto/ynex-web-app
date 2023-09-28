import React from "react"
import { useParams } from "react-router-dom"

export const ClientIdComponent : React.FC = () => {
    const { id } = useParams();



    return(
        <div>
           pagina cliente com o id {id}
        </div>
    )
}