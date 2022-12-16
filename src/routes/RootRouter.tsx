import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestuarantPage } from "../pages/resturant-page/RestuarantPage";
import { Joining } from "../pages/user-join/Joining";

const RootRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RestuarantPage />,
    },
    {
      path: "/:slug",
      element: <Joining />,
    },
  ]);

  return <RouterProvider router={routes} />;
};
export default RootRouter;
