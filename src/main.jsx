import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/PortfolioPage";
import ProfilePage from "./pages/ContactPage";
import AboutPage from "./pages/HomePage";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
/*
The code snippet provided demonstrates the configuration of a React Router v6 application using the `createBrowserRouter` function from the `react-router-dom` library.
It sets up the routing behavior for the application, defining routes for different pages and components.

In this example, the application has three main pages: HomePage, ProfilePage, and AboutPage.
The HomePage is the default route and will be rendered when the URL is "/".
The ProfilePage component displays a contact form when accessed with a specific profile ID, and the AboutPage displays information about the application.

The `Outlet` component is used to conditionally render the appropriate page component based on the current URL.
The `RouterProvider` component is used to provide the router context to the application's children.

You can customize the routing behavior by adding more routes, modifying the default route, or using other features provided by the `react-router-dom` library.
system components will be rendered in the `RouterProvider` component that is responsible for routing the application to the appropriate routes.

For more information about routes please see the documentation: https://reactrouter.com/en/main.
*/
