import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";

const router = createBrowserRouter([
  {
    // path: "userprofile",
    // element: <UserProfile />,
    // children: [
    //   {
    //     path: "orders",
    //     element: <OrderList />,
    //   },
    //   {
    //     path: "wishlist",
    //     element: <WishList />,
    //   },
    // ],
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
  return (
    // <Router>
    //   <Routes path="/">
    //     <Route path="userprofile" element={<UserProfile />}>
    //       <Route path="orders" element={<OrderList />} />
    //       <Route path="wishlist" element={<WishList />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <RouterProvider router={router} />
  );
}

export default App;
