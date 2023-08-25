import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Calculator from '../pagesJS/calculator/Calculator';
import App from '../app/app';
import Slider from '../pagesJS/slider/Slider';
import Timer from '../pagesJS/timer/Timer';
import ToDoApp from '../pagesJS/toDo/ToDoApp';
import Modal from '../pagesJS/modal/Modal';



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

    {path: '/timer',
    element: <Timer/>
    },

    {path: '/todo',
    element: <ToDoApp/>
    },

    {path: '/modal',
    element: <Modal/>
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