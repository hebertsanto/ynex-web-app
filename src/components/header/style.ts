import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7vh;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;

  div p{
    font-size:1rem;
  }
`;

export const NavLinks = styled.ul`
 display: flex;
 align-items: center;
 gap: 20px;
 li{
    list-style: none;
    a{
        color: black;
        text-decoration:underline;
    }
 }
`;
