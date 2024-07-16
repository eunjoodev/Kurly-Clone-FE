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

    // const filtered = props.orders.filter((order) => {
    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return orderDate >= startDate && orderDate <= now;
    });

    setFilteredOrders(filtered);
    setSelectedPeriod(period);
  };

  let orderDatas = (
    <div className="flex justify-center items-center w-full h-[700px]">
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
      <div className="flex justify-center items-start w-full h-[700px]">
        <div className="flex flex-col items-center">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="mb-2 flex justify-between items-center w-[600px] h-[100px] border border-solid border-[#eeeeee] rounded-xl cursor-pointer"
            >
              <p className="font-bold text-[20px] mx-5">{order.title}</p>
              <p className="mx-5 text-[#999999]">
                {order.date.toLocaleDateString("en-US")}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
