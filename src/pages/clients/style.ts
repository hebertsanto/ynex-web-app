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
 border: 1px solid gainsboro;
 tr, td, th{
  padding: 15px;
 }
 th{
  padding: 0px;
  font-weight: bold;
  color: rgba(70, 70, 70,908)
 }
  td{
    color: gray;
    margin: 10px;
  }
  tr a{
    margin-top: 20px;
    text-decoration:none;
    color: gray;
    display: block;
  }
`;