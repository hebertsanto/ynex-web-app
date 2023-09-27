import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7vh;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid gainsboro;

  div p{
    font-size:2rem;
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
        text-decoration:none;
    }
 }
`;