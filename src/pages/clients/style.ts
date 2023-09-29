import styled from "styled-components";

export const TableClientsContainer = styled.div`
  padding:30px;
  margin-top: 5px;
  width: 80vw;
`;

export const Table = styled.table`
 width: 100%;
 font-size: 0.8rem;
 text-align: center;
 padding: 0.9rem;
 border-bottom: 1px solid gainsboro;
 border-collapse: collapse;
 th{
  text-transform: capitalize;
  padding: 10px;
  font-weight: bold;
  border-bottom: 1px solid gainsboro;
  color: rgba(70, 70, 70,908)
 }
 thead{
  background-color: #f4f4f4;
 }
  td{
    border-bottom: 1px solid gainsboro;
    color: gray;
    padding: 10px;
  }
  td button{
    border: 1px solid gainsboro;
    padding: 5px;
    cursor: pointer;
    &:hover{
      background-color: gainsboro;
    }
  }
`;