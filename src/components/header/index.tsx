import React from 'react';
import { HeaderStyle, NavLinks } from './style';
import Logo from '../../../public/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Header: React.FC = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
  };

  const token = localStorage.getItem('userToken');
  useEffect(() => {
    if(!token){
      navigate('/login');
    }
  }, [ token ]);
  return (
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
        <p>ynex rh</p>
      </div>
      <div>
        <NavLinks>
          <li>
            <Link to="#" onClick={() => logout()}>
              sair do sistema
            </Link>
          </li>
        </NavLinks>
      </div>
    </HeaderStyle>
  );
};
