import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile.js";
import OrderList from "./components/UserprofileItems/OrderList.js";
import WishList from "./components/UserprofileItems/WishList.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="orders" element={<OrderList />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
