import React, { Suspense } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';

import { getAllRoutes } from './route/routes';

export default function App() {
  const routes = useRoutes(getAllRoutes())
  return (
    <div className="App">
      <Suspense fallback={<h1>loading...</h1>}>
        {routes}
      </Suspense>
    </div>
  );
}

