import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "userprofile",
        element: <UserProfile />,
        children: [
          {
            path: "orders",
            element: <OrderList />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
