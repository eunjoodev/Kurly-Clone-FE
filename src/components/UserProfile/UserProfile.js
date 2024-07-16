import React, { useState } from "react";

import UserInfo from "../UserprofileItems/UserInfo";
import Favorites from "../UserprofileItems/Favorites";
import OtherMenus from "../UserprofileItems/OtherMenus";
import OrderList from "../UserprofileItems/OrderList";
import WishList from "../UserprofileItems/WishList";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const UserProfile = () => {
  const [datas, setDatas] = useState([
    {
      title: "테스트1",
      date: new Date(2024, 2, 20),
    },
    {
      title: "테스트2",
      date: new Date(2023, 10, 11),
    },
  ]);

  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/orders" />;
  }

  return (
    <>
      <div className="flex items-start justify-center gap-5 pt-[50px] pb-20">
        <div className="overflow-hidden min-w-[375px] max-w-[375px] rounded-2xl">
          <UserInfo />
          <Favorites />
          <OtherMenus />
        </div>
        <Outlet context={{ orders: datas }} />
      </div>
    </>
  );
};

export default UserProfile;
