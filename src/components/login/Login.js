import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useRecoilState } from "recoil"; // Recoil state 사용

import Swal from "sweetalert2";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFindLogin = () => {
    navigate("/reset-username"); // Redirect to FindLogin.js
  };
  const handleFindPassword = () => {
    navigate("/reset-password"); // Redirect to FindPassword.js

    const handleSignUp = async () => {
      // Navigate to the Sign Up page
      navigate("/account"); // Change "/signup" to the actual path to your Sign Up component
    };

    // Update the Sign Up button onClick event
    <button
      onClick={handleSignUp}
      className="mt-1 w-full h-14 bg-white text-[#5f0080] border border-[#5f0080] text-base rounded"
    >
      회원가입
    </button>;
  };
  const handleLogin = async () => {
    try {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const { userId: storedUserId, userPassword } =
          JSON.parse(storedUserData);
        if (userId === storedUserId && password === userPassword) {
          alert("로그인 성공!");
          setError(null);
          login(storedUserId);
          setAuth({ token: storedUserId }); // `login` 함수에 userId 전달 (원하는 대로 커스터마이징 가능)
          navigate("/"); // 로그인 후 메인 페이지로 리디렉션
        } else {
          // 로그인 정보가 일치하지 않는 경우
          Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "아이디 또는 비밀번호가 잘못되었습니다!",
            confirmButtonText: "확인",
          });
        }
      } else {
        // 로컬 스토리지에 데이터가 없는 경우
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
        text: "일어났습니다. 다시 시도해주세요!",
        confirmButtonText: "확인",
      });
    }
  };

  return (
    <main className="min-h-screen flex items-start justify-center font-sans mt-20">
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
        <button
          onClick={handleLogin}
          className="mb-3 w-full h-14 bg-[#5f0080] text-white text-base rounded font-bold"
        >
          로그인
        </button>
        <button
          onClick={handleLogin}
          className="mt-1 w-full h-14 bg-white text-[#5f0080] border border-[#5f0080] text-base rounded"
        >
          회원가입
        </button>
      </div>
    </main>
  );
}

export default Login;
