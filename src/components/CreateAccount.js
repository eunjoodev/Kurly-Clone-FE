import React from "react";


const CreateAccount = () => {
    return (
        <div class="m-m2">
            <div>
                <h1 class="text-mySize font-bold text-darkGray mb-12 text-3xl my-14 grid place-items-center">회원가입</h1>
            </div>
            <div class="grid place-items-center">
                <div class="border-b-2 w-w2 border-darkGray text-right text-xs pb-2.5">
                    <span class="text-red">*</span>
                    <text class="text-middleGray">필수입력사항</text>
                </div>
                <form>
                    <div class="text-t1">
                        <div class="flex w-w2 h-h5 py-2.5 px-5">
                            <div class="w-w6 h-h4 mt-4 inline-block">
                                <label class="text-darkGray font-bold">아이디</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="w-w3 h-h1 pl-3.5 border border-lightGray rounded text-sm placeholder-middleGray " type="text" placeholder="아이디를 입력해주세요"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합 
                                </div>
                            </div>
                            <div class="inline-block ml-2">    
                                <button class="w-w4 h-h2 border font-bold border-purple text-purple rounded ">중복확인</button>
                            </div>             
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5"> 
                            <div class="w-w6 h-h4 mt-4 inline-block">
                                <label class="text-darkGray font-bold">비밀번호</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="border border-lightGray w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" type="password" placeholder="비밀번호를 입력해주세요"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                                </div> 
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    최소 10자 이상 입력
                                </div>
                            </div>
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5">
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">비밀번호확인</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="border border-lightGray w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" type="password" placeholder="비밀번호를 한번 더 입력해주세요"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    비밀번호를 한번 더 입력해주세요
                                </div>
                            </div>
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5">
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">이름</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="border border-lightGray w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" type="text" placeholder="이름을 입력해주세요"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    이름을 입력해주세요
                                </div>
                            </div>
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5">
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">이메일</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="border border-lightGray w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" type="text" placeholder="예: marketkurly@kurly.com"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    이메일을 입력해주세요
                                </div>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    이메일 형식으로 입력해주세요
                                </div>
                            </div>
                            <div class="inline-block ml-2">  
                                <button class="border font-bold w-w4 h-h2 border-purple text-purple rounded">중복확인</button>
                            </div>
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5"> 
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">휴대폰</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <input class="border border-lightGray w-w3 h-h1 pl-3.5 rounded text-sm placeholder-middleGray" type="number" placeholder="숫자만 입력해주세요"/>
                                <div class="text-red w-w7 h-h3 py-2.5">
                                    휴대폰 번호를 입력해주세요
                                </div>
                            </div>
                        </div>
                        <div class="flex w-w2 h-h5 py-2.5 px-5">
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">주소</label>
                                <span class="text-red">*</span>
                            </div>
                            <div class="inline-block">
                                <button class="border w-w3 h-h1 rounded border-purple text-purple font-bold">
                                    <span>주소 검색</span>
                                </button>
                                <div class="w-w7 h-h3 py-2.5 text-middleGray">
                                    배송지에 따라 상품 정보가 달라질 수 있습니다
                                </div>
                            </div>        
                        </div>
                        <div class="flex py-2.5 px-5">
                            <div class="inline-block w-w6 h-h1">
                                <label class="text-darkGray font-bold">성별</label>
                            </div> 
                            <div>
                                <div class="flex"> 
                                    <div class="flex mr-16">
                                        <input class="w-6 h-6 accent-purple" name="check" type="radio"/>
                                        <span class="ml-3 mt-1">남자</span>
                                    </div>
                                    <div class="flex mr-16">
                                        <input class="w-6 h-6 accent-purple" name="check" type="radio"/>
                                        <span class="ml-3 mt-1">여자</span>
                                    </div>
                                    <div class="flex">
                                        <input class="w-6 h-6 accent-purple" name="check" type="radio"/>
                                        <span class="ml-3 mt-1">선택안함</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-2.5 px-5">
                            <div class="inline-block w-w6 mt-4">
                                <label class="text-darkGray font-bold">생년월일</label>
                            </div>
                            <div class="inline-block border rounded w-w3 h-h1 text-sm">
                                <input class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-3 placeholder-middleGray" type="number" placeholder="YYYY"/>
                                <span class="text-center text-lightGray">/</span>
                                <input class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray" type="number" placeholder="MM"/>
                                <span class="text-center text-lightGray">/</span> 
                                <input class="h-10 w-w5 pr-p1 pl-p2 text-center mt-1 ml-2 placeholder-middleGray" type="number" placeholder="DD"/>
                            </div>
                        </div>
                        <div class="flex py-2.5 px-5 mt-6">
                            <div class="inline-block w-w6 h-h1">
                                <label class="text-darkGray font-bold">추가입력 사항</label>
                            </div>
                            <div>
                                <div class="flex"> 
                                    <div class="flex mr-10">
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
                        <button class="w-60 h-14 rounded bg-purple text-white text-center" type="submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
        
export default CreateAccount;