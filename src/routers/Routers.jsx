import React from 'react';
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import List from '../components/List/List';
import Create from '../components/Create/Create';
import Actualizar from '../components/UpDate/Actualizar';

const Routers = () => {
  return (
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<List/>}></Route>
            <Route path='/crear' element={<Create/>}></Route>
            <Route path='/actualizar/:identity' element={<Actualizar/>}></Route>
            <Route path='*' >No encontrada</Route>
         </Routes>
        </BrowserRouter>
   
  )
}

export default Routers;