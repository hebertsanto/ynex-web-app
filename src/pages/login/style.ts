import styled from 'styled-components';
import { ButtonStyleProp } from '../../core/types';

export const Form = styled.form`
padding-top: 10vh;
height:auto;
padding: 10px;
margin-top: 10vh;
 label{
    font-family: 'Inter', sans-serif;
    color: rgba(50,50,50,980);
    margin-top: 10px;
    margin-left: 10px;
    font-weight: 500;
    margin-bottom: 10px;
    display: block;
    font-size: 1rem;
 }
 input{
     display: block;
     width: 97%;
    margin-left: 5px;
     height:45px;
     font-size: 0.8rem;
     padding-left: 10px;
     outline: none;
     border: 1px solid rgba(170,170,170,0.789);
     &:hover{
      border: 1px solid  rgba(10,10,10,0.789);
     }
     &:focus{
      transition: 20ms;
        border: 2px solid rgba(0, 0,0, 0.8);
     }

 }
 @media (max-width: 1000px){
   display: flex;
   align-items: none;
   padding-top: 0px;
   width: 98vw;
   ;
 }
`;

export const SubForm = styled.div`
 width: 37vw;
 border: 1px solid rgba(230,230,230,890);
 border-radius: 5px;
 height: 50vh;
 box-shadow: 7px 8px 9px rgba(208, 208, 208, 0.8);
 @media (max-width: 1000px){
    padding: 0px;
    height: auto;
    justify-content: center;
    width: 80vw;
 }
 p{
   margin-top: 20px;
 }
`;
export const HeaderForm = styled.div`
 p{
   text-align: center;
   margin-top: 8px;
   margin-bottom: 10px;
   font-size: 2.45rem;
   color: rgba(50,50,50,980);
 }
 @media (max-width: 1000px){
      h1{
         font-size: 1rem;
      }
   }
`;
export const Button = styled.button<ButtonStyleProp>`
    margin: 10px 2px;
    border: none;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    width: 97%;
    margin-left: 5px;
    height:50px;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    cursor: pointer;
    border: ${props => props.border};
    &:hover{
      transition: 100ms;
      border: ${props => props.borderHover};
      background-color: ${props => props.hover};
    }
    @media (max-width: 1000px){
      width: 100%;
      height: 50px;
      margin-top: 3px;
      font-size: 0.8rem;
   }
`;


export const ContainerForm = styled.section`
   width: 99vw;
   height: auto;
   display: flex;
   justify-content: center;
   gap: 40px;
   @media (max-width: 1000px){
     width: 100vw;
   }
`;

