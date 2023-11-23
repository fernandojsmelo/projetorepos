import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/repositorio/:repositorio" component={Repositorio} />

      </Routes>
    </BrowserRouter>
  );
}