import React from 'react';
import {useEffect} from 'react';

import {characters} from './api/marvel';

function App() {
  useEffect(() => {
    characters().then(console.log);
  }, []);

  return (
    <h1>alo</h1>
  );
}

export default App;
