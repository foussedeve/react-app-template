import React, { lazy, Suspense, } from 'react'
import SimpleLoader from './shared/loaders/simpleLoader';
import { AuthProvider } from './utility/context/authContext';
import './App.css';

function App() {
  const LazyRoute = lazy(() => import('./router/configRoutes'))

  return (
    <>
      <Suspense fallback={<SimpleLoader />}>
        <AuthProvider>
          <LazyRoute />
        </AuthProvider>
      </Suspense>
    </>
  );
}

export default App;
