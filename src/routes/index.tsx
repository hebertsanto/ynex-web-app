import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '../style/global';
import { PageDefault } from '../pages/pageDefault';
import { HomePage } from '../pages/home';
import { ClientIdComponent } from '../pages/clientid';
import { AddClient } from '../pages/addClient';
import React from 'react';
import { LoginPage } from '../pages/login';
import { Account } from '../pages/account';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes >
        <Route
          path='/'
          element={<Navigate to='/login' replace />}
        />
        <Route path='/*' element={<div>page not found</div>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<PageDefault />}>
          <Route path='/user/' element={<HomePage />} />
          <Route path='/user/:id/client/new' element={<AddClient />} />
          <Route path='/user/client/:id' element={<ClientIdComponent />} />
          <Route path='/user/account' element={<Account/>} />
        </Route>
      </Routes>
      <Global />
    </Router>
  );
};
