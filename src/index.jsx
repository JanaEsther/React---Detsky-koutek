import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { ErrorPage } from './pages/ErrorPage';
import { CentersPage } from './pages/CentersPage/index';
import { CenterDetail } from './pages/CenterDetail/index';
import PriceList from './pages/PriceList';
import { Contact } from './pages/Contact';
import SharedLayout from './pages/SharedLayout';

import './global.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'center',
        element: <CentersPage />,
        children: [
          {
            path: ':id',
            element: <CenterDetail />,
          },
        ],
      },
      {
        path: 'priceList',
        element: <PriceList />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

<createBrowserRouter
  future={{
    v7_relativeSplatPath: true,
  }}
/>;

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
