import {
  Routes,
  Route,
} from 'react-router-dom';

import Details from '../pages/details';
import NotFound from '../pages/notfound';
import Home from '../pages/home';

import React from 'react';

export default function Router() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Details />} path='/details' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </>
  );
}
