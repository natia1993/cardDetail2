import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Provider } from 'react-redux'; // ✅ დამატება აუცილებელია
import { store } from './store';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Men from './pages/Men';
import Women from './pages/Women';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// ✅ Router-ის აღწერა
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'women', element: <Women /> },
      { path: 'men', element: <Men /> },
      // { path:"cart", element:<Cart />},
      { path: '*', element: <NotFound /> },
    ],
  },
]);

// ✅ სწორად გახვეული Provider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
