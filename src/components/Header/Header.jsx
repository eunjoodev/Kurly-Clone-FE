import React from "react";
import { cart, heart, logo, magnifyingGlass, map } from "../../assets/images";

function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-[1050px]">
        {/* 상단 회원가입, 로그인, 고객센터 */}
        <div className="flex justify-between items-center mt-2 mb-3">
          <div className="flex-grow"></div>
          <div className="flex space-x-2">
            <div className="text-xs" style={{ fontSize: "12px" }}>
              <a href="#">회원가입</a>
            </div>
            <span className="" aria-hidden="true">
              ㅣ
            </span>
            <a
              className="text-xs"
              href="/login.html"
              style={{ fontSize: "12px" }}
            >
              로그인
            </a>
            <span className="" aria-hidden="true">
              ㅣ
            </span>
            <a className="text-xs" href="#" style={{ fontSize: "12px" }}>
              고객센터
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 mb-2">
          <div className="flex items-center">
            <div className="mr-4">
              <a href="/">
                <img className="w-20" src={logo} alt="마켓컬리 로고" />
              </a>
            </div>

            <div>
              <ul className="flex items-center space-x-2">
                <li>
                  <a
                    style={{ color: "#5E0080" }}
                    className="text-lg font-bold"
                    href="#"
                  >
                    마켓컬리
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2" aria-hidden="true">
                    ㅣ
                  </span>
                  <a
                    style={{ color: "#B5B5B5" }}
                    className="text-lg font-semibold"
                    href="#"
                  >
                    뷰티컬리
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 검색 폼 */}
          <form
            action="/"
            method="POST"
            className="flex-grow flex items-center"
          >
            <fieldset className="border-none w-full">
              <legend className="sr-only">검색 폼</legend>
              <div
                className="relative w-full mx-auto"
                style={{ maxWidth: "400px", marginLeft: "5rem" }}
              >
                <label htmlFor="search" className="sr-only">
                  검색어
                </label>
                <input
                  type="search"
                  id="search"
                  name="search"
                  required
                  className="border rounded-md w-full pr-12 font-semibold"
                  placeholder="검색어를 입력해주세요"
                  style={{
                    borderColor: "#5E0080",
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px"
                  }} // 보라색 테두리와 높이 48px로 설정, 패딩 추가
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-purple-600 text-white rounded-r-md"
                >
                  <img
                    className="w-10 p-2"
                    src={magnifyingGlass}
                    alt="마켓컬리 로고"
                  />
                </button>
              </div>
            </fieldset>
          </form>

          {/* 아이콘들 */}
          <div className="flex items-center space-x-6">
            <a href="/">
              <img
                className="ml-8"
                src={map}
                alt="지도 아이콘"
                style={{ width: "30px" }}
              />
            </a>
            <a href="/">
              <img
                className="ml-8"
                src={heart}
                alt="하트 아이콘"
                style={{ width: "30px" }}
              />
            </a>
            <a href="/">
              <img
                className="ml-8"
                src={cart}
                alt="장바구니 아이콘"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
