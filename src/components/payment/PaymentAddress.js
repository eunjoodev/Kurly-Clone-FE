import React from "react";
import { location } from "../../assets/icon";

const PaymentAddress = () => {
  return (
    <div className="p-5" style={{ border: "1px solid #f5f5f5" }}>
      <div className="flex justify-start items-center">
        <img src={location} alt="배송지" className="h-5 pr-1" />
        <div className="text-base font-medium leading-5">배송지</div>
      </div>
      <div className="pt-3">
        <div className="text-base font-medium leading-6">
          서울특별시 강남구 도곡로 1길 10, 프린스타워 9층
        </div>
        <div className="text-sm pt-[7px] pb-3 text-[rgb(102,102,102)]">
          하루배송
        </div>
        <button
          className="w-60 h-9 px-2.5 mt-4 flex justify-center items-center text-[#5f0080] rounded"
          style={{ border: "1px solid #5f0080" }}
        >
          <span className="text-xs font-semibold">배송지 변경</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentAddress;
