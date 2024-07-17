import React from "react";
import ReactDOM from "react-dom";
import { popup01 } from "../../assets/images";

const Popup = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "26%",
        left: "50%",
        transform: "translate(-50%, -16%)",
        width: "100%",
        maxWidth: "1050px",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "440px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden"
        }}
      >
        <div>
          <img src={popup01} alt="팝업 이미지" style={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 50px"
            }}
          >
            <button
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "0",
                fontSize: "16px"
              }}
              onClick={onClose}
            >
              오늘 하루 안보기
            </button>
            <button
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "0",
                fontSize: "16px"
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
