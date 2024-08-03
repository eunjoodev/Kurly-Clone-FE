import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import FormField from "./FormField";
import AddressField from "./AddressField";
import DateOfBirthField from "./DateOfBirthField";
import GenderField from "./GenderField";
import Modal from "./CA-Modal/Modal";

const FormInput = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isUserIdChecked, setIsUserIdChecked] = useState(false);
  const [isUserEmailChecked, setIsUserEmailChecked] = useState(false);

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

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
  } = useInput((value) => value.trim().length > 1);

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
  } = useInput((value) => /^[0-9]{10,11}$/.test(value));

  const {
    value: year,
    valueInputChangeHandler: yearChangeHandler,
    valueInputBlurHandler: yearBlurHandler,
  } = useInput((value) => /^[0-9]{4}$/.test(value));

  const {
    value: month,
    valueInputChangeHandler: monthChangeHandler,
    valueInputBlurHandler: monthBlurHandler,
  } = useInput((value) => /^(0?[1-9]|1[012])$/.test(value));

  const {
    value: day,
    valueInputChangeHandler: dayChangeHandler,
    valueInputBlurHandler: dayBlurHandler,
  } = useInput((value) => /^(0?[1-9]|[12][0-9]|3[01])$/.test(value));

  const navigate = useNavigate();

  const [userAddress, setUserAddress] = useState("");

  const handleAddressSearch = () => {
    const loadDaumPostcodeScript = (callback) => {
      const script = document.createElement("script");
      script.src =
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = callback;
      document.head.appendChild(script);
    };

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
    userNumberIsValid &&
    isUserIdChecked &&
    isUserEmailChecked
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isUserIdChecked || !isUserEmailChecked) {
      openModal("아이디 또는 이메일 중복 체크를 해주세요");
      return;
    }

    if (isUserIdChecked && isUserEmailChecked && !formIsValid) {
      openModal("필수입력사항을 모두 작성해주세요");
      return;
    }

    if (!formIsValid) return;

    const userData = {
      id: userId,
      password: userPassword,
      password_check: confirmPassword,
      name: userName,
      email: userEmail,
      phone_number: userNumber,
      address: userAddress,
      year,
      month,
      day,
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

  const handleUserIdCheck = async () => {
    if (!userIdIsValid) {
      openModal("6자 이상의 영문 혹은 영문과 숫자를 조합하여 입력해주세요");
      return;
    }

    try {
      const response = await fetch(`/auth/id?id=${userId}`, {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        if (data.isAvailable) {
          openModal("사용 할 수 있는 아이디 입니다");
          setIsUserIdChecked(true);
        } else {
          openModal("이미 사용 중인 아이디 입니다");
        }
      } else {
        openModal("아이디 중복 체크에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      openModal("서버와 통신 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleUserEmailCheck = async () => {
    if (userEmail.trim() === "") {
      openModal("이메일을 입력해주세요");
      return;
    }
    if (!userEmailIsValid) {
      openModal("이메일 형식으로 입력해주세요");
      return;
    }

    try {
      const response = await fetch(`/auth/email?email=${userEmail}`, {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        if (data.isAvailable) {
          openModal("사용 가능한 이메일 입니다.");
          setIsUserEmailChecked(true);
        } else {
          openModal("이미 사용 중인 이메일 입니다.");
        }
      } else {
        openModal("이메일 중복 체크에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      openModal("서버와 통신 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
      <form onSubmit={handleSubmit} className={isModalOpen ? "blurred" : ""}>
        <FormField
          label="아이디"
          name="userId"
          value={userId}
          onChange={userIdChangeHandler}
          onBlur={userIdBlurHandler}
          placeholder="아이디를 입력해주세요"
          maxLength="16"
          isRequired
          hasError={userIdHasError}
          errorMessage="6자 이상의 영문 혹은 영문과 숫자를 조합하여 입력해주세요."
          additionalContent={
            <button
              type="button"
              className="w-w4 h-h2 border font-medium border-purple text-purple rounded"
              onClick={handleUserIdCheck}
            >
              중복확인
            </button>
          }
        />

        <FormField
          label="비밀번호"
          name="userPassword"
          type="password"
          value={userPassword}
          onChange={userPasswordChangeHandler}
          onBlur={userPasswordBlurHandler}
          placeholder="비밀번호를 입력해주세요."
          maxLength="16"
          isRequired
          hasError={userPasswordHasError}
          errorMessage={
            !userPasswordLengthValid && userPassword.length > 0
              ? "최소 10자 이상 입력"
              : "영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
          }
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
          placeholder="이름을 입력해주세요."
          isRequired
          hasError={userNameHasError}
          errorMessage="이름을 입력해주세요."
        />

        <FormField
          label="이메일"
          name="userEmail"
          type="email"
          value={userEmail}
          onChange={userEmailChangeHandler}
          onBlur={userEmailBlurHandler}
          placeholder="예: marketkurly@kurly.com"
          isRequired
          hasError={
            userEmailHasError || (!userEmailFormatValid && userEmailIsTouched)
          }
          errorMessage={
            userEmail.length === 0
              ? "이메일을 입력해주세요"
              : "이메일 형식으로 입력해주세요"
          }
          additionalContent={
            <button
              type="button"
              className="w-w4 h-h2 border font-medium border-purple text-purple rounded"
              onClick={handleUserEmailCheck}
            >
              중복확인
            </button>
          }
        />

        <FormField
          label="휴대폰"
          name="userNumber"
          type="tel"
          value={userNumber}
          onChange={userNumberChangeHandler}
          onBlur={userNumberBlurHandler}
          placeholder="숫자만 입력해주세요."
          maxLength="11"
          isRequired
          hasError={userNumberHasError}
          errorMessage="휴대폰 번호를 입력해주세요."
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

        <AddressField
          userAddress={userAddress}
          handleAddressSearch={handleAddressSearch}
        />

        <GenderField />

        <DateOfBirthField
          year={year}
          month={month}
          day={day}
          yearChangeHandler={yearChangeHandler}
          monthChangeHandler={monthChangeHandler}
          dayChangeHandler={dayChangeHandler}
          yearBlurHandler={yearBlurHandler}
          monthBlurHandler={monthBlurHandler}
          dayBlurHandler={dayBlurHandler}
        />

        <div className="py-2.5"></div>

        <div className="grid place-items-center w-w2 h-h6 py-10 px-5 mb-[60px] border-t border-darkGray">
          <button
            className="w-60 h-14 rounded bg-purple text-white text-center"
            type="submit"
          >
            가입하기
          </button>
        </div>
      </form>
    </>
  );
};

export default FormInput;
