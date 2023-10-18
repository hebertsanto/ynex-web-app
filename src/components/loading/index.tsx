import React from 'react';
import style from './loading.module.css';

export const Loading : React.FC = () => {
  return(
    <div className={style.spiner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
};
