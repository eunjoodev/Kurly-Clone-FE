import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useSetRecoilState } from "recoil";
import { authState } from "../../state/authAtom";
import Swal from "sweetalert2";
import "./Login.css"; // CSS 파일을 임포트합니다.

function generateCaptcha() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
import OauthGoogle from "./OauthGoogle";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const { login } = useContext(AuthContext);
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleFindLogin = () => {
    navigate("/reset-username");
  };

  const handleFindPassword = () => {
    navigate("/reset-password");
  };

  const handleSignUp = async () => {
    navigate("/account");
  };

  const handleLogin = async () => {
    try {
      if (loginAttempts >= 2) {
        // 캡차 검증 단계
        if (captchaInput !== captcha) {
          Swal.fire({
            icon: "error",
            title: "인증 실패",
            text: "인증번호를 정확하게 입력해주세요!",
            confirmButtonText: "확인",
          });
          return; // 검증 실패 시 로그인 로직을 진행하지 않음
        }
      }

      const storedUserData = localStorage.getItem("userData");

      if (storedUserData) {
        const { userId: storedUserId, userPassword } =
          JSON.parse(storedUserData);
        if (userId === storedUserId && password === userPassword) {
          setError(null);
          login(storedUserId);
          setAuth({ token: storedUserId });

          Swal.fire({
            icon: "success",
            title: "로그인 성공",
            text: "로그인에 성공하였습니다!",
            confirmButtonText: "확인",
          }).then(() => {
            navigate("/");
          });
        } else {
          setLoginAttempts((prev) => prev + 1);
          Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "아이디 또는 비밀번호가 잘못되었습니다!",
            confirmButtonText: "확인",
          });
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "경고",
          text: "저장된 사용자 데이터가 없습니다!",
          confirmButtonText: "확인",
        });
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "일어났습니다. 다시 시도해주세요! " + error.message,
        confirmButtonText: "확인",
      });
    }
  };

  return (
    <main className="flex items-start justify-center my-20">
      <div className="p-8 bg-white w-96">
        <h2 className="font-bold text-2xl text-center mb-4 text-black-800">
          로그인
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="text-right text-sm text-gray-500 mb-4">
          <button onClick={handleFindLogin} className="mr-2">
            아이디 찾기
          </button>{" "}
          |
          <button onClick={handleFindPassword} className="ml-2">
            비밀번호 찾기
          </button>
        </div>

        {loginAttempts >= 2 && (
          <div className="captcha-container">
            <div className="captcha-header">인증번호를 입력하세요</div>
            <div className="captcha-box">
              <span className="captcha-code">{captcha}</span>
            </div>
            <input
              type="text"
              placeholder="인증번호 입력"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="captcha-input"
            />
          </div>
        )}

        <button
          onClick={handleLogin}
          className="mb-3 w-full h-14 bg-[#5f0080] text-white text-base rounded font-bold"
        >
          로그인
        </button>
        <button
          onClick={handleSignUp}
          className="mt-1 w-full h-14 bg-white text-[#5f0080] border border-[#5f0080] text-base rounded"
        >
          회원가입
        </button>
        <OauthGoogle></OauthGoogle>
      </div>
    </main>
  );
}

export default Login;
