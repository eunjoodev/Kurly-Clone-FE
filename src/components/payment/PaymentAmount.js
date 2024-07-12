import React from "react";

const PaymentAmount = () => {
  return (
    <div className="p-5 bg-neutral-50" style={{ border: "1px solid #f5f5f5" }}>
      <div className="flex justify-between items-center">
        <div className="text-base">상품금액</div>
        <div className="text-lg">16,990원</div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="text-base">상품할인금액</div>
        <div className="text-lg">-5,100원</div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="text-base">배송비</div>
        <div className="text-lg">+3,000원</div>
      </div>
      <p className="text-xs text-right text-[rgb(95,0,128)] pt-0.5">
        0원 추가주문 시, <strong>무료배송</strong>
      </p>
      <div
        className="flex justify-between items-center mt-4 pt-4"
        style={{ borderTop: "1px solid #f4f4f4" }}
      >
        <div className="text-base">결제예정금액</div>
        <div className="text-xl">
          <strong>14,890</strong>원
        </div>
      </div>
    </div>
  );
};

export default PaymentAmount;
