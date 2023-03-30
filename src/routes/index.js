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
import Oil from '../pages/Oil'
import Balances from '../pages/Balances'
import CurrencyConverter from '../pages/CurrencyConverter'
import Flashcard from '../pages/Flashcard';

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
        path: '/flashcard',
        element: <Flashcard />,
      },
      {
        path: '/currency-converter',
        element: <CurrencyConverter />,
      },
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
      {
        path: '/oil',
        element: <Oil />,
      },
      {
        path: '/balances',
        element: <Balances />,
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
