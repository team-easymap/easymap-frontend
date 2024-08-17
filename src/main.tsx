import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './globals.css';
import './leaflet.css';

import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
