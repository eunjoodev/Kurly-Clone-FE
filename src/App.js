import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import CreateAccount from "./components/CreateAccount";
import HeaderLayout from "./pages/HeaderLayout.js";
import Main from "./pages/Main/Main.js";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";
import Login from "./components/login/Login";

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
      // { path: "/detail", element: <Detail /> },
      // 추가 라우트 정의
    ],
  },
  // 추가 라우트 정의 가능
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
