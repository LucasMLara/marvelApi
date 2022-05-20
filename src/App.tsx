import { useEffect } from 'react';

import { characterRequest } from './api/marvel';

function App() {
  useEffect(() => characterRequest().then(console.log), []);

  return (
    <h1>alo</h1>
  );
}

export default App;
