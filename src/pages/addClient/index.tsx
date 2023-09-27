import { useNavigate } from "react-router-dom"
import { Button, Container, Form, FormContainer } from "./style";
import { FormEvent } from "react";

export const AddClient = () => {

    const navigate = useNavigate();

    const handleAddClient = (e: FormEvent) => {
        e.preventDefault();
        alert('fazer o post pra api')
    }
    return(
        <Container>
            <Button
            width="200px"
            height="30px"
            style={{
                borderRadius: '5px',
                margin: '10px',
                fontSize: '0.9rem'
            }} 
            onClick={() => navigate('/dashboard')}>back</Button>
            <FormContainer>
              <h2>register a client</h2>
              <Form onSubmit={handleAddClient}>
                <div>
                    <label htmlFor="name">name</label>
                    <input 
                    type="text" 
                    name="name"
                    placeholder="type name client"
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                    type="email" 
                    name="email"
                    placeholder="type an email address"
                    />
                </div>
                <div>
                    <label htmlFor="address">adress</label>
                    <input 
                    type="tex" 
                    name="adress"
                    placeholder="type address"
                    />
                </div>
                <div>
                    <label htmlFor="tel">tel</label>
                    <input 
                    type="tel"  
                    name="tel"
                    placeholder="type a phone number"
                    />
                </div>
                <Button
                width="100%"
                height="50px"
                type="submit">register</Button>
              </Form>
            </FormContainer>
        </Container>
    )
}