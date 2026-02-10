import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User"
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",   // no leading /
        element: <About />,
      },
      {
        path: "contact", // no leading /
        element: <Contact />,
      },

            { path: "login", element: <Login /> },


            { path: "user/:id", element: <User /> },
            { path: "*", element: <NotFound /> },



    ],
  },
]);

export default router;
