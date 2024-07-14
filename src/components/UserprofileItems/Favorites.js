import React from "react";

const Favorites = () => {
  return (
    <div className="m-0 py-5 px-[25px] bg-white">
      <div className="w-full pt-3 pb-1.5 font-normal text-sm text-[#b5b5b5]">
        자주찾는 메뉴
      </div>
      <div className="flex-col items-start">
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base">
          <img src="logo.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">주문 내역</div>
        </div>
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base">
          <img src="logo.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">
            쿠폰
            <span className="absolute top-5 right-0 font-bold text-base text-[#333333]">
              0
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base">
          <img src="logo.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">
            찜한 상품
            <span className="absolute top-5 right-0 font-bold text-base text-[#333333]">
              0
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center relative min-w-full font-medium h-[54px] py-4 text-base">
          <img src="logo.svg" className="my-0 mr-2 w-7 h-7" alt="" />
          <div className="gap-0.5 text-base">자주 구매</div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
