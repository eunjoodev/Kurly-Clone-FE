import React from "react";
import PaymentAddress from "./PaymentAddress";
import PaymentAmount from "./PaymentAmount";

const Payment = () => {
  return (
    <div className="w-284 h-942 absolute right-0">
      <div className="h-[753px] pt-[60px]">
        <PaymentAddress />
        <PaymentAmount />
        <div className="w-284 h-[256px] pt-5 flex flex-col">
          <button className="w-284 h-[56px] text-white bg-[#5f0080] rounded">
            주문하기
          </button>
          {/* {isLoggedIN ? ( */}
          <ui className="py-4 w-284 h-[180px]">
            <li className="text-xs text-[#666] pt-1 pl-1.5 list-none">
              쿠폰/적립금은 주문서에서 사용 가능합니다.
            </li>
            <li className="text-xs text-[#666] pt-1 pl-1.5 list-none">
              [주문완료]상태일 경우에만 주문 취소 가능합니다.
            </li>
            <li className="text-xs text-[#666] pt-1 pl-1.5 list-none">
              [마이컬리 주문내역 상세페이지]에서 직접 취소하실 수 있습니다.
            </li>
            <li className="text-xs text-[#666] pt-1 pl-1.5 list-none">
              쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종
              산정됩니다.
            </li>
            <li className="text-xs text-[#666] pt-1 pl-1.5 list-none">
              상품별로 적립금 지급 기준이 다를 수 있습니다.(상품 상세 페이지에서
              확인 가능합니다.)
            </li>
            {/* ) : (
            <ui>
              <li>
              [주문완료] 상태일 경우에만 주문 취소 가능합니다.
              </li>
              <li>
              [마이컬리>주문내역 상세페이지]에서 직접 취소하실 수 있습니다.
              </li>
            </ui>
            )} */}
          </ui>
        </div>
      </div>
    </div>
  );
};

export default Payment;
