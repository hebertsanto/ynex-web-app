import styled from 'styled-components';

export const TableClientsContainer = styled.div`
  padding:30px;
  margin-top: 5px;
  width: 99vw;
`;

export const Table = styled.table`
 width: 100%;
 font-size: 1rem;
 background-color: #fff;
 border-bottom: 1px solid gainsboro;
 border-collapse: collapse;
 
 th{
  text-align: left;
  padding: 15px;
  font-size:0.9rem;
  border-bottom: 2px solid rgba(225, 225, 225,0.8);
  background-color:rgba(245, 245, 245,0.8);
  color: rgba(60, 60, 60,908);
 }
  td{
    border-bottom: 1px solid #f3f3f3;;
    color: rgba(70,70,70,890);
    padding: 10px;
    font-size:0.9rem;
  }
  td button   {
    padding: 8px;
    cursor: pointer;
    border: none;
  }
  tr{
    background-color: #fff;
    &:hover{
      background-color: rgba(240,240,240,900);
    }
   
  }
`;

export const Container = styled.div`
  min-height: 10vh;
  position: sticky;
  display: flex;
  top: 0;
  background-color:#fff;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  width: 99vw;
  border-bottom: 1px solid #f4f4f4;
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
`;
export const ClientsNotFound = styled.div`
 display: flex;
 align-items:center;
 justify-content: center;
 min-height: 40vw;

 p{
  font-size: 1.3rem;
 }
`;
