import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";

//Whole app layout
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
//Optimisation of code => Chunking
const About = lazy(() => {
  return import("./components/About.jsx");
});

//Creating router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
    errorElement: <Error />,
  },
]);

//Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering App
root.render(<RouterProvider router={appRouter} />);
