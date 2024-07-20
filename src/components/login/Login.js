import React, { useEffect, useReducer, useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 0,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 0,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    setFormIsValid(usernameState.isValid && passwordState.isValid);
  }, [usernameState.isValid, passwordState.isValid]);

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(usernameState.value, passwordState.value);
    navigate("/");
  };

  return (
    <main className="min-h-screen flex items-start justify-center font-sans mt-20">
      <div className="p-8 bg-white w-96">
        <h2 className="font-bold text-2xl text-center mb-4 text-black-800">
          로그인
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              value={usernameState.value}
              onChange={usernameChangeHandler}
              onBlur={validateUsernameHandler}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
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
            type="submit"
            className="w-full h-14 bg-[#5f0080] text-white text-base rounded font-bold"
            disabled={!formIsValid}
          >
            로그인
          </button>
        </form>
        <button
          disabled={!formIsValid}
          onClick={() => alert("회원가입 기능이 현재 비활성화 되어 있습니다.")}
          className="w-full h-14 bg-white text-[#5f0080] text-base rounded border mt-2 font-bold"
        >
          회원가입
        </button>
      </div>
    </main>
  );
};

export default Login;
