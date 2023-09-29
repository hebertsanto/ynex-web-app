import styled from "styled-components";

export const TableClientsContainer = styled.div`
  padding:30px;
  margin-top: 5px;
  width: 90vw;
`;

export const Table = styled.table`
 width: 100%;
 font-size: 1rem;
 background-color: #fff;
 text-align: center;
 border-bottom: 1px solid gainsboro;
 border-collapse: collapse;
 th{
  text-transform: capitalize;
  padding: 15px;
  font-weight: bold;
  border-bottom: 1px solid #d3d3d3;
  color: rgba(20, 20, 20,908)
 }
  td{
    background-color: #fff;
    border-bottom: 1px solid #f3f3f3;;
    color: rgba(100,100,100,890);
    padding: 10px;
  }
  td button   {
    padding: 8px;
    cursor: pointer;
    border: none;
  }
`;