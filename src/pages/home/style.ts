import styled from "styled-components";


export const Container = styled.div`
  height: 80vh;
`;
export const SubContainer = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content:center;
  width: 100vw;
  div p{
    margin-left: 30px;
    font-family: 'Inter';
    font-size: 1.5rem;
  }
`;

export const Search = styled.input`
  width: 500px;
  height: 40px;
  margin-left: 30px;
  border: 1px solid gainsboro;
  margin-top: 10px;
  padding-left: 10px;
  outline: none;

  &:focus{
    border: 1px solid rgba(0, 0, 0, 0.8);;
  }
`;
export const ButtonRegisterAClient = styled.button`
  width: 200px;
  height: 40px;
  margin-left: 50px;
  background-color:  rgba(24, 120, 231, 0.8);
  cursor: pointer;
  color: #fff;
  font-family: roboto;
  font-size: 0.9rem;
  border:none;
`