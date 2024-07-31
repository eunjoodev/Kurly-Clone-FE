import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

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
    isTouched: userPasswordIsTouched,
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

  // const [userAddress, setUserAddress] = useState("");
  const [userAddress, setUserAddress] = useState([]);

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
          // setUserAddress(fullAddress);
          setUserAddress((prevAddress) => [...prevAddress, fullAddress]);
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

  //   useEffect(() => {
  //     const loadDaumPostcodeScript = (callback) => {
  //       const script = document.createElement("script");
  //       script.onload = () => callback();
  //       script.src =
  //         "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  //       document.head.appendChild(script);
  //     };
  //     loadDaumPostcodeScript(() => {
  //       console.log("Daum Postcode script loaded");
  //     });
  //   }, []);

  //   const sample5_execDaumPostcode = () => {
  //     if (window.daum && window.daum.Postcode) {
  //       new window.daum.Postcode({
  //         oncomplete: function (data) {
  //           var addr = data.address;
  //           setAddress(addr);
  //         },
  //       }).open();
  //     } else {
  //       console.error("Daum Postcode script not loaded yet");
  //     }
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            userIdHasError ? "h-auto" : "h-16"
          }`}
        >
          <div className="w-w6 mt-4 inline-block">
            <label className="text-darkGray font-bold">아이디</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="w-w3 h-h1 pl-3.5 border border-lightGray focus:outline rounded text-base placeholder-middleGray"
              name="userId"
              type="text"
              maxLength="16"
              value={userId}
              onChange={userIdChangeHandler}
              onBlur={userIdBlurHandler}
              placeholder="아이디를 입력해주세요"
              required
            />
            {userIdHasError && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
              </div>
            )}
          </div>
          <div className="inline-block ml-2">
            <button className="w-w4 h-h2 border font-bold border-purple text-purple rounded">
              중복확인
            </button>
          </div>
        </div>

        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            (!userPasswordLengthValid && userPassword.length > 0) ||
            userPasswordHasError
              ? "h-auto"
              : "h-16"
          }`}
        >
          <div className="w-w6 mt-4 inline-block">
            <label className="text-darkGray font-bold">비밀번호</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name="userPassword"
              type="password"
              value={userPassword}
              maxLength="16"
              onChange={userPasswordChangeHandler}
              onBlur={userPasswordBlurHandler}
              placeholder="비밀번호를 입력해주세요"
              required
            />
            {userPasswordIsTouched && userPassword.length <= 0 && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
              </div>
            )}
            {!userPasswordLengthValid && userPassword.length > 0 && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                최소 10자 이상 입력
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            (!confirmPasswordIsValid && confirmPassword.length > 0) ||
            (confirmPassword.length === 0 && userPassword.length > 0)
              ? "h-auto"
              : "h-16"
          }`}
        >
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">비밀번호확인</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name="confirmPassword"
              type="password"
              maxLength="16"
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              placeholder="비밀번호를 한번 더 입력해주세요"
              required
            />
            {confirmPasswordHasError &&
              confirmPassword.length === 0 &&
              userPassword.length > 0 && (
                <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                  비밀번호를 한번 더 입력해주세요
                </div>
              )}
            {!confirmPasswordIsValid && confirmPassword.length > 0 && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                동일한 비밀번호를 입력
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            userNameHasError ? "h-auto" : "h-16"
          }`}
        >
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">이름</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name="userName"
              type="text"
              value={userName}
              maxLength="8"
              onChange={userNameChangeHandler}
              onBlur={userNameBlurHandler}
              placeholder="이름을 입력해주세요"
              required
            />
            {userNameHasError && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                이름을 입력해주세요.
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            userEmailHasError ? "h-auto" : "h-16"
          }`}
        >
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">이메일</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name="userEmail"
              type="email"
              maxLength="30"
              value={userEmail}
              onChange={userEmailChangeHandler}
              onBlur={userEmailBlurHandler}
              placeholder="예: marketkurly@kurly.com"
              required
            />
            {userEmailIsTouched && userEmail.length <= 0 && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                이메일을 입력해주세요
              </div>
            )}
            {userEmailHasError &&
              !userEmailFormatValid &&
              userEmail.length > 0 && (
                <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                  이메일 형식으로 입력해주세요
                </div>
              )}
          </div>
          <div className="inline-block ml-2">
            <button className="w-w4 h-h2 border font-bold border-purple text-purple rounded">
              중복확인
            </button>
          </div>
        </div>

        <div
          className={`flex w-w2 py-2.5 px-5 text-sm ${
            userNumberHasError ? "h-auto" : "h-16"
          }`}
        >
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">휴대폰</label>
            <span className="text-red">*</span>
          </div>
          <div className="inline-block">
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name="userNumber"
              type="tel"
              maxLength="11"
              value={userNumber}
              onChange={userNumberChangeHandler}
              onBlur={userNumberBlurHandler}
              placeholder="숫자만 입력해주세요"
              required
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            {userNumberHasError && (
              <div className="text-red w-w7 h-h3 py-2.5 text-xs">
                전화번호를 입력해주세요.
              </div>
            )}
          </div>
        </div>

        <div className="flex w-w2 py-2.5 px-5 text-sm">
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">주소</label>
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
                    className="w-w4 h-h2 border font-bold border-purple text-purple rounded"
                  >
                    재검색
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleAddressSearch}
                className="border w-w3 h-h1 rounded border-purple text-purple font-bold"
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
            <label class="text-darkGray font-bold">성별</label>
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
                <input
                  class="w-6 h-6 accent-purple"
                  name="check"
                  type="radio"
                />
                <span class="ml-3 mt-1">여자</span>
              </div>
              <div class="flex">
                <input
                  class="w-6 h-6 accent-purple"
                  name="check"
                  type="radio"
                />
                <span class="ml-3 mt-1">선택안함</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-w2 py-2.5 px-5 text-sm">
          <div className="inline-block w-w6 mt-4">
            <label className="text-darkGray font-bold">생년월일</label>
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
        <div className="grid place-items-center w-w2 h-h6 py-10 px-5 mb-[60px] border-t">
          <button
            className="w-60 h-14 rounded bg-purple text-white text-center"
            type="submit"
            disabled={!formIsValid}
          >
            가입하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
