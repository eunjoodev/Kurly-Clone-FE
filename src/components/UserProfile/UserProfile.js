import React from "react";

import UserInfo from "../UserprofileItems/UserInfo";
import Favorites from "../UserprofileItems/Favorites";
import OtherMenus from "../UserprofileItems/OtherMenus";
import OrderList from "../UserprofileItems/OrderList";

const UserProfile = () => {
  return (
    <>
      <div className="flex items-start justify-center gap-5 pt-[50px] pb-20">
        <div className="overflow-hidden min-w-[375px] max-w-[375px] rounded-2xl">
          <UserInfo />
          <Favorites />
          <div className="bg-white">광고입니다</div>
          <OtherMenus />
        </div>
        <OrderList />
      </div>
    </>
  );
};

export default UserProfile;
