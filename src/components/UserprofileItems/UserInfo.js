import React from "react";

const UserInfo = () => {
  return (
    <div className="mb-2 pt-6 px-5 pb-5 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-medium text-xl text-ellipsis whitespace-nowrap ">
            반가워요!
          </div>
          <div className="font-medium text-xl text-ellipsis whitespace-nowrap ">
            사용자님
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-[5px] gap-x-2">
        <div className="relative pr-2 font-normal text-[13px] leading-[18px]">
          최초 1회 무료배송
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-[#e2e2e2] border-solid">
        <div className="flex relative min-w-[50%]">
          <button className="block w-full min-h-[81px] pt-5 pr-3 pb-4 pl-4 text-left">
            <div className="font-normal text-xs/[16px] text-[#666666]">
              적립금
            </div>
            <div className="flex items-center pt-1.5 font-medium text-sm/[20px] tracking-[-0.4px]">
              <div className="pr-0.5 font-bold text-2xl/[24px] tracking-[-0.8px]">
                0
              </div>
              원
            </div>
          </button>
          <button className="block w-full min-h-[81px] pt-5 pr-3 pb-4 pl-4 text-left">
            <div className="font-normal text-xs/[16px] text-[#666666]">
              컬리캐시
            </div>
            <div className="flex items-center pt-1.5 font-medium text-sm/[20px] tracking-[-0.4px]">
              <div className="pr-0.5 font-bold text-2xl/[24px] tracking-[-0.8px]">
                0
              </div>
              원
            </div>
          </button>
          <button className="flex absolute gap-0.5 top-3.5 right-3 height-6.5 py-0 px-2.5 rounded-[13px] font-semibold text-xs/[26px] tracking-[-0.2px] bg-[#f2f2f2]">
            상품권
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
