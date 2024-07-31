import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import FormField from "./FormField";

const FormInput = () => {
  const {
    value: userId,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueInputChangeHandler: userIdChangeHandler,
    valueInputBlurHandler: userIdBlurHandler,
    reset: resetUserId,
  } = useInput((value) => /^[a-z0-9!~@#$%^&*()?+=/]{6,16}$/.test(value));

  const {
    value: userPassword,
    isValid: userPasswordIsValid,
    hasError: userPasswordHasError,
    valueInputChangeHandler: userPasswordChangeHandler,
    valueInputBlurHandler: userPasswordBlurHandler,
    reset: resetUserPassword,
  } = useInput(
    (value) =>
      value.length >= 10 &&
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{9,16}$/.test(
        value
      )
  );

  const userPasswordLengthValid = userPassword.length >= 10;

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueInputChangeHandler: confirmPasswordChangeHandler,
    valueInputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value) => value === userPassword);

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueInputChangeHandler: userNameChangeHandler,
    valueInputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: userEmail,
    isValid: userEmailIsValid,
    isTouched: userEmailIsTouched,
    hasError: userEmailHasError,
    valueInputChangeHandler: userEmailChangeHandler,
    valueInputBlurHandler: userEmailBlurHandler,
    reset: resetUserEmail,
  } = useInput((value) => value.includes("@") && value !== "");

  const [userEmailFormatValid, setUserEmailFormatValid] = useState(true);

  useEffect(() => {
    if (userEmail.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setUserEmailFormatValid(emailRegex.test(userEmail));
    }
  }, [userEmail]);

  const {
    value: userNumber,
    isValid: userNumberIsValid,
    hasError: userNumberHasError,
    valueInputChangeHandler: userNumberChangeHandler,
    valueInputBlurHandler: userNumberBlurHandler,
    reset: resetUserNumber,
  } = useInput((value) => /^[0-9]*$/.test(value) && value !== "");

  const {
    value: year,
    valueInputChangeHandler: yearChangeHandler,
    valueInputBlurHandler: yearBlurHandler,
  } = useInput((value) => value.length === 4);

  const {
    value: month,
    valueInputChangeHandler: monthChangeHandler,
    valueInputBlurHandler: monthBlurHandler,
  } = useInput((value) => value.length === 2);

  const {
    value: day,
    valueInputChangeHandler: dayChangeHandler,
    valueInputBlurHandler: dayBlurHandler,
  } = useInput((value) => value.length === 2);

  const navigate = useNavigate();

  const [userAddress, setUserAddress] = useState("");

  const loadDaumPostcodeScript = (callback) => {
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = callback;
    document.head.appendChild(script);
  };

  const handleAddressSearch = () => {
    loadDaumPostcodeScript(() => {
      new window.daum.Postcode({
        oncomplete: (data) => {
          const fullAddress = data.roadAddress || data.jibunAddress;
          setUserAddress(fullAddress);
        },
      }).open();
    });
  };

  let formIsValid = false;

  if (
    userIdIsValid &&
    userPasswordIsValid &&
    confirmPasswordIsValid &&
    userNameIsValid &&
    userEmailIsValid &&
    userNumberIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const userData = {
      userId,
      userPassword,
      confirmPassword,
      userName,
      userEmail,
      userNumber,
      year,
      month,
      day,
      userAddress,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("회원가입 성공!");
    navigate("/login");

    resetUserId();
    resetUserPassword();
    resetConfirmPassword();
    resetUserName();
    resetUserEmail();
    resetUserNumber();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="아이디"
        name="userId"
        value={userId}
        onChange={userIdChangeHandler}
        onBlur={userIdBlurHandler}
        placeholder="아이디를 입력해주세요"
        maxLength="16"
        hasError={userIdHasError}
        errorMessage="6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합"
        isRequired
        additionalContent={
          <button className="w-w4 h-h2 border font-medium border-purple text-purple rounded">
            중복확인
          </button>
        }
      />
      <FormField
        label="비밀번호"
        type="password"
        name="userPassword"
        value={userPassword}
        onChange={userPasswordChangeHandler}
        onBlur={userPasswordBlurHandler}
        placeholder="비밀번호를 입력해주세요"
        maxLength="16"
        hasError={userPasswordHasError}
        errorMessage={
          !userPasswordLengthValid && userPassword.length > 0
            ? "최소 10자 이상 입력"
            : "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
        }
        isRequired
      />
      <FormField
        label="비밀번호확인"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={confirmPasswordChangeHandler}
        onBlur={confirmPasswordBlurHandler}
        placeholder="비밀번호를 한번 더 입력해주세요"
        maxLength="16"
        hasError={
          confirmPasswordHasError ||
          (!confirmPasswordIsValid && confirmPassword.length > 0)
        }
        errorMessage={
          confirmPassword.length === 0
            ? "비밀번호를 한번 더 입력해주세요"
            : "동일한 비밀번호를 입력"
        }
        isRequired
      />
      <FormField
        label="이름"
        name="userName"
        value={userName}
        onChange={userNameChangeHandler}
        onBlur={userNameBlurHandler}
        placeholder="이름을 입력해주세요"
        hasError={userNameHasError}
        errorMessage="이름을 입력해주세요"
        isRequired
      />
      <FormField
        label="이메일"
        type="email"
        name="userEmail"
        value={userEmail}
        onChange={userEmailChangeHandler}
        onBlur={userEmailBlurHandler}
        placeholder="예: marketkurly@kurly.com"
        hasError={
          userEmailHasError || (!userEmailFormatValid && userEmailIsTouched)
        }
        errorMessage={
          userEmail.length === 0
            ? "이메일을 입력해주세요"
            : "이메일 형식으로 입력해주세요"
        }
        isRequired
        additionalContent={
          <button className="w-w4 h-h2 border font-medium border-purple text-purple rounded">
            중복확인
          </button>
        }
      />
      <FormField
        label="휴대폰"
        type="tel"
        name="userNumber"
        value={userNumber}
        onChange={userNumberChangeHandler}
        onBlur={userNumberBlurHandler}
        placeholder="숫자만 입력해주세요"
        maxLength="11"
        hasError={userNumberHasError}
        errorMessage="휴대폰 번호를 입력해주세요"
        isRequired
        onKeyDown={(e) => {
          if (
            !/[0-9]/.test(e.key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key)
          ) {
            e.preventDefault();
          }
        }}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }}
      />
      <div className="flex w-w2 py-2.5 px-5 text-sm">
        <div className="inline-block w-w6 mt-4">
          <label className="text-darkGray font-medium">주소</label>
          <span class="text-red">*</span>
        </div>
        <div className="inline-block">
          {userAddress ? (
            <div>
              <input
                className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                name="userAddress"
                type="text"
                value={userAddress}
                required
              />
              <div className="inline-block ml-2">
                <button
                  type="button"
                  onClick={handleAddressSearch}
                  className="w-w4 h-h2 border font-medium border-purple text-purple rounded"
                >
                  재검색
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddressSearch}
              className="w-w3 h-h1 border font-medium border-purple text-purple rounded"
            >
              주소검색
            </button>
          )}
          <div class="w-w7 h-h3 py-2.5 text-middleGray text-xs">
            배송지에 따라 상품 정보가 달라질 수 있습니다
          </div>
        </div>
      </div>

      <div class="flex py-2.5 px-5 text-sm">
        <div class="inline-block w-w6 h-h1">
          <label class="text-darkGray font-medium">성별</label>
        </div>
        <div>
          <div class="flex">
            <div class="flex mr-14">
              <input
                class="w-6 h-6 accent-purple outline-radioColor"
                name="check"
                type="radio"
              />
              <span class="ml-3 mt-1">남자</span>
            </div>
            <div class="flex mr-14">
              <input class="w-6 h-6 accent-purple" name="check" type="radio" />
              <span class="ml-3 mt-1">여자</span>
            </div>
            <div class="flex">
              <input class="w-6 h-6 accent-purple" name="check" type="radio" />
              <span class="ml-3 mt-1">선택안함</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-w2 py-2.5 px-5 text-sm">
        <div className="inline-block w-w6 mt-4">
          <label className="text-darkGray font-medium">생년월일</label>
        </div>
        <div className="inline-block border border-lightGray rounded w-w3 h-h1 text-sm">
          <input
            className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray focus:outline-none"
            name="year"
            type="text"
            maxLength="4"
            value={year}
            onChange={yearChangeHandler}
            onBlur={yearBlurHandler}
            placeholder="YYYY"
          />
          <span class="text-center text-lightGray">/</span>
          <input
            className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
            name="month"
            type="text"
            maxLength="2"
            value={month}
            onChange={monthChangeHandler}
            onBlur={monthBlurHandler}
            placeholder="MM"
          />
          <span class="text-center text-lightGray">/</span>
          <input
            className="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
            name="day"
            type="text"
            maxLength="2"
            value={day}
            onChange={dayChangeHandler}
            onBlur={dayBlurHandler}
            placeholder="DD"
          />
        </div>
      </div>

      <div className="py-2.5"></div>

      <div className="grid place-items-center w-w2 h-h6 py-10 px-5 mb-[60px] border-t border-darkGray">
        <button
          type="submit"
          disabled={!formIsValid}
          className="w-60 h-14 rounded bg-purple text-white text-center"
        >
          가입하기
        </button>
      </div>
    </form>
  );
};

export default FormInput;
