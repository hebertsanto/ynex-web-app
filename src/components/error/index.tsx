import React  from 'react';
import { ErrorMessage } from './style';

type Message = {
    message: string;
}
export const Error : React.FC<Message> = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};
