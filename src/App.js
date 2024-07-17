import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HeaderLayout from "./pages/HeaderLayout.js";
import Main from "./pages/Main/Main.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> }
      // { path: "/detail", element: <Detail /> },
      //  path 하고 큰 따옴표 다음에 경로, element 다음에 .js 이름 적어수면 돼요
    ]
  }
  // { path: "login", element: <Loign/>}
  // 추가 라우트 정의
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
