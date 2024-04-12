import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './components/layout/Main.jsx';
import Home from './components/home/Home.jsx';
import Order from './components/order/Order.jsx';
import About from './components/about/About.jsx';
import Review from './components/Review/Review.jsx';
import Login from './components/login/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/review',
        element:<Review></Review>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
