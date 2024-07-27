import React, { useContext } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const OauthGoogle = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSuccess = async (response) => {
    try {
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential })
      });

      if (!res.ok) {
        if (res.status === 401) {
          // Unauthorized: Token is invalid or expired
          throw new Error("인증에 실패했습니다. 다시 시도해 주세요.");
        } else {
          throw new Error(
            "서버에서 문제가 발생했습니다. 나중에 다시 시도해 주세요."
          );
        }
      }

      const data = await res.json();
      login(data.token); // 'login' 함수로 백엔드에서 받은 토큰 저장
      localStorage.setItem("authToken", data.token); // 토큰을 로컬 스토리지에 저장
      navigate("/"); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("로그인 실패:", error);
    }
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

// import React, { useContext } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const OauthGoogle = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSuccess = (response) => {
//     console.log("로그인 성공:", response);
//     login(response.credential);
//     navigate("/");
//   };

//   const handleError = (error) => {
//     console.error("로그인 실패:", error);
//   };

//   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

//   return (
//     <div className="flex flex-col mt-6 h-screen items-center">
//       <div className="flex items-center w-full max-w-sm mb-6">
//         <hr className="flex-grow border-gray-300" />
//         <span className="mx-2 text-gray-400 text-sm">또는</span>
//         <hr className="flex-grow border-gray-300" />
//       </div>
//       <GoogleOAuthProvider clientId={clientId}>
//         <GoogleLogin
//           onSuccess={handleSuccess}
//           onError={handleError}
//           render={(renderProps) => (
//             <button
//               onClick={renderProps.onClick}
//               disabled={renderProps.disabled}
//             >
//               Google Login
//             </button>
//           )}
//         />
//       </GoogleOAuthProvider>
//     </div>
//   );
// };

// export default OauthGoogle;
