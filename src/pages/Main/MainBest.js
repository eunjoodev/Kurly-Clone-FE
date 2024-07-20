import React, { useState } from "react";
import "./Main.css";
import {
  chatCenteredDots,
  mustItem01,
  mustItem02,
  mustItem03,
  mustItem04,
} from "../../assets/images";

//메인 페이지 지금 가장 많이 담는 특가 구현 로직
const MainBest = () => {
  return (
    <section className="my-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-2 max-w-[1050px] mx-auto text-center">
          🛒 지금 가장 많이 담는 특가
        </h2>
      </div>
      <div className="flex justify-center">
        <h2 className="text-lg font-bold mb-6 max-w-[1050px] mx-auto text-center text-gray-400">
          컬리 추천 특가템 최대 30%
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1050px] mx-auto">
        <div className="bg-white rounded-md">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <img
              src={mustItem01}
              alt="상품 이미지"
              className="w-full h-auto mb-0.1"
              aria-hidden="true"
            />
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-2"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <span aria-hidden="true">[</span>조선호텔
                <span aria-hidden="true">]</span>
                &nbsp;조선호텔 삼계탕 900g
              </dd>
              <dt className="sr-only">정상가</dt>
              <dd className="text-sm line-through text-gray-400">9,000 원</dd>
              <div className="flex">
                <dd className="text-lg font-semibold text-red-500">20%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;7,920 원
                </dd>
              </div>

              <dd className="flex items-center mt-2">
                <img
                  className="w-6 h-6"
                  src={chatCenteredDots}
                  alt="햄버거 버튼"
                />
                <span style={{ color: "#999999" }} className="ml-2">
                  999+
                </span>
              </dd>
            </dl>
          </a>
        </div>
        <div className="bg-white rounded-md">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <img
              src={mustItem02}
              alt="상품 이미지"
              className="w-full h-auto mb-0.1"
              aria-hidden="true"
            />
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-2"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <span aria-hidden="true">[</span>고메
                <span aria-hidden="true">]</span>
                &nbsp;소바바치킨 소이허니 3종
              </dd>
              <dt className="sr-only">정상가</dt>
              <dd className="text-sm line-through text-gray-400">7,980 원</dd>
              <div className="flex">
                <dd className="text-lg font-semibold text-red-500">30%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;5,586 원
                </dd>
              </div>

              <dd className="flex items-center mt-2">
                <img
                  className="w-6 h-6"
                  src={chatCenteredDots}
                  alt="햄버거 버튼"
                />
                <span style={{ color: "#999999" }} className="ml-2">
                  999+
                </span>
              </dd>
            </dl>
          </a>
        </div>
        <div className="bg-white rounded-md">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <img
              src={mustItem03}
              alt="상품 이미지"
              className="w-full h-auto mb-0.1"
              aria-hidden="true"
            />
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-2"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <span aria-hidden="true">[</span>하코야
                <span aria-hidden="true">]</span>
                &nbsp;살얼음 동동 냉메밀 소바 2인분
              </dd>
              <dt className="sr-only">정상가</dt>
              <dd className="text-sm line-through text-gray-400">9,900 원</dd>
              <div className="flex">
                <dd className="text-lg font-semibold text-red-500">20%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;7,920 원
                </dd>
              </div>

              <dd className="flex items-center mt-2">
                <img
                  className="w-6 h-6"
                  src={chatCenteredDots}
                  alt="햄버거 버튼"
                />
                <span style={{ color: "#999999" }} className="ml-2">
                  9,999+
                </span>
              </dd>
            </dl>
          </a>
        </div>
        <div className="bg-white rounded-md">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <img
              src={mustItem04}
              alt="상품 이미지"
              className="w-full h-auto mb-0.1"
              aria-hidden="true"
            />
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-2"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <span aria-hidden="true">[</span>KF365
                <span aria-hidden="true">]</span>
                &nbsp;1+등급 무항생제 특란 20구
              </dd>
              <dt className="sr-only">정상가</dt>
              <dd className="text-sm line-through text-gray-400">7,390 원</dd>
              <div className="flex">
                <dd className="text-lg font-semibold text-red-500">20%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;5,394 원
                </dd>
              </div>

              <dd className="flex items-center mt-2">
                <img
                  className="w-6 h-6"
                  src={chatCenteredDots}
                  alt="햄버거 버튼"
                />
                <span style={{ color: "#999999" }} className="ml-2">
                  9,999+
                </span>
              </dd>
            </dl>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainBest;
