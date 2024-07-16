import React from "react";

const WishList = () => {
  return (
    <div className="w-[650px] min-w-[650px] max-w-[650px] rounded-2xl bg-white">
      <div className="flex justify-between my-0 mx-5 pt-[25px] px-0 pb-5 border-b-2 border-solid border-[#333333]">
        <div className="flex items-end">
          <h2 className="font-medium text-xl">찜한 상품</h2>
          <span className="pl-2 text-[13px] text-[#999999] leading-5">
            찜한 상품은 최대 200개까지 저장됩니다.
          </span>
        </div>
      </div>
      <div className="m-0 px-5">
        <div className="flex flex-col items-center justify-center text-center leading-normal w-full h-[700px]">
          <img src="assets/heartGray.svg" className="overflow-hidden" alt="" />
          <p className="block mx-0 mb-5 text-base text-[#b5b5b5] text-center font-normal">
            찜한 상품이 없습니다.
          </p>
          <button className="block py-0 px-2.5 text-center overflow-hidden w-[146px] h-[44px] rounded-[22px] text-white bg-[#5f0080] border-0">
            <span className="inline-block font-semibold text-base">
              베스트 상품 보기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
