import React from 'react';
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Calculator from '../pagesJS/calculator/Calculator';
import App from '../app/app';
import Slider from '../pagesJS/slider/Slider';
import AboutBlock from '../about-block/about-block';


const router = createBrowserRouter([
  {
      path: "/",
      errorElement: <ErrorPage/>,
      element: <App/>},
    {path: '/home',
    element: <App/>},

    {path: '/calculator',
    element: <Calculator/>
    },

    {path: '/slider',
    element: <Slider/>
    },


    
  ]); 

const MyRoutes = () => {
    return (
        <>
          <RouterProvider router={router} />  
        </>
    );
};

export default MyRoutes;