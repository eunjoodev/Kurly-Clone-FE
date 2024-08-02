import React, { useState } from "react";

function FindPassword() {
  const [activeTab, setActiveTab] = useState("phone");

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  const changeButtonColor = (button) => {
    button.style.backgroundColor = "#5F0080";
  };

  return (
    <div style={{ paddingTop: "30px", paddingBottom: "80px" }}>
      <div className="container mx-auto bg-white p-4 w-96">
        <h2 className="text-center text-3xl font-bold mb-4 pb-8">
          아이디 찾기
        </h2>

        <div className="flex space-x-2 mb-4 pt-30">
          <button
            className={`tab-button ${activeTab === "phone" ? "active" : ""} w-full`}
            onClick={() => changeTab("phone")}
          >
            휴대폰 인증
          </button>
          <button
            className={`tab-button ${activeTab === "email" ? "active" : ""} w-full`}
            onClick={() => changeTab("email")}
          >
            이메일 인증
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm mb-2">
            이름
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력해 주세요"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {activeTab === "phone" ? (
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm mb-2">
              휴대폰 번호
            </label>
            <input
              type="text"
              id="phone"
              placeholder="휴대폰 번호를 입력해 주세요"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
            />
            <button
              className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={(e) => changeButtonColor(e.target)}
            >
              인증번호 받기
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              이메일
            </label>
            <input
              type="text"
              id="email"
              placeholder="이메일을 입력해 주세요"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
            />
            <button
              className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={(e) => changeButtonColor(e.target)}
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindPassword;
