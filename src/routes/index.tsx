import { BrowserRouter as Router, Routes, Route,  Navigate, } from 'react-router-dom'
import { Global } from '../style/global'
import { PageDefault } from '../pages/pageDefault'
import { HomePage } from '../pages/home'
import { ClientIdComponent } from '../pages/clientid'

export const AppRoutes = () => {
    return(
     <Router>
        <Routes >
         <Route 
          path='/' 
          element={<Navigate to='/dashboard' replace/>}
         />
         <Route path='/dashboard' element={<PageDefault />}>
          <Route path='/dashboard' element={<HomePage />}/>
          <Route path='/dashboard/client/:id' element={<ClientIdComponent />}/>
         </Route>
        </Routes>
        <Global />
     </Router>
    )
}