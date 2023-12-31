import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Error } from '../../components/error';
import { FormData } from '../../core/types';
import { Button, Container, Form, FormContainer, TitleComponent } from './style';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { createUser } from '../../core/functions/createClient';
import { emailRegex } from '../../core/utils/emailRegex';

export const AddClient: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const mutation = useMutation(createUser);
  const handleAddClient: SubmitHandler<FormData> = async data => {
    mutation.mutate(data);
  };

  return (
    <Container>
      <Link to="/">voltar ao dashboard</Link>
      <FormContainer>
        <TitleComponent>registrar colaborador</TitleComponent>
        <Form onSubmit={handleSubmit(handleAddClient)}>
          <div>
            <label htmlFor="name">nome completo</label>
            <input
              {...register('name', { required: true })}
              type="text"
              name="name"
              placeholder="nome completo"
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
              placeholder="digite o email do colaborador"
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
              placeholder="cep do colaborador"
            />
            {errors.cep?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="address">endereço</label>
            <input
              {...register('address', { required: true })}
              type="text"
              name="address"
              placeholder="type address"
            />
            {errors.address?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="phoneNumber">telefone</label>
            <input
              {...register('phoneNumber', { required: true })}
              type="text"
              name="phoneNumber"
              placeholder="type a phone number"
            />
            {errors.phoneNumber?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="cpf">cpf</label>
            <input
              {...register('cpf', { required: true })}
              type="text"
              name="cpf"
              placeholder="digite o cpf do colaborador"
            />
            {errors.phoneNumber?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <div>
            <label htmlFor="rg">rg</label>
            <input
              {...register('rg', { required: true })}
              type="text"
              name="rg"
              placeholder="digite o rg do colaborador"
            />
            {errors.phoneNumber?.type === 'required' && <Error message="campo obrigatório" />}
          </div>
          <Button
            disabled={mutation.isLoading}
            width="100%"
            height="60px"
            type="submit">register</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};
