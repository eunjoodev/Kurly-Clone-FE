import React from "react";
import { cart, heart, logo, map } from "../../assets/images";

function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto max-w-[1050px]">
          <ul className="flex justify-end items-center mt-2 mb-4 space-x-1">
            <li>
              <a className="text-purple-600 font-semibold text-xs" href="#">
                회원가입
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-1" aria-hidden="true">
                ㅣ
              </span>
              <a
                href="/login.html"
                className="text-gray-600 font-semibold text-xs"
              >
                로그인
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-1" aria-hidden="true">
                ㅣ
              </span>
              <a href="#" className="text-gray-600 font-semibold text-xs">
                고객센터
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between mt-2 mb-2">
            <div className="flex items-center space-x-4">
              <div className="header__logo">
                <a href="/">
                  <img className="w-20" src={logo} alt="마켓컬리 로고" />
                </a>
              </div>
              <ul className="flex">
                <li>
                  <a className="text-lg text-purple-600 font-semibold" href="#">
                    마켓컬리
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2" aria-hidden="true">
                    ㅣ
                  </span>
                  <a className="text-lg text-gray-600" href="#">
                    뷰티컬리
                  </a>
                </li>
              </ul>
            </div>

            <form action="/" method="POST" className="flex-grow max-w-md ">
              <fieldset className="border-none">
                <legend className="sr-only">검색 폼</legend>
                <div className="flex items-center">
                  <label htmlFor="search" className="sr-only">
                    검색어
                  </label>
                  <input
                    type="search"
                    id="search"
                    name="search"
                    required
                    className="w-full h-12 px-4 py-4 border-2 border-purple-800 rounded-md"
                    placeholder="검색어를 입력하세요."
                  />
                </div>
              </fieldset>
            </form>

            <div className="flex items-center space-x-6">
              <a href="/">
                <img className="w-8" src={map} alt="지도 아이콘" />
              </a>
              <a href="/">
                <img className="w-8" src={heart} alt="하트 아이콘" />
              </a>
              <a href="/">
                <img className="w-8" src={cart} alt="장바구니 아이콘" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
