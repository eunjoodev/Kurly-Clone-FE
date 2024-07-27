import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const OauthGoogle = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("로그인 성공:", data);
        navigate("/"); // 로그인 성공 시 메인 페이지로 이동
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  };

  const handleError = (error) => {
    console.error("로그인 실패:", error);
  };

  return (
    <div className="flex flex-col mt-6 h-screen">
      <div className="flex items-center w-full max-w-sm mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400 text-sm">또는</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="w-full max-w-sm bg-blue-500 text-white py-3 px-6 rounded shadow-lg"
            >
              Google Login
            </button>
          )}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default OauthGoogle;
