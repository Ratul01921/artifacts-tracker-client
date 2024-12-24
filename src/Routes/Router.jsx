import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayoutComponets/Main";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtifacts from "../LayoutComponets/AllArtifacts";
import AddArtifacts from "../LayoutComponets/AddArtifacts";
import MyArtifacts from "../LayoutComponets/MyArtifacts";
import LikeArtifacts from "../LayoutComponets/LikeArtifacts";
import PrivetRouter from "./PrivetRouter";
import Home from "../LayoutComponets/Home";
import DetailsArtifact from "../Pages/DetailsArtifact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home>
          
        },
        {
          path: '/allArtifacts',
          element:<AllArtifacts></AllArtifacts>,
          loader: () => fetch('http://localhost:5555/artifacts')
            
        },
        {
          path: '/addArtifacts',
          element:<PrivetRouter><AddArtifacts></AddArtifacts></PrivetRouter> ,
          
        },
        {
          path:"/artifact/:id",
          element: <PrivetRouter>
            <DetailsArtifact></DetailsArtifact>
          </PrivetRouter>,
          loader: ({ params }) =>
            fetch(`http://localhost:5555/artifact/${params.id}`).then((res) =>
                res.json()
            ),
        },
        {
          path: '/myArtifacts',
          element: <PrivetRouter>
            <MyArtifacts></MyArtifacts>
          </PrivetRouter>
        },
        {
          path: '/likedArtifacts',
          element: <PrivetRouter>
            <LikeArtifacts></LikeArtifacts>
          </PrivetRouter>
        },
        {
          path: '/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/register',
          element: <Register></Register>
        }
  
      ]
    },
  ]);
  
  export default router;