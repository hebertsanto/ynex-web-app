import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Container, Form, FormContainer, TitleComponent } from "./style";
import React, { useEffect, useState } from "react";
import { Error } from '../../components/error'
import axios from "axios";

export const AddClient: React.FC = () => {
  
    type FormData = {
        id: 1,
        name: string,
        email: string,
        cep: string,
        address: string,
        tel: string,
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const handleAddClient: SubmitHandler<FormData> = (data) => {
        console.log(data);
        if (data) {
            alert('faz o post')
        }
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const [cep, setCep] = useState('');
    const [adress, setAdress] = useState('');

    const getACep = (cep: string) => {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        axios.get(url)
            .then(res => {
                const { data } = res;
                setAdress(`${data.logradouro}, ${data.localidade}`)
            })
            .catch(error => {
                return error;
            })
    }

    useEffect(() => {
        if(cep.length === 8){
            getACep(String(cep))
        }
    }, [cep])

    return (
        <Container>
            <FormContainer>
                <TitleComponent>register a client</TitleComponent>
                <Form onSubmit={handleSubmit(handleAddClient)}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            name="name"
                            placeholder="type name client"
                        />
                        {errors.name?.type === "required" && <Error message="campo obrigatório" />}
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            {...register("email",
                                {
                                    required: true,
                                    pattern: emailRegex
                                })}
                            type="email"
                            name="email"
                            placeholder="type an email address"
                        />
                        {errors.email?.type === "required" && <Error message="campo obrigatório" />}
                        {errors.email?.type === "pattern" && <Error message="insira um email válido" />}
                    </div>
                    <div>
                        <label htmlFor="cep">cep</label>
                        <input
                            {...register("cep", { required: true })}
                            type="text"
                            name="cep"
                            placeholder="type your cep"
                            onChange={(e) => setCep(e.target.value)}
                        />
                        {errors.cep?.type === "required" && <Error message="campo obrigatório" />}
                    </div>
                    <div>
                        <label htmlFor="address">adress</label>
                        <input
                            {...register("address", { required: true })}
                            type="text"
                            name="address"
                            placeholder="type address" 
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                            />
                          {errors.address?.type === "required" && <Error message="campo obrigatório" />}
                    </div>
                    <div>
                        <label htmlFor="tel">phone number</label>
                        <input
                            {...register("tel", { required: true })}
                            type="tel"
                            name="tel"
                            placeholder="type a phone number"
                        />
                        {errors.tel?.type === "required" && <Error message="campo obrigatório" />}
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