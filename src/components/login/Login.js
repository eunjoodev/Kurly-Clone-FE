import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import OauthGoogle from "./OauthGoogle";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const { userId: storedUserId, userPassword } =
          JSON.parse(storedUserData);
        if (userId === storedUserId && password === userPassword) {
          alert("로그인 성공!");
          setError(null);
          login(storedUserId); // `login` 함수에 userId 전달 (원하는 대로 커스터마이징 가능)
          navigate("/"); // 로그인 후 메인 페이지로 리디렉션
        } else {
          setError("아이디 또는 비밀번호가 잘못되었습니다.");
        }
      } else {
        setError("회원 정보가 존재하지 않습니다.");
      }
    } catch (error) {
      setError("로그인 과정에서 오류가 발생했습니다.");
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
          <a href="/reset-username" className="mr-2">
            아이디 찾기
          </a>{" "}
          |
          <a href="/reset-password" className="ml-2">
            비밀번호 찾기
          </a>
        </div>
        <button
          onClick={handleLogin}
          className="w-full h-14 bg-[#5f0080] text-white text-base rounded font-bold"
        >
          로그인
        </button>
        <button
          onClick={() => alert("회원가입 기능이 현재 비활성화 되어 있습니다.")}
          className="w-full h-14 bg-white text-[#5f0080] text-base rounded border mt-2 font-bold"
        >
          회원가입
        </button>
        <OauthGoogle></OauthGoogle>
      </div>
    </main>
  );
}

export default Login;
