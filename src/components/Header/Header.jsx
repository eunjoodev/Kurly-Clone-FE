import React from "react";
import { cart, heart, logo, magnifyingGlass, map } from "../../assets/images";

function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-[1050px] mt-16">
        {/* 상단 회원가입, 로그인, 고객센터 */}
        <div className="flex justify-between items-center mt-2 mb-3">
          <div className="flex-grow"></div>
          <div className="flex space-x-2 items-center ">
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
                className="flex w-full items-center border rounded-md justify-between"
                style={{
                  maxWidth: "400px",
                  marginLeft: "5rem",
                  borderColor: "#5E0080",
                  height: "48px"
                }}
              >
                <input
                  type="search"
                  id="search"
                  name="search"
                  required
                  className="font-semibold"
                  placeholder="검색어를 입력해주세요"
                  style={{ paddingLeft: "12px" }}
                />
                <button type="submit" className="items-center">
                  <img
                    className="w-8 h-6"
                    src={magnifyingGlass}
                    alt="검색 아이콘"
                    style={{ paddingRight: "12px" }}
                  />
                </button>
              </div>
            </fieldset>
          </form>

          {/* 아이콘들 */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <img src={map} alt="지도 아이콘" style={{ width: "30px" }} />
            </a>
            <a href="/">
              <img src={heart} alt="하트 아이콘" style={{ width: "30px" }} />
            </a>
            <a href="/">
              <img src={cart} alt="장바구니 아이콘" style={{ width: "30px" }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
