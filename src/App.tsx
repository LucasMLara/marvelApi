import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {useEffect} from 'react';
import Router from './routes';
import './App.css';

import {characters} from './api/marvel';

function App() {
  useEffect(() => {
    characters().then(console.log);
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
