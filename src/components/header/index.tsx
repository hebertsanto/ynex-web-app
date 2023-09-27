import React from "react";
import { HeaderStyle, NavLinks } from './style'

export const Header : React.FC = () => {
    return(
        <HeaderStyle>
            <div>
               <p>ynex</p>
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