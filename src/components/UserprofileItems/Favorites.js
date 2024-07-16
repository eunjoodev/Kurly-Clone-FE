import React from "react";
import { Link, useLocation } from "react-router-dom";

const Favorites = () => {
  const location = useLocation();

  const getMenuStyle = (path) => {
    return location.pathname === path ? "text-purple-700" : "text-black";
  };
  const getSrc = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="m-0 py-5 px-[25px] bg-white">
      <div className="w-full pt-3 pb-1.5 font-normal text-sm text-[#b5b5b5]">
        자주찾는 메뉴
      </div>
      <div className="flex-col items-start">
        <Link
          to="/orders"
          className={`flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base cursor-pointer ${getMenuStyle(
            "/orders"
          )}`}
        >
          <img
            src={`${
              getSrc("/orders")
                ? "assets/orderListClick.svg"
                : "assets/orderList.svg"
            }`}
            className="my-0 mr-2 w-7 h-7"
            alt=""
          />
          <div className="gap-0.5 text-base">주문 내역</div>
        </Link>
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base cursor-pointer">
          <img src="assets/coupon.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">
            쿠폰
            <span className="absolute top-5 right-0 font-bold text-base text-[#333333]">
              0
            </span>
          </div>
        </div>
        <Link
          to="/wishlist"
          className={`flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base cursor-pointer ${getMenuStyle(
            "/wishlist"
          )}`}
        >
          <img
            src={`${
              getSrc("/wishlist") ? "assets/heartClick.svg" : "assets/heart.svg"
            }`}
            className="my-0 mr-2 w-7 h-7"
            alt=""
          />
          <div className="gap-0.5 text-base">
            찜한 상품
            <span className="absolute top-5 right-0 font-bold text-base text-[#333333]">
              0
            </span>
          </div>
        </Link>
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base cursor-pointer">
          <img src="assets/often.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">자주 구매</div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
