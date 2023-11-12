import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListFligt from "../page/ListFlight/ListFligt";
import Homepage from "../page/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/flight",
    element: <ListFligt />,
  },
]);
