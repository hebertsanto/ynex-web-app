import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./style";

export const Footer : React.FC = () => {
    return(
        <FooterContainer>
         <p>
            this system was made for <Link to='https://github.com/hebertsanto' target="_blank">hebert</Link>
         </p>
        </FooterContainer>
    )
} 