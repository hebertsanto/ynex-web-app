import React, { useEffect } from 'react';
import { Button, Form, HeaderForm, SubForm, ContainerForm } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Error } from '../../components/error';
import { emailIsRequired, emailIsValid, passwordIsRequired, passwordLength } from '../../components/error/messages';
import axios from 'axios';
import { toast } from 'react-toastify';
import { inputRegister } from '../../core/types';

export const LoginPage: React.FC = () => {

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<inputRegister>();

  const handleSubmitForm: SubmitHandler<inputRegister> = async data => {
    try {
      const req = await axios.post('http://localhost:5000/auth/login', {
        email: data.email,
        password: data.password
      });

      if (req.data.msg == 'invalid email or password') {
        return toast.error('invalid email or password');
      }
      if(req.data.msg == 'nenhum registro desse email no banco de dados'){
        return toast.error('email not found on database');
      }

      const token = req.data.token;
      const userId = req.data.user._id;
      localStorage.setItem('userId', userId);
      localStorage.setItem('userToken', token);


    } catch (error) {
      return error;
    }
  };

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [ token ]);

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <SubForm>
          <HeaderForm>
            <div>
              <p>Entrar no sistema</p>
            </div>
          </HeaderForm>
          <div>
            <label htmlFor="email">email</label>
            <input
              style={errors.email && {
                border: '1px solid red'
              }}
              {...register('email', {
                required: true
              })}
              placeholder='digite seu email'
            />
            {errors.email?.type === 'required' && <Error message={emailIsRequired} />}
            {errors.email?.type === 'pattern' && <Error message={emailIsValid} />}
          </div>
          <div>
            <label htmlFor="password">senha</label>
            <input
              {...register('password', {
                required: true,
                minLength: 6
              })}
              placeholder='digite sua senha'
              style={errors.password && { border: '1px solid red' }}
              type='password'
            />
            {errors.password?.type === 'required' && <Error message={passwordIsRequired} />}
            {errors.password?.type === 'minLength' && <Error message={passwordLength} />}
          </div>
          <Button
            type='submit'
            border="none"
            bgColor="#023ad3d2"
            hover='#0713bed2'
            color="#fafafa">
            log in
          </Button>
          <p>
            caso você esteja interessado em testar o funcionamento do sistema
            entre em contato comigo
            <span>
              <strong> hebertsantosdeveloper@gmail.com</strong>
            </span>
          </p>
        </SubForm>
      </Form>
    </ContainerForm>
  );
};
