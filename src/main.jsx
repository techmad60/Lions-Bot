import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
