import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '../style/global';
import { PageDefault } from '../pages/pageDefault';
import { HomePage } from '../pages/home';
import { ClientIdComponent } from '../pages/clientid';
import { AddClient } from '../pages/addClient';
import React from 'react';
import { LoginPage } from '../pages/login';

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
          <Route path='/dashboard/' element={<HomePage />} />
          <Route path='/dashboard/contribuidor/*' element={<Navigate to='/dashboard' replace />}/>
          <Route path='/dashboard/contribuidor/novo' element={<AddClient />} />
          <Route path='/dashboard/contribuidor/:id' element={<ClientIdComponent />} />
        </Route>
      </Routes>
      <Global />
    </Router>
  );
};
