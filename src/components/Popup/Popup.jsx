import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { popup01 } from "../../assets/images";

const Popup = ({ onClose }) => {
  useEffect(() => {
    // 로컬 스토리지에서 'hidePopup' 값을 확인
    const hidePopupTimestamp = localStorage.getItem("hidePopupTimestamp");
    if (hidePopupTimestamp) {
      const currentTime = new Date().getTime();
      const hidePopupTime = new Date(
        parseInt(hidePopupTimestamp, 10)
      ).getTime();

      // 24시간(86400000 밀리초)이 지났는지 확인
      if (currentTime - hidePopupTime < 86400000) {
        onClose(); // 팝업을 닫음
      } else {
        localStorage.removeItem("hidePopupTimestamp");
      }
    }
  }, [onClose]);

  const handleHideToday = () => {
    // 로컬 스토리지에 현재 시간을 타임스탬프로 저장
    localStorage.setItem("hidePopupTimestamp", new Date().getTime().toString());
    onClose(); // 팝업을 닫음
  };

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "26%",
        left: "50%",
        transform: "translate(-50%, -16%)",
        width: "100%",
        maxWidth: "1050px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "440px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <div>
          <img src={popup01} alt="팝업 이미지" style={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 50px",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "0",
                fontSize: "16px",
              }}
              onClick={handleHideToday}
            >
              오늘 하루 안보기
            </button>
            <button
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "0",
                fontSize: "16px",
              }}
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("popup-root")
  );
};

export default Popup;
