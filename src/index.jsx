import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {About } from './pages/About';
import {ErrorPage} from './pages/ErrorPage';
import { CentersPage } from './pages/CentersPage/index';
import { CenterDetail } from './pages/CenterDetail/index';
import { Contact } from './pages/Contact';
import './global.css';


const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/about">O nás</Link>
        <span>|</span>
        <Link to="/center">Pobočky</Link>
        <span>|</span>
        <Link to="/contact">Kontakt</Link>
        <Outlet />
      </nav>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
            path: ': id',
            element: <CenterDetail />
          }
        ]
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
  <RouterProvider router={router} />);
