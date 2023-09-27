import React from "react";
import { HeaderStyle, NavLinks } from './style'
import { Link } from "react-router-dom";

export const Header : React.FC = () => {
    return(
        <HeaderStyle>
            <div>
              <h1>ynex</h1>
            </div>
          <div>
           <NavLinks>
             <li>
             </li>
            </NavLinks>
          </div>
        </HeaderStyle>
    )
}