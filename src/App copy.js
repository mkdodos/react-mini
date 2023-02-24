import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notebook from "./pages/Notebook";
// import Credit from "./pages/Credit";

import Credits from "./pages/Credits";
import Sections from "./pages/Sections";
import Meals from "./pages/Meals";
import Notes from "./pages/Notes";
import Banks from "./pages/Banks";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import router from "./routes";




const router123 = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/credits",
        element: <Credits />,
      },
      {
        path: "/sections",
        element: <Sections/>
      },
      {
        path: "/meals",
        element: <Meals/>
      },

      {
        path: "/notes",
        element: <Notes/>
      },

      {
        path: "/banks",
        element: <Banks/>
      },
      
    ],
   
    // path: "/",
    // element: 
    // <>
    //    <Navbar/>  
    //    <Outlet />
    //    <Footer/>  
    // </>
   
  },
  {
    path: "/login",
    element: <Login/>   
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/notebook",
    element: <Notebook/>
  },
  {
    path: "/credits",
    element: <Credits/>
  },
  
]);


function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
