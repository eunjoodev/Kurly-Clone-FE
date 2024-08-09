import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil"; // RecoilRoot 추가
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import HeaderLayout from "./pages/HeaderLayout.js";
import Main from "./pages/Main/Main.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";
import Login from "./components/login/Login";
import FindLogin from "./components/login/FindLogin";
import FindPassword from "./components/login/FindPassword";
import Info from "./components/UserprofileItems/OtherMenusItem/Info.js";
import Address from "./components/UserprofileItems/OtherMenusItem/Address.js";

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
          {
            path: "info",
            element: <Info />,
          },
          {
            path: "address",
            element: <Address />,
          },
        ],
      },
      {
        path: "reset-username",
        element: <FindLogin />,
      },
      {
        path: "reset-password",
        element: <FindPassword />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      {" "}
      {/* RecoilRoot로 애플리케이션 감싸기 */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default App;
