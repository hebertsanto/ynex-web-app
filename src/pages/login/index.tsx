import React, { useEffect } from 'react';
import { Button, Form, HeaderForm, SubForm, ContainerForm } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Error } from '../../components/error';
import { emailIsRequired, emailIsValid, passwordIsRequired, passwordLength } from '../../components/error/messages';
import axios from 'axios';
import { toast } from 'react-toastify';

export const LoginPage: React.FC = () => {
  type inputRegister = {
    name: string,
    password: string,
    email: string,
  };
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<inputRegister>();

  const handleSubmitForm: SubmitHandler<inputRegister> = async data => {
    try {
      //code
      await axios.post('http://localhost:5000/login', {
        email: data.email,
        password: data.password
      })
        .then(res => {
          if (res.data.msg == 'invalid email or password') {
            toast.error('usuário ou senha invalidos');
          } else if (res.data.msg == 'nenhum registro desse email no banco de dados') {
            return toast.error('email não encontrado na base de dados');
          }
          const token = res.data.token;
          const userId = res.data.user._id;
          localStorage.setItem('userId', userId);
          localStorage.setItem('userToken', token);
          navigate('/dashboard');
        })
        .catch(err => {
          console.log(err);
        });

    } catch (error) {
      console.log(error);
    }
  };

  const token = localStorage.getItem('userToken');

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <SubForm>
          <HeaderForm>
            <div>
              <p>Entre na sua conta</p>
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
            <label htmlFor="password">password</label>
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
            bgColor="#111111d3"
            hover='#000000d2'
            color="#fafafa">
            Entrar
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
      <div style={{ width: '50%', height: '100vh' }}>
        <img  style={{ objectFit: 'cover',height:'100%', width: '100%' }} src="https://media.istockphoto.com/id/1428421517/pt/foto/human-resources-and-management-employees-must-complete-the-online-survey-form-answer-the-test.jpg?s=2048x2048&w=is&k=20&c=Up2JP8_4x7MZpNH3n3dNSCn__xl3RUjxoaV8bqMAgA4=" alt="" />
      </div>
    </ContainerForm>
  );
};
