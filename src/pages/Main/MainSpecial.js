import React from "react";
import Timer from "./Timer";
import { beauty, chatCenteredDots, chicken } from "../../assets/images";

const timeInDay = 2;
const currentTime = Date.parse(new Date());
const deadline1 = new Date(currentTime + timeInDay * 12 * 60 * 60 * 1000);

const MainSpecial = () => {
  return (
    <>
      <section className="flex justify-between my-8 max-w-[1050px] mx-auto">
        <div className="bg-white flex-grow mr-4 w-1/3">
          <h2 className="text-3xl font-bold mb-2">🔔 초복 특가</h2>
          <p className="mb-6 text-gray-500">보양식 미리 준비하세요!</p>
          <Timer deadline={deadline1} />
          <p className="text-gray-400">망설이면 늦어요!</p>
        </div>

        <div className="bg-white rounded-md w-2/3 flex-shrink-0">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <dd className="mb-1">
              <img
                src={chicken}
                alt="상품 이미지"
                className="w-full h-auto"
                aria-hidden="true"
              />
            </dd>
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-3"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <span aria-hidden="true">[</span>KF365
                <span aria-hidden="true">]</span>
                &nbsp;무항생제 삼계탕용 두마리 통닭 550gX2입
              </dd>
              <div className="flex items-center">
                <dd className="text-lg font-semibold text-red-500">32%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;8,550 원
                </dd>
                <dd className="text-sm line-through text-gray-400">
                  &nbsp;&nbsp;12,700원
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
      </section>

      <section className="flex justify-between my-8 max-w-[1050px] mx-auto mb-24">
        <div className="bg-white flex-grow mr-4 w-1/3">
          <h2 className="text-3xl font-bold mb-2">⏰ 뷰티 특가</h2>
          <p className="mb-6 text-gray-500">지금 가장 인기있어요!</p>
          <Timer deadline={deadline1} />
          <div className="text-red-500 font-bold mb-2">{/* <Timer /> */}</div>
          <p className="text-gray-400">망설이면 늦어요!</p>
        </div>

        <div className="bg-white rounded-md w-2/3 flex-shrink-0">
          <a
            href="#"
            className="block"
            title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
          >
            <dd className="mb-1">
              <img
                src={beauty}
                alt="상품 이미지"
                className="w-full h-auto"
                aria-hidden="true"
              />
            </dd>
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md mb-3"
              aria-label="장바구니로 이동"
            >
              담기
            </button>
            <dl>
              <dt className="sr-only">상품명</dt>
              <dd className="font-base mb-2">
                <dd className="text-sm font-semibold mb-2 text-gray-400">
                  풍성하게 즐기는 스테디셀러세트
                </dd>
                <span aria-hidden="true">[</span>KF365
                <span aria-hidden="true">]</span>
                &nbsp;자음 2종 세트 (자음수, 자음유액)(+자음생5종, 팩3종 키트
                증정)
              </dd>
              <div className="flex items-center">
                <dd className="text-lg font-semibold text-red-500">10%</dd>
                <dd className="text-xl font-semibold text-500">
                  &nbsp;126,000 원
                </dd>
                <dd className="text-sm line-through text-gray-400">
                  &nbsp;&nbsp;140,000원
                </dd>
              </div>

              <dd className="flex items-center mt-2">
                <img
                  className="w-6 h-6"
                  src={chatCenteredDots}
                  alt="햄버거 버튼"
                />
                <span style={{ color: "#999999" }} className="ml-2 ">
                  9,999+
                </span>
              </dd>
            </dl>
          </a>
        </div>
      </section>
    </>
  );
};

export default MainSpecial;
