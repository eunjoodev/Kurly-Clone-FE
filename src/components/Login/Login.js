import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const dummyToken = "dummy-token";
      alert("로그인 성공: " + dummyToken);
      setError(null);
      login(dummyToken); // `login` 함수에 더미 토큰 전달
      navigate("/"); // 로그인 후 메인 페이지로 리디렉션
    } catch (error) {
      setError(error.response ? error.response.data : "Unknown error occurred");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center font-sans">
      <div className="p-8 bg-white w-96">
        <h2 className="font-bold text-2xl text-center mb-4 text-black-800">
          로그인
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      </div>
    </main>
  );
}

export default Login;
