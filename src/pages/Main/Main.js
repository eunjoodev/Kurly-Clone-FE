import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import "./Main.css";
import MainBanner from "./MainBanner";
import MainBest from "./MainBest";
import MainAd from "./MainAd";
import MainSpecial from "./MainSpecial";

//메인 페이지 렌더링 될때 팝업 창이 뜹니다. 팝업은 portal로 구현되어있습니다.
function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopupHandler = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && <Popup onClose={closePopupHandler} />}
      <main>
        <MainBanner></MainBanner>
        <MainBest></MainBest>
        <MainAd></MainAd>
        <MainSpecial></MainSpecial>

        {/* 차후 구현 예정 */}
        {/* <aside className="shadow-md fixed top-2/3 transform -translate-y-1/2 right-6">
          <div className="items-center w-20 h-36">
            <a href="/">
              <img className="" src={side} alt="장바구니 아이콘" />
            </a>
          </div>
        </aside> */}
      </main>
    </>
  );
}

export default Main;
