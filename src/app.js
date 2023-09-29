import React from "react";
import ReactDOM from "react-dom";
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AboutUs from "./About";
import RouterError from "./RouterError";
import ContactUs from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/",
       element: <Body /> },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <RouterError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
