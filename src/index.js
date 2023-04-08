import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home/App';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
