import React from "react";

const OrderList = () => {
  return (
    <div className="w-[650px] min-w-[650px] max-w-[650px] rounded-2xl bg-white">
      <div className="flex justify-between my-0 mx-5 pt-[25px] px-0 pb-5 border-b-2 border-solid border-[#333333]">
        <div className="flex items-end">
          <h2 className="font-medium text-xl">주문 내역</h2>
          <span className="pl-2 text-[13px] text-[#999999] leading-5">
            최대 지난 3년간의 주문내역까지 확인할 수 있어요
          </span>
        </div>
      </div>
      <div className="m-0">
        <div className="flex justify-between m-0 w-full bg-white p-5">
          <button className="w-full h-10 pt-2 px-2.5 pb-2.5 rounded-[3px] border border-solid border-[#dddddd80] mr-1.5 text-center text-sm text-[#666666]">
            3개월
          </button>
          <button className="w-full h-10 pt-2 px-2.5 pb-2.5 rounded-[3px] border border-solid border-[#dddddd80] mr-1.5 text-center text-sm text-[#666666]">
            6개월
          </button>
          <button className="w-full h-10 pt-2 px-2.5 pb-2.5 rounded-[3px] border border-solid border-[#dddddd80] mr-1.5 text-center text-sm text-[#666666]">
            1년
          </button>
          <button className="w-full h-10 pt-2 px-2.5 pb-2.5 rounded-[3px] border border-solid border-[#dddddd80] mr-1.5 text-center text-sm text-[#666666]">
            3년
          </button>
        </div>
        <div className="flex justify-center items-center w-full h-[700px]">
          <div className="flex flex-col items-center">
            <p className="mt-2 mx-0 mb-6 text-base text-[#b5b5b5] text-center">
              3개월간의 주문내역이 없습니다
            </p>
            <button className="block py-0 px-2.5 text-center overflow-hidden w-[146px] h-[44px] rounded-[22px] text-white bg-[#5f0080] border-0">
              베스트 상품 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
