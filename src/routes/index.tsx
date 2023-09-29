import { BrowserRouter as Router, Routes, Route,  Navigate, } from 'react-router-dom'
import { Global } from '../style/global'
import { PageDefault } from '../pages/pageDefault'
import { HomePage } from '../pages/home'
import { ClientIdComponent } from '../pages/clientid'
import { AddClient } from '../pages/addClient'
import React from 'react'

export const AppRoutes : React.FC = () => {
    return(
     <Router>
        <Routes >
         <Route 
          path='/' 
          element={<Navigate to='/dashboard' replace/>}
         />
         <Route path='/' element={<PageDefault />}>
          <Route path='/dashboard' element={<HomePage />}/>
          <Route path='/dashboard/client/new' element={<AddClient />}/>
          <Route path='/dashboard/client/:id' element={<ClientIdComponent />}/>
          <Route path='*' element={<div>page not found</div>}/>
         </Route>
        </Routes>
        <Global />
     </Router>
    )
}