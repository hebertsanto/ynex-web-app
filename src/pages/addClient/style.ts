import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  font-family: 'Inter', sans-serif;
`;

export const FormContainer = styled.div`
  min-height: 80%;
  background-color: #fff;
  padding: 30px;
  width: 40vw;
  box-shadow: 4px 2px 4px rgba(220,220,220, 998);
  margin:1vh auto;

`

export const Form = styled.form`
div{
  margin-top: 10px;
}
 div input{
    width: 100%;
    height: 50px;
    border: 1px solid gainsboro;
    outline: none;
    padding-left: 15px;
    &:hover{
      border: 1px solid gray;
    }
    &:focus{
        border: 2px solid rgba(24, 120, 231, 0.8);
    }

 }
 div label{
  font-size: 1rem;

  display: block;
  margin-top: 10px;
  margin-bottom: 12px;
 }
`;

type Button = {
    width: string,
    height: string
}
export const Button = styled.button<Button>`
 width: ${props => props.width};
 margin-top: 10px;
 height:${props => props.height} ;
 background-color:  rgba(24, 120, 231, 0.8);
 color: #fff;
 border: none;
 cursor: pointer;
 font-size: 1.1rem;
`
export const TitleComponent = styled.p`
font-size: 2rem;
`