import React from "react";

function Footer() {
  return (
    <>
      <footer className="container mx-auto max-w-[1050px] border-t border-gray-00 pt-8">
        <div className="container mx-auto">
          <div className="flex mb-4 justify-between">
            <div role="complementary" className="">
              <div className="text-lg font-bold mb-4">고객행복센터</div>
              <div className="flex mb-4">
                <span className="text-3xl font-semibold">1644-1107</span>
                <span className="text-gray-600 mt-2 ml-2">
                  월~토요일 오전 7시 - 오후 6시
                </span>
              </div>
              <div className="flex items-center mb-1">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-2xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>카카오톡 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-2">
                  <span className="block">월~토요일 | 오전 7시 - 오후 6시</span>
                  <span className="block">일/공휴일 | 오전 7시 - 오후 1시</span>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-2xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>1:1 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-2">
                  <span className="block">365일</span>
                  <span className="block">
                    고객센터 운영시간에 순차적으로 답변드리겠습니다.
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div>
                  <a
                    href="#"
                    className="text-sm border border-gray-200 p-2 rounded-2xl"
                    style={{
                      width: "140px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span>대량주문 문의</span>
                  </a>
                </div>
                <div className="text-gray-600 ml-2">
                  <span className="block">월~금요일 | 오전 9시 - 오후 6시</span>
                  <span className="block">점심시간 | 낮 12시 - 오후 1시</span>
                </div>
              </div>

              <div className="text-gray-600 space-y-2 mt-4">
                <span>
                  비회원 문의:{" "}
                  <a
                    href="mailto:help@karlycorp.com"
                    className="text-purple-600"
                  >
                    help@karlycorp.com
                  </a>
                </span>
              </div>
            </div>

            <div role="complementary" className="">
              <ul className="flex flex-col mb-6 space-x-2">
                <li>
                  <a href="#" className="text-gray-600 text-base font-bold ">
                    칼리소개
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-base font-bold ml-4"
                  >
                    칼리소개영상
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-base font-bold ml-4"
                  >
                    인재채용
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-base font-bold ml-4"
                  >
                    이용약관
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-base font-bold ml-4"
                  >
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-base font-bold ml-4"
                  >
                    이용안내
                  </a>
                </li>
              </ul>
              <address className="text-gray-600 text-sm">
                <p>
                  <span>법인명 (상호) : 주식회사 컬리</span> |{" "}
                  <span>사업자등록번호 : 261-81-23567</span> |{" "}
                  <span>
                    <a
                      href="#"
                      className="text-purple-600"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      사업자정보 확인
                    </a>
                  </span>
                </p>
                <p>
                  <span>통신판매업 : 제 2018-서울강남-01646 호</span> |{" "}
                  <span>개인정보보호책임자 : 이원준</span>
                </p>
                <p>
                  <span>
                    주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                  </span>{" "}
                  | <span>대표이사 : 김슬아</span>
                </p>
                <p>
                  <span>
                    입점문의 :{" "}
                    <span className="text-purple-600">입점문의하기</span>
                  </span>{" "}
                  |{" "}
                  <span>
                    제휴문의 :{" "}
                    <a
                      href="mailto:business@karlycorp.com"
                      className="text-purple-600"
                    >
                      business@karlycorp.com
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    채용문의 :{" "}
                    <a
                      href="mailto:recruit@karlycorp.com"
                      className="text-purple-600"
                    >
                      recruit@karlycorp.com
                    </a>
                  </span>
                </p>
                <p>
                  <span>팩스 : 070 - 7500 - 6098</span>
                </p>
              </address>
            </div>
          </div>
          {/* 
          <div className="space-y-2 mb-12 text-sm  ">
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/icons/footer1.svg"
                    alt="정보보호 관리체계 인증마크"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/icons/footer2.svg"
                    alt="개인정보처리시스템 인증마크"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/icons/footer3.svg"
                    alt="토스페이먼츠 구매안전 인증서"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/icons/footer4.svg"
                    alt="우리은행 안전거래 인증서"
                  />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F6F7F7",
          color: "#718096", // Tailwind CSS의 text-gray-600 색상 코드
          fontSize: "12px"
        }}
      >
        <div className="container mx-auto text-center py-4 ">
          <span className="block mb-2">
            마켓칼리에서 판매되는 상품 중에는 마켓칼리에 입점한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </span>
          <span className="block mb-2">
            마켓플레이스(오픈마켓) 상품의 경우 칼리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 칼리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </span>
          <span>&copy; KARLY CORP. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
