import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import BrainyHub from "../../BrainyHub/BrainyHub";
import Bsarees from "../../Bsarees/Bsarees";
import DoctorG from "../../DoctorG/DoctorG";
import Error from "../../Error/Error";
import Home from "../../Home/Home/Home";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/bsarees',
          element: <Bsarees></Bsarees>
        },
        {
          path: '/doctorg',
          element: <DoctorG></DoctorG>
        },
        {
          path: '/brainyhub',
          element: <BrainyHub></BrainyHub>
        }
        ]
    }
  ]);

  export default router;