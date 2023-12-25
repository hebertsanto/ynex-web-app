import { AppRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() : React.ReactElement {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
