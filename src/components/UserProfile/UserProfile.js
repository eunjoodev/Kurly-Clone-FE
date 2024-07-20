import React, { useState } from "react";

import UserInfo from "../UserprofileItems/UserInfo";
import Favorites from "../UserprofileItems/Favorites";
import OtherMenus from "../UserprofileItems/OtherMenus";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const UserProfile = () => {
  const [datas, setDatas] = useState([
    {
      title: "[루스티켈라] 파스타면 7종 외 1건",
      date: new Date(2024, 2, 20, 12, 23),
      payment: "카카오페이",
      price: 30000,
      delivery: "배송 완료",
    },
    {
      title: "[기획특가] 1+등급 무항생제 백색 대란 20구(벚꽃에디션) 외 2건",
      date: new Date(2023, 10, 11, 19, 48),
      payment: "신용카드",
      price: 1700,
      delivery: "배송 완료",
    },
  ]);

  const location = useLocation();

  if (location.pathname === "/userprofile") {
    return <Navigate to="/userprofile/orders" />;
  }

  return (
    <div className="relative min-w-[1050px] bg-[#f2f5f8]">
      <div className="flex items-start justify-center gap-5 pt-[50px] pb-20">
        <div className="overflow-hidden min-w-[375px] max-w-[375px] rounded-2xl">
          <UserInfo />
          <Favorites />
          <OtherMenus />
        </div>
        <Outlet context={{ orders: datas }} />
      </div>
    </div>
  );
};

export default UserProfile;
