import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Error } from '../../components/error';
import { toast } from 'react-toastify';
import { FormData } from '../../core/types';
import { Button, Container, Form, FormContainer, TitleComponent } from './style';
import { Link } from 'react-router-dom';

export const AddClient: React.FC = () => {

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const [ cep, setCep ] = useState('');
  const [ adress, setAdress ] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const handleAddClient: SubmitHandler<FormData> = data => {

    axios.post('http://localhost:3000/clients', {
      name: data.name,
      email: data.email,
      cep: data.cep,
      address: data.address,
      phoneNumber: data.tel
    })
      .then(res => {
        if (res.data) {
          toast.success('client add success');
        }else{
          toast.error('something went wrong');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };


  const getACep = (cep: string) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url)
      .then(res => {
        const { data } = res;
        setAdress(`${data.logradouro}`);
      })
      .catch(error => {
        return error;
      });
  };

  useEffect(() => {
    if (cep.length === 8) {
      getACep(String(cep));
    }
  }, [ cep ]);

  return (
    <Container>
      <Link to="/">back to home</Link>
      <FormContainer>
        <TitleComponent>register a new client</TitleComponent>
        <Form onSubmit={handleSubmit(handleAddClient)}>
          <div>
            <label htmlFor="name">name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              name="name"
              placeholder="type name client"
            />
            {errors.name?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              {...register('email',
                {
                  required: true,
                  pattern: emailRegex
                })}
              type="email"
              name="email"
              placeholder="type an email address"
            />
            {errors.email?.type === 'required' && <Error message="campo obrigatório" />}
            {errors.email?.type === 'pattern' && <Error message="insira um email válido" />}
          </div>
          <div>
            <label htmlFor="cep">cep</label>
            <input
              {...register('cep', { required: true })}
              type="text"
              name="cep"
              placeholder="type your cep"
              onChange={e => setCep(e.target.value)}
            />
            {errors.cep?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="address">adress</label>
            <input
              {...register('address', { required: true })}
              type="text"
              name="address"
              placeholder="type address"
              value={adress}
            />
            {errors.address?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="tel">phone number</label>
            <input
              {...register('tel', { required: true })}
              type="tel"
              name="tel"
              placeholder="type a phone number"
            />
            {errors.tel?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <Button
            width="100%"
            height="60px"
            type="submit">register</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};
