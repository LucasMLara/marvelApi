import { useEffect } from 'react';

import { axiosClient } from './api/marvel';

function App() {
  useEffect(() => axiosClient.get('characters').then(console.log), []);

  return (
    <h1>alo</h1>
  );
}

export default App;
