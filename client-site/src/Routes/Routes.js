import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import UnKnownRoutes from "./UnKnownRoutes";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Menu from "../Pages/Menu/Menu";
import Locations from "../Pages/Locations/Locations";
import Rewards from "../Pages/Rewards/Rewards";
import GiftCards from "../Pages/GiftCards/GiftCards";
import Food from "../Pages/Food/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <UnKnownRoutes></UnKnownRoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/menu/:name",
        element: <Food></Food>,
        loader: ({ params }) =>
          fetch(`https://food-shop-server-site.vercel.app/menu/${params.name}`),
      },

      {
        path: "/rewards",
        element: <Rewards></Rewards>,
      },
      {
        path: "/locations",
        element: <Locations></Locations>,
      },
      {
        path: "/gift-card",
        element: <GiftCards></GiftCards>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
