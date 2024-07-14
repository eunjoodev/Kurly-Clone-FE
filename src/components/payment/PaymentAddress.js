import React from "react";

const PaymentAddress = () => {
  return (
    <div className="p-5" style={{ border: "1px solid #f5f5f5" }}>
      <div className="flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <div className="text-base font-[550]">배송지</div>
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
