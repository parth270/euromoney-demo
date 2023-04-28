import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Charts from "./routes";
import RealView from "./routes/real-view";
import { Provider } from "react-redux";
import { store } from "./services/store";
import Keynote from "./routes/keynote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RealView />,
  },
  {
    path: "real-view",
    element: <Charts />,
  },
  {
    path: "keynote",
    element: <Keynote/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
