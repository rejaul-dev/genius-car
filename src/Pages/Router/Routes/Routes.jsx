import Root from "../../../Layout/Root";
import Checkout from "../../Checkout/Checkout";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Orders from "../../Orders/Orders";
import SignUp from "../../Register/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path:'/orders',
        element:<Orders/>
      },
    ],
  },
]);

export default router;
