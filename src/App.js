import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import HeaderLayout from "./pages/HeaderLayout";
import Main from "./pages/Main/Main";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile/UserProfile";
import OrderList from "./components/UserprofileItems/OrderList";
import WishList from "./components/UserprofileItems/WishList";
// import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "cart", element: <ShoppingCart /> },
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
      // { path: "login", element: <Login /> }, 효준:로그인 엘리먼트 추가
    ],
  },
]);

function App() {
  return (
    // <AuthProvider>
    <RouterProvider router={router} />
    // {/* </AuthProvider> */}
  );
}

export default App;
