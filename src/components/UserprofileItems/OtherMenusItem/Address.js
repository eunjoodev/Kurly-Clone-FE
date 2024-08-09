import React, { useState, useEffect } from "react";

const Address = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {
      userAddress: [],
    };
    setAddresses(userData.userAddress);
  }, []);

  const loadDaumPostcodeScript = (callback) => {
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = callback;
    document.head.appendChild(script);
  };

  const handleAddressSearch = () => {
    loadDaumPostcodeScript(() => {
      new window.daum.Postcode({
        oncomplete: async (data) => {
          const fullAddress = data.roadAddress || data.jibunAddress;
          const newAddresses = [...addresses, fullAddress];
          setAddresses(newAddresses);

          const userData = JSON.parse(localStorage.getItem("userData")) || {};
          userData.userAddress = newAddresses;
          localStorage.setItem("userData", JSON.stringify(userData));
        },
      }).open();
    });
  };

  const addressDatas = (
    <div className="py-0 px-5 text-sm text-[#333] list-none">
      <ul className=" list-none">
        {addresses && addresses.length > 0 ? (
          addresses.map((addressItem, index) => (
            <div
              key={index}
              className="flex items-center w-full py-5 px-0 border-b border-solid border-[#f4f4f4]"
            >
              <div className="basis-9">
                <label>
                  <input
                    type="checkbox"
                    className="overflow-hidden absolute w-[1px] h-[1px]"
                    checked
                  />
                  <div className="mr-3">
                    <img src="/assets/check.svg" alt="check" />
                  </div>
                </label>
              </div>
              <div className="flex-1">
                <div className="inline-block py-[2px] px-2 mb-[10px] rounded-[11px] bg-[#f7f7f7] text-[#666666] font-semibold text-[12px] text-center">
                  기본 배송지
                </div>
                <p className="text-[16px] leading-5 text-[#333] break-all">
                  {addressItem}
                </p>
                <div className="pt-[10px] font-medium">
                  <span className="text-[12px] text-[#5f0080]">샛별배송</span>
                </div>
              </div>
              <div className="inline-flex pl-4">
                <img
                  src="/assets/edit.svg"
                  className="overflow-hidden w-[48px] h-[48px]"
                  alt="edit"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center w-full py-5 px-0 border-b border-solid border-[#f4f4f4]">
            <div className="flex-1">
              <p className="text-[16px] leading-5 text-[#333] break-all">
                주소가 없습니다 로그인 해주세요
              </p>
            </div>
          </div>
        )}
      </ul>
    </div>
  );

  return (
    <div className="overflow-hidden min-w-[650px] max-w-[650px] bg-white rounded-2xl">
      <div className="flex justify-between my-0 mx-5 pt-[25px] px-0 pb-5 border-b-2 border-solid border-[#333]">
        <div className="flex items-end">
          <h2 className="font-semibold text-xl leading-7 tracking-[-0.5px]">
            배송지 관리
          </h2>
          <span className="pl-2 text-[13px] leading-5 text-[#999999] tracking-[-0.5px]">
            배송지에 따라 상품정보 및 배송유형이 달라질 수 있습니다.
          </span>
        </div>
        <div className="flex items-end">
          <button
            className="flex items-center h-[24px] font-semibold text-base tracking-[-0.4px]"
            onClick={handleAddressSearch}
          >
            <img src="/assets/plus.svg" className="mr-[4px]" />새 배송지 추가
          </button>
        </div>
      </div>
      {addressDatas}
    </div>
  );
};

export default Address;
