import { createBrowserRouter,  Outlet } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from '../components/Navbar';

import Notebook from '../pages/Notebook';
import Credits from '../pages/Credits';
import Sections from '../pages/Sections';
import Meals from '../pages/Meals';
import Notes from '../pages/Notes';
import Banks from '../pages/Banks';


import echoway from './echoway';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/credits',
        element: <Credits />,
      },
      {
        path: '/sections',
        element: <Sections />,
      },
      {
        path: '/meals',
        element: <Meals />,
      },

      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/banks',
        element: <Banks />,
      },
      echoway
      // {
      //   path: '/car-routes',
      //   element: <CarRoutes />,
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/notebook',
    element: <Notebook />,
  }, 
]);

export default router;
