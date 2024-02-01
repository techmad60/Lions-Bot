import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx';
import './index.css';
import NotfoundPage from './pages/NotfoundPage.jsx';
import Signup from './pages/SignUpPage.jsx';
import Login from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotfoundPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <NotfoundPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotfoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
