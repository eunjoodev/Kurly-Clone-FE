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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/account", element: <CreateAccount /> },
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
      //  path 하고 큰 따옴표 다음에 경로, element 다음에 .js 이름 적어수면 돼요
    ],
  },
  // { path: "login", element: <Loign/>}
  // 추가 라우트 정의
]);

function App() {
  return <RouterProvider router={router} />;
  return (
    <>
      <CreateAccount/>
    </>
  );
}

export default App;
