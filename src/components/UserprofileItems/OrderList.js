import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const OrderList = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("3개월");

  const { orders } = useOutletContext();

  useEffect(() => {
    filterOrders("3개월");
  }, [orders]);

  const filterOrders = (period) => {
    const now = new Date();
    let startDate;

    switch (period) {
      case "3개월":
        startDate = new Date();
        startDate.setMonth(now.getMonth() - 3);
        break;
      case "6개월":
        startDate = new Date();
        startDate.setMonth(now.getMonth() - 6);
        break;
      case "1년":
        startDate = new Date();
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      case "3년":
        startDate = new Date();
        startDate.setFullYear(now.getFullYear() - 3);
        break;
      default:
        startDate = new Date();
        startDate.setMonth(now.getMonth() - 3);
        break;
    }

    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return orderDate >= startDate && orderDate <= now;
    });

    setFilteredOrders(filtered);
    setSelectedPeriod(period);
  };

  let orderDatas = (
    <div className="flex justify-center items-center w-full h-[700px] bg-white">
      <div className="flex flex-col items-center">
        <p className="mt-2 mx-0 mb-6 text-base text-[#b5b5b5] text-center">
          {selectedPeriod}간의 주문내역이 없습니다
        </p>
        <button className="block py-0 px-2.5 text-center overflow-hidden w-[146px] h-[44px] rounded-[22px] text-white bg-[#5f0080] border-0">
          <span className="inline-block font-semibold text-base">
            베스트 상품 보기
          </span>
        </button>
      </div>
    </div>
  );

  if (filteredOrders.length > 0) {
    orderDatas = (
      <div className="rounded-b-2xl overflow-hidden mt-[-10px]">
        {filteredOrders.map((order, index) => (
          <div className="flex flex-col justify-center items-start w-full h-[200px] mt-2.5 px-5 bg-white">
            <div key={index} className="flex flex-col items-start">
              <div className="mb-2 flex justify-between items-start w-[600px] h-[40px] border-b border-solid border-[#eeeeee] cursor-pointer">
                <p className="text-[16px] font-bold">
                  {order.date.toLocaleDateString().replace(/.$/, "")}&nbsp;(
                  {order.date.getHours()}시 {order.date.getMinutes()}분)
                </p>
                <p className="font-bold text-[14px] text-[#999999] mx-5">
                  주문 상세
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <div className="flex justify-start items-start">
                  <div className="font-medium text-[16px] text-[#999999] my-1 mr-3 w-[80px]">
                    상품명
                  </div>
                  <div className="font-semibold text-[16px] my-1 mx-2">
                    {order.title}
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="font-medium text-[16px] text-[#999999] my-1 mr-3 w-[80px]">
                    결제 방법
                  </div>
                  <div className="font-semibold text-[16px] my-1 mx-2">
                    {order.payment}
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="font-medium text-[16px] text-[#999999] my-1 mr-3 w-[80px]">
                    결제 금액
                  </div>
                  <div className="font-semibold text-[16px] my-1 mx-2">
                    {order.price.toLocaleString()}원
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="font-medium text-[16px] text-[#999999] my-1 mr-3 w-[80px]">
                    주문 상태
                  </div>
                  <div className="font-semibold text-[16px] my-1 mx-2">
                    {order.delivery}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-[650px] min-w-[650px] max-w-[650px] rounded-2xl overflow-hidden ">
      <div className="bg-white">
        <div className="flex justify-between my-0 mx-5 pt-[25px] px-0 pb-5 border-b-2 border-solid border-[#333333]">
          <div className="flex items-end">
            <h2 className="font-medium text-xl">주문 내역</h2>
            <span className="pl-2 text-[13px] text-[#999999] leading-5">
              최대 지난 3년간의 주문내역까지 확인할 수 있어요
            </span>
          </div>
        </div>
      </div>
      <div className="m-0">
        <div className="flex justify-between m-0 w-full bg-white p-5">
          {["3개월", "6개월", "1년", "3년"].map((period) => (
            <button
              key={period}
              className={`w-full h-10 pt-2 px-2.5 pb-2.5 rounded-[3px] border border-solid mr-1.5 text-center text-sm  ${
                selectedPeriod === period
                  ? "border-[#5f0080] text-[#5f0080]"
                  : "border-[#dddddd80] text-[#666666]"
              }`}
              onClick={() => filterOrders(period)}
            >
              {period}
            </button>
          ))}
        </div>
        {orderDatas}
      </div>
    </div>
  );
};

export default OrderList;
