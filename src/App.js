import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notebook from "./pages/Notebook";
// import Credit from "./pages/Credit";

import Credits from "./pages/Credits";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
       <Navbar/>  
       <Footer/>  
    </div>
   
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
