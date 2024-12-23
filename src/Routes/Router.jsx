import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayoutComponets/Main";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        // {
        //   path: '/',
        //   element:
        //     <Home></Home>
          
        // },
        // {
        //   path: '/myVisaApplications',
        //   element: <PrivetRouter>
        //     <MyVisaApplications></MyVisaApplications>
        //   </PrivetRouter>
        // },
        // {
        //   path: '/allVisas',
        //   element: <AllVisas></AllVisas>,
        //   loader: () => fetch('https://visa-navigator-server-nu.vercel.app/visa')
        // },
        // {
        //   path:"/visa/:id",
        //   element: <PrivetRouter>
        //     <DetailsVisa></DetailsVisa>
        //   </PrivetRouter>,
        //   loader: ({ params }) =>
        //     fetch(`https://visa-navigator-server-nu.vercel.app/visa/${params.id}`).then((res) =>
        //         res.json()
        //     ),
        // },
        // {
        //   path: '/addVisa',
        //   element: <PrivetRouter>
        //     <AddVisa></AddVisa>
        //   </PrivetRouter>
        // },
        // {
        //   path: '/myAddedVisas',
        //   element: <PrivetRouter>
        //     <MyAddedVisas></MyAddedVisas>
        //   </PrivetRouter>
        // },
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