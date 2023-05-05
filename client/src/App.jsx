import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import UpdatePage from "./pages/UpdatePage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "/", element: <Home /> },
        { path: "/restaurants/:id/update", element: <UpdatePage /> },
        { path: "/restaurants/:id", element: <RestaurantDetailPage /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
