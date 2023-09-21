import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Mylogin from './modules/auth/Mylogin';
import Myregistor from './modules/auth/Myregistor';
import Errorpage from './modules/shares/Errorpage';
import Landingpage from './modules/dashboard/Landingpage';
import Mynavbar from './modules/shares/Mynavbar';
import "./modules/css/global.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
          <Route path='' element={<Mylogin/>}/>
          <Route path='registor' element={<Myregistor/>}/>
          <Route path='dashboard' element={<Landingpage/>}/>

          <Route path='*' element={<Errorpage/>}/>

        
        </Routes> 
     
     </BrowserRouter>


  </React.StrictMode>
);

