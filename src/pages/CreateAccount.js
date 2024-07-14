import React from 'react';

const CreateAccount = () => {
    return (
        <div class="m-m2">
            <div>
                <h1 class="text-mySize font-bold mb-12 text-3xl my-14 grid place-items-center">회원가입</h1>
            </div>
            <div class="grid place-items-center">
                <div class="border-b-2 w-w2 border-gray-800 text-right text-xs pb-2.5">
                    <span class="text-red-400">*</span>
                    <text>필수입력사항</text>
                </div>
                <form>
                    <ul class="text-t1">
                        <div class="w-w2 py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>아이디</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <div class="inline-block">
                                    <input class="border w-w3 h-h1 rounded text-sm" type="text" placeholder="아이디를 입력해주세요"/>
                                    <button class="border border-violet-800 w-w4 h-h2 text-violet-800 rounded">중복확인</button>
                                </div>
                            </li>   
                            <div class="text-red-400">
                                6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합 
                            </div>
                        </div>
                        <div class="py-2.5 px-5"> 
                            <li>
                                <div class="inline-block w-w6">
                                    <label>비밀번호</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <input class="border w-w3 h-h1 rounded text-sm" type="password" placeholder="비밀번호를 입력해주세요"/>
                            </li>
                            <div class="text-red-400">
                                영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                            </div> 
                            <div class="text-red-400">
                                최소 10자 이상 입력
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>비밀번호확인</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <input class="border w-w3 h-h1 rounded text-sm" type="password" placeholder="비밀번호를 한번 더 입력해주세요"/>
                            </li>
                            <div class="text-red-400">
                                비밀번호를 한번 더 입력해주세요
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>이름</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <input class="border w-w3 h-h1 rounded text-sm" type="text" placeholder="이름을 입력해주세요"/>
                            </li>
                            <div class="text-red-400">
                                이름을 입력해주새요
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>이메일</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <div class="inline-block">
                                    <input class="border w-w3 h-h1 rounded text-sm" type="text" placeholder="예: marketkurly@kurly.com"/>
                                    <button class="border w-w4 h-h2 border-violet-800 text-violet-800 rounded">중복확인</button>
                                </div>
                            </li>
                            <div class="text-red-400">
                                이메일을 입력해주세요
                            </div>
                            <div class="text-red-400">
                                이메일 형식으로 입력해주세요
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>휴대폰</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <input class="border w-w3 h-h1 rounded text-sm" type="number" placeholder="숫자만 입력해주세요"/>
                            </li>
                            <div class="text-red-400">
                                휴대폰 번호를 입력해주세요
                            </div> 
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>주소</label>
                                    <span class="text-red-400">*</span>
                                </div>
                                <button class="border w-w3 h-h1">주소 검색</button>
                            </li>
                            <div>
                                배송지에 따라 상품 정보가 달라질 수 있습니다
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>성별</label>
                                </div>
                                <input type="radio"/>남성
                                <input type="radio"/>여성
                            </li>
                        </div>
                        <div class="py-2.5 px-5">
                            <li>
                                <div class="inline-block w-w6">
                                    <label>생년월일</label>
                                </div>
                                <div class="inline-block border w-w3 h-h1 text-sm">
                                    <input class="w-w5" type="number"/>
                                    <span>/</span>
                                    <input class="w-w5" type="number"/>
                                    <span>/</span>
                                    <input class="w-w5" type="number"/>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <div class="py-2.5 px-5">
                        <button submit>가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
        
export default CreateAccount;