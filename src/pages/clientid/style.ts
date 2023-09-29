import styled from "styled-components";


export const ContainerClientId = styled.div`
  min-height: 80vh;
  background-color: rgb(249, 250, 251);
  font-family:'Inter', sans-serif;
`;
export const ContainerInfoClientId  = styled.div`
 width: 50%;
 padding: 20px;
 height: 70vh;
 margin-left: 10px;
 box-shadow: 4px 2px 4px rgba(220,220,220, 998);
 background-color: #fff;

`
export const Title = styled.p`
 margin-left: 20px;
 margin-top: 10px;
 margin-bottom: 10px;
 display: block;
`;
export const ContainerDetailsInfo = styled.div`
height: 40vh;
 p{
    font-size:1.3rem;
    display: block;
    margin-top: 20px;
 }
`;

type Button = {
  bgColor: string,
  hover: string,
}
export const ButtonContainer = styled.div`
 
`;

export const Button = styled.button<Button>`
  width: 100%;
  height: 50px;
  margin-top:6px;
  color: #fff;
  font-size:1rem;
  border: none;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  text-transform: capitalize;
  &:hover{
    background-color:${props => props.hover}
  }
`