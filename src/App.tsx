import Login from "./pages/login";
import Home from "./pages/home";
import HowUse from "./pages/how-use";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/how-use",
      element: <HowUse />,
    },
  ]);

  return <RouterProvider router={router} />;
  
}