import React from "react"
import { useParams } from "react-router-dom"
import { clientsMock } from "../clients";

export const ClientIdComponent : React.FC = () => {
    const { id } = useParams();

   const product = clientsMock.find((product) => product.id === Number(id));
  
    return(
        <div>
            <h1>
                client : {product?.name}
                <div>
                    data client
                </div>
            </h1>
        </div>
    )
}