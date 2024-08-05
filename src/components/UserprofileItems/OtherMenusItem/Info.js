import React, { useState, useEffect } from "react";

const Info = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    setUserId(userData.userId || "");
    setUserName(userData.userName || "");
    setUserEmail(userData.userEmail || "");
    setUserNumber(userData.userNumber || "");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = {
      userId,
      userName,
      userEmail,
      userNumber,
    };

    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    alert("회원 정보가 수정되었습니다.");
  };

  return (
    <div className="overflow-hidden min-w-[650px] max-w-[650px] bg-white rounded-2xl">
      <div className="flex justify-between mx-[20px] pt-[25px] px-0 pb-5 border-b-2 border-solid border-black">
        <div className="flex items-end">
          <h2 className="text-[20px] font-semibold leading-7 tracking-tight">
            개인 정보 수정
          </h2>
        </div>
      </div>
      <div className="px-5">
        <div className="overflow-hidden pt-[7px] px-0 pb-5">
          <form onSubmit={handleSubmit}>
            <div className="inline-flex w-full py-[10px] px-5">
              <div className="w-[139px] pt-3">
                <label className="text-sm text-[#333] font-semibold leading-5">
                  아이디
                </label>
              </div>
              <div className="flex-1 relative h-[48px]">
                <input
                  type="text"
                  className="text-sm w-full h-[46px] pt-0 pr-[11px] pb-[1px] pl-[15px] rounded border border-solid border-[#dddddd] font-normal text-[#333]"
                  value={userId}
                />
              </div>
              <div className="w-[120px] ml-2" />
            </div>
            <div className="inline-flex w-full py-[10px] px-5">
              <div className="w-[139px] pt-3">
                <label className="text-sm text-[#333] font-semibold leading-5">
                  이름
                </label>
              </div>
              <div className="flex-1 relative h-[48px]">
                <input
                  type="text"
                  className="text-sm w-full h-[46px] pt-0 pr-[11px] pb-[1px] pl-[15px] rounded border border-solid border-[#dddddd] font-normal text-[#333]"
                  value={userName}
                />
              </div>
              <div className="w-[120px] ml-2" />
            </div>
            <div className="inline-flex w-full py-[10px] px-5">
              <div className="w-[139px] pt-3">
                <label className="text-sm text-[#333] font-semibold leading-5">
                  이메일
                </label>
              </div>
              <div className="flex-1 relative h-[48px]">
                <input
                  type="email"
                  className="text-sm w-full h-[46px] pt-0 pr-[11px] pb-[1px] pl-[15px] rounded border border-solid border-[#dddddd] font-normal text-[#333]"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="w-[120px] ml-2">
                <button className="overflow-hidden block py-0 px-[10px] text-center bg-white w-full h-[44px] border border-solid border-[#dddddd] rounded-[3px] text-[#dddddd]">
                  <span className="inline-block font-semibold text-sm">
                    중복확인
                  </span>
                </button>
              </div>
            </div>
            <div className="inline-flex w-full py-[10px] px-5">
              <div className="w-[139px] pt-3">
                <label className="text-sm text-[#333] font-semibold leading-5">
                  휴대폰
                </label>
              </div>
              <div className="flex-1 relative h-[48px]">
                <input
                  type="mobileNumber"
                  className="text-sm w-full h-[46px] pt-0 pr-[11px] pb-[1px] pl-[15px] rounded border border-solid border-[#dddddd] font-normal text-[#333]"
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
                />
              </div>
              <div className="w-[120px] ml-2">
                <button className="overflow-hidden block py-0 px-[10px] text-center bg-white w-full h-[44px] border border-solid border-[#5f0080] rounded-[3px] text-[#5f0080]">
                  <span className="inline-block font-semibold text-sm">
                    다른번호 인증
                  </span>
                </button>
              </div>
            </div>
            <div className="h-[1px] bg-[#999999]" />
            <div className="flex justify-center mt-5 pt-[40px] border-t border-solid border-[#f4f4f4]">
              <button className="overflow-hidden block py-0 px-[10px] text-center w-[120px] h-[44px] my-0 mx-[3px] rounded-[3px] bg-white border border-solid border-[#5f0080] text-[#5f0080] text-sm">
                <span className="inline-block font-semibold text-center">
                  탈퇴하기
                </span>
              </button>
              <button
                type="submit"
                className="overflow-hidden block py-0 px-[10px] text-center w-[120px] h-[44px] my-0 mx-[3px] rounded-[3px] bg-[#5f0080] border-0 border-none text-white text-sm"
              >
                <span className="inline-block font-semibold text-center">
                  회원정보수정
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
