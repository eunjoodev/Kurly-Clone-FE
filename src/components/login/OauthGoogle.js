import React, { useContext } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const OauthGoogle = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleSuccess = (response) => {
  //   fetch("/api/auth/google", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ token: response.credential }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("로그인 성공:", data);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.error("로그인 실패:", error);
  //     });
  // };

  const handleSuccess = (response) => {
    console.log("로그인 성공:", response);
    login(response.credential); // 'login' 함수 호출
    navigate("/"); // 로그인 성공 시 메인 페이지로 이동
  };

  const handleError = (error) => {
    console.error("로그인 실패:", error);
  };

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="flex flex-col mt-6 h-screen items-center">
      <div className="flex items-center w-full max-w-sm mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400 text-sm">또는</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
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
