import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './globals.css';
import './leaflet.css';

import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
