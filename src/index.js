import './index.css';
import './fonts/fonts.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.js';
import Login from './components/login/Login.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
	{
		path: '/login',
		element: <Login />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
