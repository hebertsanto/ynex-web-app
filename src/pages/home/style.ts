import styled from "styled-components";


export const Container = styled.div`
  height: 80vh;
`;
export const SubContainer = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content:center;
  width: 70vw;
  div h3{
    margin-left: 30px;
    font-size: 1.4rem;
  }
`;

export const Search = styled.input`
  width: 500px;
  height: 40px;
  margin-left: 30px;
  border: 1px solid gainsboro;
  margin-top: 10px;
  padding-left: 10px;
  border-radius: 5px;
`;
export const ButtonRegisterAClient = styled.button`
  width: 200px;
  height: 40px;
  margin-left: 50px;
  background-color: rgba(6, 142, 244, 0.8);
  cursor: pointer;
  color: #fff;
  font-family: roboto;
  font-size: 0.9rem;
  border:none;
  &:hover{
    background-color: rgba(6, 142, 244, 909);
  }
`