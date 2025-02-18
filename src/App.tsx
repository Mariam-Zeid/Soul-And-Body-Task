import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
