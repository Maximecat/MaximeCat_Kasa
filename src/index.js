import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './pages/Home/App';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error404 from './pages/404/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/housing/:id",
    element: <Housing />
  },
  {
    path: "/*",
    element: <Error404 />
  }
])

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);