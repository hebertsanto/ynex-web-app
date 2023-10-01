import React from 'react';
import { HeaderStyle, NavLinks } from './style';
import Logo from '../../../public/logo.svg';
import { Link } from 'react-router-dom';

export const Header : React.FC = () => {
  return(
    <HeaderStyle>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
      }}>
        <img src={Logo}
          alt="logo image"
          width={35}
        />
        <p>ynex.</p>
      </div>
      <div>
        <NavLinks>
          <li>
            <Link to="/account">
               charts
            </Link>
          </li>
          <li>
            <Link to="/account">
               your account
            </Link>
          </li>
        </NavLinks>
      </div>
    </HeaderStyle>
  );
};
