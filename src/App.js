import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import HeaderLayout from "./pages/HeaderLayout.js";
import Main from "./pages/Main/Main.js";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";
import Login from "./components/login/Login";
import { AuthProvider } from "./context/AuthContext"; // Ensure correct import

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/account", element: <CreateAccount /> },
      { path: "/login", element: <Login /> },
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
