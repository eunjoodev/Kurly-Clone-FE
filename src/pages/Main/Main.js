import React from "react";
import "./Main.css";
import {
  banner,
  mainBanner,
  meat,
  mustItem01,
  mustItem02,
  mustItem03,
  mustItem04,
  side
} from "../../assets/images";

function Main() {
  return (
    <>
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto max-w-[1050px] ">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                className="w-6 h-6"
                src="./assets/icons/Hamburger.svg"
                alt="햄버거 버튼"
              />
              <span className="text-lg font-semibold">카테고리</span>
            </div>
            <ul className="flex space-x-24">
              <li>
                <a href="#" className="text-gray-800 text-base font-bold">
                  신상품
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 text-base font-bold">
                  베스트
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 text-base font-bold">
                  알뜰쇼핑
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 text-base font-bold">
                  특가/혜택
                </a>
              </li>
            </ul>
            <div>
              <a href="#" className="text-blue-500">
                <span className="font-semibold">샛별·택배</span> 배송안내
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="mb-24">
          <h2 className="sr-only">메인 이벤트</h2>
          <div className="relative">
            <img
              src={mainBanner}
              alt="컬리 이 주의 특가 한 눈에 보기"
              className="w-full"
            />
            <button
              type="button"
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              aria-label="왼쪽 이벤트 페이지로 이동"
            >
              <img src="/assets/icons/Arrow.svg" alt="왼쪽 이동 화살표" />
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              aria-label="오른쪽 이벤트 페이지로 이동"
            >
              <img src="/assets/icons/Arrow.svg" alt="오른쪽 이동 화살표" />
            </button>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-8 max-w-[1050px] mx-auto">
            지금 가장 많이 담는 특가
          </h2>
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
                  className="w-full h-auto mb-1"
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
                  <dd className="font-semibold mb-2">
                    <span aria-hidden="true">[</span>풀무원
                    <span aria-hidden="true">]</span>
                    하코야 살얼음 동동 메밀소바 2인분
                  </dd>
                  <dd className="mb-4"></dd>
                  <dt className="sr-only">정상가</dt>
                  <dd className="text-sm line-through text-gray-400">
                    9,000 원
                  </dd>
                  <div className="flex">
                    <dd className="text-lg font-semibold text-red-500">20%</dd>
                    <dd className="text-lg font-semibold text-500">7,920 원</dd>
                  </div>

                  <dd className="flex items-center mt-2">
                    <span className="text-yellow-500">📣</span>
                    <span className="ml-2">9999+</span>
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
                  className="w-full h-auto mb-1"
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
                  <dd className="font-semibold mb-2">
                    <span aria-hidden="true">[</span>풀무원
                    <span aria-hidden="true">]</span>
                    하코야 살얼음 동동 메밀소바 2인분
                  </dd>
                  <dd className="mb-4"></dd>
                  <dt className="sr-only">정상가</dt>
                  <dd className="text-sm line-through text-gray-400">
                    9,000 원
                  </dd>
                  <div className="flex">
                    <dd className="text-lg font-semibold text-red-500">20%</dd>
                    <dd className="text-lg font-semibold text-500">7,920 원</dd>
                  </div>

                  <dd className="flex items-center mt-2">
                    <span className="text-yellow-500">📣</span>
                    <span className="ml-2">9999+</span>
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
                  className="w-full h-auto mb-1"
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
                  <dd className="font-semibold mb-2">
                    <span aria-hidden="true">[</span>풀무원
                    <span aria-hidden="true">]</span>
                    하코야 살얼음 동동 메밀소바 2인분
                  </dd>
                  <dd className="mb-4"></dd>
                  <dt className="sr-only">정상가</dt>
                  <dd className="text-sm line-through text-gray-400">
                    9,000 원
                  </dd>
                  <div className="flex">
                    <dd className="text-lg font-semibold text-red-500">20%</dd>
                    <dd className="text-lg font-semibold text-500">7,920 원</dd>
                  </div>

                  <dd className="flex items-center mt-2">
                    <span className="text-yellow-500">📣</span>
                    <span className="ml-2">9999+</span>
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
                  className="w-full h-auto mb-1"
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
                  <dd className="font-semibold mb-2">
                    <span aria-hidden="true">[</span>풀무원
                    <span aria-hidden="true">]</span>
                    하코야 살얼음 동동 메밀소바 2인분
                  </dd>
                  <dd className="mb-4"></dd>
                  <dt className="sr-only">정상가</dt>
                  <dd className="text-sm line-through text-gray-400">
                    9,000 원
                  </dd>
                  <div className="flex">
                    <dd className="text-lg font-semibold text-red-500">20%</dd>
                    <dd className="text-lg font-semibold text-500">7,920 원</dd>
                  </div>

                  <dd className="flex items-center mt-2">
                    <span className="text-yellow-500">📣</span>
                    <span className="ml-2">9999+</span>
                  </dd>
                </dl>
              </a>
            </div>
          </div>
        </section>

        <section className="my-16 mb-28">
          <div className=" container mx-auto max-w-[1050px]">
            <a href="#" className="block">
              <img
                src={banner}
                alt="컬리 퍼플위크 안내 적립률up+3종 쿠폰팩, 더 풍성해진 혜택 10월24일 부터 10월28일 까지"
                className="w-full"
              />
            </a>
          </div>
        </section>

        <section className="flex justify-between my-8 max-w-[1050px] mx-auto">
          <div className="bg-white flex-grow mr-4">
            <h2 className="text-3xl font-bold mb-2">일일 특가</h2>
            <p className="mb-2">멤버스는 추가 할인 받아요</p>
            <div className="text-red-500 font-bold mb-2">{/* <Timer /> */}</div>
            <p>망설이면 늦어요</p>
          </div>

          <div className="bg-white rounded-md w-full w-2/3 flex-shrink-0">
            <a
              href="#"
              className="block"
              title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
            >
              <dd className="mb-4">
                <img
                  src={meat}
                  alt="상품 이미지"
                  className="w-full h-auto"
                  aria-hidden="true"
                />
              </dd>
              <dl>
                <dt className="sr-only">상품명</dt>
                <dd className="font-semibold mb-2">
                  <span aria-hidden="true">[</span>풀무원
                  <span aria-hidden="true">]</span>
                  하코야 살얼음 동동 메밀소바 2인분
                </dd>
                <dd className="mb-4"></dd>
                <dt className="sr-only">정상가</dt>
                <dd className="text-sm line-through text-gray-400 mb-2">
                  9,000 원
                </dd>
                <div className="flex items-center mb-2">
                  <dd className="text-lg font-semibold text-red-500 mr-2">
                    20%
                  </dd>
                  <dd className="text-lg font-semibold">7,920 원</dd>
                </div>

                <dd className="flex items-center mt-2">
                  <span className="text-yellow-500">📣</span>
                  <span className="ml-2">9999+</span>
                </dd>
              </dl>
            </a>
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md"
              aria-label="장바구니로 이동"
            >
              장바구니
            </button>
          </div>
        </section>

        <section className="flex justify-between my-8 max-w-[1050px] mx-auto">
          <div className="bg-white flex-grow mr-4">
            <h2 className="text-3xl font-bold mb-2">일일 특가</h2>
            <p className="mb-2">멤버스는 추가 할인 받아요</p>
            <div className="text-red-500 font-bold mb-2">{/* <Timer /> */}</div>
            <p>망설이면 늦어요</p>
          </div>

          <div className="bg-white rounded-md w-full w-2/3 flex-shrink-0">
            <a
              href="#"
              className="block"
              title="[풀무원] 탱탱쫄면 (4개입) 상세페이지"
            >
              <dd className="mb-4">
                <img
                  src={meat}
                  alt="상품 이미지"
                  className="w-full h-auto"
                  aria-hidden="true"
                />
              </dd>
              <dl>
                <dt className="sr-only">상품명</dt>
                <dd className="font-semibold mb-2">
                  <span aria-hidden="true">[</span>풀무원
                  <span aria-hidden="true">]</span>
                  하코야 살얼음 동동 메밀소바 2인분
                </dd>
                <dd className="mb-4"></dd>
                <dt className="sr-only">정상가</dt>
                <dd className="text-sm line-through text-gray-400 mb-2">
                  9,000 원
                </dd>
                <div className="flex items-center mb-2">
                  <dd className="text-lg font-semibold text-red-500 mr-2">
                    20%
                  </dd>
                  <dd className="text-lg font-semibold">7,920 원</dd>
                </div>

                <dd className="flex items-center mt-2">
                  <span className="text-yellow-500">📣</span>
                  <span className="ml-2">9999+</span>
                </dd>
              </dl>
            </a>
            <button
              type="button"
              className="mt-2 w-full border-2 border-gray-200 py-2 rounded-md"
              aria-label="장바구니로 이동"
            >
              장바구니
            </button>
          </div>
        </section>

        <aside className="shadow-md fixed top-2/3 transform -translate-y-1/2 right-6">
          <div className="items-center w-20 h-36">
            <a href="/">
              <img className="" src={side} alt="장바구니 아이콘" />
            </a>
          </div>
        </aside>
      </main>

      {/* <div class="popup">
        <dialog class="popup__container" autofocus open>
          <div class="popup__img">
            <a href="#">
              <img
                class="img__detail"
                src="./assets/image/popup.svg"
                alt="칼리 뷰티 플랫폼 상세페이지"
              />
            </a>
          </div>

          <form method="dialog">
            <button class="button__closeToday" value="cancel">
              오늘 하루 안보기
            </button>
            <button class="button__close" value="default">
              닫기
            </button>
          </form>
        </dialog>
      </div> */}
    </>
  );
}

export default Main;
