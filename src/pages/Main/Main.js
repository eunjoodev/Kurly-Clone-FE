import React, { useState } from "react";
import Popup from "../../components/Popup/Popup";
import "./Main.css";
import MainBanner from "./MainBanner";
import MainBest from "./MainBest";
import MainAd from "./MainAd";
import MainSpecial from "./MainSpecial";

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
