/** Import react routers */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** pages imports */
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import Index from "./pages/Index";

/** action function imports */
import { action as loginAction } from "./pages/authPages/Login.jsx";
import { action as registerAction } from "./pages/authPages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    /** path of children components will be related to the path  of the parent */
    /** children components will be rendered using <Outlet/> */
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
