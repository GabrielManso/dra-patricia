import React from 'react';
import { useLocation } from 'react-router';

import Routes from './Routes';

const App = () => {

  const location = useLocation()

  console.log(location.pathname);

  return (
    <div>
       <Routes />
    </div>
  );
}

export default App;
