import React, { useState, useEffect } from "react";

const FormInput = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [address, setAddress] = useState(""); // add address state here

    const [userIdValid, setUserIdValid] = useState(false);
    const [userPasswordValid, setUserPasswordValid] = useState(false);
    const [userPasswordLengthValid, setUserPasswordLengthValid] =
        useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [userNameValid, setUserNameValid] = useState(true);
    const [userEmailValid, setUserEmailValid] = useState(false);
    const [userEmailFormatValid, setUserEmailFormatValid] = useState(true);
    const [userEmailTouched, setUserEmailTouched] = useState(false);
    const [userNumberValid, setUserNumberValid] = useState(true);
    const [userNumberTouched, setUserNumberTouched] = useState(false);

    const userIdHandler = (e) => {
        setUserId(e.target.value);
        const userIdRegex = /^[a-z0-9!~@#$%^&*()?+=/]{6,16}$/;
        if (userIdRegex.test(userId)) {
            setUserIdValid(true);
        } else {
            setUserIdValid(false);
        }
    };

    const userPasswordHandler = (e) => {
        setUserPassword(e.target.value);

        if (e.target.value.length >= 10) {
            setUserPasswordLengthValid(true);
        } else {
            setUserPasswordLengthValid(false);
        }

        // 수정된 정규표현식
        const userPasswordRegex =
            /^(?![A-Za-z]{1,9}$)(?![~!@#$%^&*()_+=]{1,9}$)(?!\d{1,9}$)[A-Za-z\d~!@#$%^&*()_+=]{9,16}$/;
        if (userPasswordRegex.test(e.target.value)) {
            setUserPasswordValid(true);
        } else {
            setUserPasswordValid(false);
        }
    };

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);

        if (userPassword && e.target.value !== userPassword) {
            setConfirmPasswordValid(false);
        } else {
            setConfirmPasswordValid(true);
        }

        if (e.target.value.length === 0) {
            setConfirmPasswordValid(true);
        }
    };

    const userNameHandler = (e) => {
        setUserName(e.target.value);
        if (e.target.value.length === 0) {
            setUserNameValid(false);
        } else {
            setUserNameValid(true);
        }
    };

    const userEmailHandler = (e) => {
        setUserEmail(e.target.value);
        setUserEmailTouched(true);

        const userEmailRegex =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (e.target.value.length === 0) {
            setUserEmailValid(false);
            setUserEmailFormatValid(true);
        } else if (!userEmailRegex.test(e.target.value)) {
            setUserEmailValid(true);
            setUserEmailFormatValid(false);
        } else {
            setUserEmailValid(true);
            setUserEmailFormatValid(true);
        }
    };

    const userNumberHandler = (e) => {
        setUserNumber(e.target.value);
        setUserNumberTouched(true);

        const numberRegex = /^[0-9]*$/;
        setUserNumberValid(numberRegex.test(e.target.value));

        if (e.target.value === "") {
            setUserNumberValid(false);
        }
    };

    const DateChangeHandler = (e, setValue, maxLength) => {
        const value = e.target.value;
        const newValue = value.replace(/[^0-9]/g, "").slice(0, maxLength);
        setValue(newValue);
    };

    const KeyDownHandler = (e) => {
        if (
            !/[0-9]/.test(e.key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key)
        ) {
            e.preventDefault();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
            address,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("회원가입 성공!");
    };

    useEffect(() => {
        // daum Postcode API 스크립트 로드
        const loadDaumPostcodeScript = (callback) => {
            const script = document.createElement("script");
            script.onload = () => callback();
            script.src =
                "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
            document.head.appendChild(script);
        };
        loadDaumPostcodeScript(() => {
            console.log("Daum Postcode script loaded");
        });
    }, []);
    const sample5_execDaumPostcode = () => {
        if (window.daum && window.daum.Postcode) {
            new window.daum.Postcode({
                oncomplete: function (data) {
                    var addr = data.address; // 최종 주소 변수
                    setAddress(addr);
                },
            }).open();
        } else {
            console.error("Daum Postcode script not loaded yet");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${!userIdValid && userId.length > 0 ? "h-auto" : "h-16"}`}
                >
                    <div class="w-w6 h-h4 mt-4 inline-block">
                        <label class="text-darkGray font-bold">아이디</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="w-w3 h-h1 pl-3.5 border border-lightGray focus:outline rounded text-base placeholder-middleGray"
                            name="userId"
                            type="text"
                            maxLength="16"
                            value={userId}
                            onChange={userIdHandler}
                            placeholder="아이디를 입력해주세요"
                        />
                        {!userIdValid && userId.length > 0 && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                6자 이상 16자 이하의 영문 혹은 영문과 숫자를
                                조합
                            </div>
                        )}
                    </div>
                    <div class="inline-block ml-2">
                        <button class="w-w4 h-h2 border font-bold border-purple text-purple rounded ">
                            중복확인
                        </button>
                    </div>
                </div>

                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${(!userPasswordLengthValid && userPassword.length > 0) || (userPasswordLengthValid && !userPasswordValid) ? "h-auto" : "h-16"}`}
                >
                    <div class="w-w6 h-h4 mt-4 inline-block">
                        <label class="text-darkGray font-bold">비밀번호</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                            name="userPassword"
                            type="password"
                            value={userPassword}
                            maxLength="16"
                            onChange={userPasswordHandler}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        {userPasswordLengthValid && !userPasswordValid && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                영문/숫자/특수문자(공백 제외)만 허용하며, 2개
                                이상 조합
                            </div>
                        )}
                        {!userPasswordLengthValid &&
                            userPassword.length > 0 && (
                                <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                    최소 10자 이상 입력
                                </div>
                            )}
                    </div>
                </div>

                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${(!confirmPasswordValid && confirmPassword.length > 0) || (confirmPassword.length === 0 && userPassword.length) > 0 ? "h-auto" : "h-16"}`}
                >
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">
                            비밀번호확인
                        </label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={confirmPasswordHandler}
                            placeholder="비밀번호를 한번 더 입력해주세요"
                        />
                        {confirmPassword.length === 0 &&
                            userPassword.length > 0 && (
                                <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                    비밀번호를 한번 더 입력해주세요
                                </div>
                            )}
                        {!confirmPasswordValid &&
                            confirmPassword.length > 0 && (
                                <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                    동일한 비밀번호를 입력
                                </div>
                            )}
                    </div>
                </div>

                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${!userNameValid ? "h-auto" : "h-16"}`}
                >
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">이름</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                            name="userName"
                            type="text"
                            maxLength="20"
                            value={userName}
                            onChange={userNameHandler}
                            placeholder="이름을 입력해주세요"
                        />
                        {!userNameValid && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                이름을 입력해주세요
                            </div>
                        )}
                    </div>
                </div>

                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${(userEmailTouched && !userEmailValid) || (userEmailTouched && !userEmailFormatValid) ? "h-auto" : "h-16"}`}
                >
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">이메일</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                            type="email"
                            value={userEmail}
                            onChange={userEmailHandler}
                            placeholder="예: marketkurly@kurly.com"
                        />
                        {userEmailTouched && !userEmailValid && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                이메일을 입력해주세요
                            </div>
                        )}
                        {userEmailTouched && !userEmailFormatValid && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                이메일 형식으로 입력해주세요
                            </div>
                        )}
                    </div>
                    <div class="inline-block ml-2">
                        <button class="border font-bold w-w4 h-h2 border-purple text-purple rounded">
                            중복확인
                        </button>
                    </div>
                </div>

                <div
                    class={`flex w-w2 py-2.5 px-5 text-sm ${userNumberTouched && !userNumberValid ? "h-auto" : "h-16"}`}
                >
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">휴대폰</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input
                            class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
                            name="userNumber"
                            type="text"
                            value={userNumber}
                            maxLength="11"
                            placeholder="숫자만 입력해주세요"
                            onChange={userNumberHandler}
                            onKeyDown={(e) => {
                                // 숫자, 백스페이스, 삭제, 왼쪽/오른쪽 화살표 키만 허용
                                if (
                                    !/[0-9]/.test(e.key) &&
                                    ![
                                        "Backspace",
                                        "Delete",
                                        "ArrowLeft",
                                        "ArrowRight",
                                    ].includes(e.key)
                                ) {
                                    e.preventDefault();
                                }
                            }}
                            onInput={(e) => {
                                // 입력된 값에서 숫자가 아닌 문자는 모두 제거
                                e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    "",
                                );
                            }}
                        />
                        {userNumberTouched && !userNumberValid && (
                            <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                                휴대폰 번호를 입력해주세요
                            </div>
                        )}
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">주소</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <button
                            type="button"
                            onClick={sample5_execDaumPostcode}
                            class="border w-w3 h-h1 rounded border-purple text-purple font-bold"
                        >
                            <span>주소 검색</span>
                        </button>
                        <div class="w-w7 h-h3 py-2.5 text-middleGray text-xs">
                            배송지에 따라 상품 정보가 달라질 수 있습니다
                        </div>
                        {address && <div class="mt-2">{address}</div>}
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

                <div class="py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">생년월일</label>
                    </div>
                    <div class="inline-block border border-lightGray rounded w-w3 h-h1 text-sm">
                        <input
                            class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray focus:outline-none"
                            type="text"
                            value={year}
                            maxLength="4"
                            placeholder="YYYY"
                            onChange={(e) => DateChangeHandler(e, setYear, 4)}
                            onKeyDown={KeyDownHandler}
                        />
                        <span class="text-center text-lightGray">/</span>
                        <input
                            class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
                            type="number"
                            value={month}
                            maxLength="2"
                            placeholder="MM"
                            onChange={(e) => DateChangeHandler(e, setMonth, 2)}
                            onKeyDown={KeyDownHandler}
                        />
                        <span class="text-center text-lightGray">/</span>
                        <input
                            class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none"
                            type="number"
                            value={day}
                            maxLength="2"
                            placeholder="DD"
                            onChange={(e) => DateChangeHandler(e, setDay, 2)}
                            onKeyDown={KeyDownHandler}
                        />
                    </div>
                </div>

                <div class="flex py-2.5 px-5 mt-6 text-sm">
                    <div class="inline-block w-w6 h-h1">
                        <label class="text-darkGray font-bold">
                            추가입력 사항
                        </label>
                    </div>
                    <div>
                        <div class="flex">
                            <div class="flex mr-6">
                                <input
                                    class="w-6 h-6 accent-purple"
                                    name="checked"
                                    type="radio"
                                />
                                <span class="ml-3 mt-1">
                                    친구초대 추천인 아이디
                                </span>
                            </div>
                            <div class="flex">
                                <input
                                    class="w-6 h-6 accent-purple"
                                    name="checked"
                                    type="radio"
                                />
                                <span class="ml-3 mt-1">참여 이벤트명</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid place-items-center w-w2 h-h6 py-2.5 px-5 border-t">
                <button
                    class="w-60 h-14 rounded bg-purple text-white text-center"
                    type="submit"
                >
                    가입하기
                </button>
            </div>
        </form>
    );
};

export default FormInput;
