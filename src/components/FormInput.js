import React, { useState } from 'react';

const FormInput = () => {
    // useState를 이용한 상태 설정

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setUserNumber] = useState("");


    const [userIdValid, setUserIdValid] = useState(false);
    const [userPasswordValid, setUserPasswordValid] = useState(false);


    //onChangeHandler
    const userIdHandler = (e) => {
        setUserId(e.target.value);
        const userIdRegex = /^[a-z0-9!~@#$%^&*()?+=\/]{6,16}$/; 
        if(userIdRegex.test(userId)){
            setUserIdValid(true);
        }else {
            setUserIdValid(false);
        }
    }

    const userPasswordHandler = (e) => {
        setUserPassword(e.target.value);
        const userPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
        if(userPasswordRegex.test(userPassword)){
            setUserPasswordValid(true);
        }else {
            setUserPasswordValid(false);
        }
    };


        


    
    return (
    //회원가입 UI 구현
        <form>
            <div>
                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="w-w6 h-h4 mt-4 inline-block">
                        <label class="text-darkGray font-bold">아이디</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input 
                            class="w-w3 h-h1 pl-3.5 border border-lightGray focus:outline rounded text-sm placeholder-middleGray" 
                            name="userId" 
                            type="text"
                            maxlength="16"
                            value={userId}
                            onChange={userIdHandler}
                            placeholder="아이디를 입력해주세요"
                        />
                        {!userIdValid && userId.length > 0 && (<div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합 
                        </div>)}
                    </div>
                    <div class="inline-block ml-2">    
                        <button class="w-w4 h-h2 border font-bold border-purple text-purple rounded ">중복확인</button>
                    </div>             
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm"> 
                    <div class="w-w6 h-h4 mt-4 inline-block">
                        <label class="text-darkGray font-bold">비밀번호</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" 
                            name="userPassword" 
                            type="password"
                            value={userPassword}
                            onChange={userPasswordHandler}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        {!userPasswordValid && userPassword.length > 0 && (<div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                        </div>)} 
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            최소 10자 이상 입력
                        </div>
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">비밀번호확인</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" 
                            name="confirmPassword" 
                            type="password" 
                            value={confirmPassword}
                            placeholder="비밀번호를 한번 더 입력해주세요"
                        />
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            비밀번호를 한번 더 입력해주세요
                        </div>
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">이름</label>
                            <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" 
                            name="userName" 
                            type="text"
                            value={userName}
                            placeholder="이름을 입력해주세요"
                        />
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            이름을 입력해주세요
                        </div>
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">이메일</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" 
                            type="email"
                            value={userEmail}
                            placeholder="예: marketkurly@kurly.com"
                        />
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            이메일을 입력해주세요
                        </div>
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            이메일 형식으로 입력해주세요
                        </div>
                    </div>
                    <div class="inline-block ml-2">  
                        <button class="border font-bold w-w4 h-h2 border-purple text-purple rounded">중복확인</button>
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm"> 
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">휴대폰</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <input class="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" 
                            name="userNumber" 
                            type="number" 
                            value={userNumber}
                            placeholder="숫자만 입력해주세요" 
                            onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        />
                        <div class="text-red w-w7 h-h3 py-2.5 text-xs">
                            휴대폰 번호를 입력해주세요
                        </div>
                    </div>
                </div>

                <div class="flex w-w2 h-h5 py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">주소</label>
                        <span class="text-red">*</span>
                    </div>
                    <div class="inline-block">
                        <button class="border w-w3 h-h1 rounded border-purple text-purple font-bold">
                            <span>주소 검색</span>
                        </button>
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

                <div class="py-2.5 px-5 text-sm">
                    <div class="inline-block w-w6 mt-4">
                        <label class="text-darkGray font-bold">생년월일</label>
                    </div>
                    <div class="inline-block border border-lightGray rounded w-w3 h-h1 text-sm">
                        <input 
                            class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray focus:outline-none" 
                            type="number" 
                            placeholder="YYYY" 
                            onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        />
                        <span class="text-center text-lightGray">/</span>
                        <input 
                            class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none" 
                            type="number" 
                            placeholder="MM" 
                            onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        />
                        <span class="text-center text-lightGray">/</span> 
                        <input class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 placeholder-middleGray focus:outline-none" 
                            type="number" 
                            placeholder="DD" 
                            onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        />
                    </div>
                </div>

                <div class="flex py-2.5 px-5 mt-6 text-sm">
                    <div class="inline-block w-w6 h-h1">
                        <label class="text-darkGray font-bold">추가입력 사항</label>
                    </div>
                    <div>
                        <div class="flex"> 
                            <div class="flex mr-6">
                                <input class="w-6 h-6 accent-purple" name="checked" type="radio"/>
                                <span class="ml-3 mt-1">친구초대 추천인 아이디</span>
                            </div>
                            <div class="flex">
                                <input class="w-6 h-6 accent-purple" name="checked" type="radio"/>
                                <span class="ml-3 mt-1">참여 이벤트명</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid place-items-center w-w2 h-h6 py-2.5 px-5 border-t">
                <button class="w-60 h-14 rounded bg-purple text-white text-center" type="submit">가입하기
                </button>
            </div>
        </form>        
    );
};

export default FormInput;