import React from "react";
import FormInput from "./FormInput";




const CreateAccount = () => {


    return (
        <div class="m-m2">
            <div>
                <h1 class="text-mySize font-bold text-darkGray mb-12 text-3xl my-14 grid place-items-center">회원가입</h1>
            </div>
            <div class="grid place-items-center">
                <div class="border-b-2 w-w2 border-darkGray text-right text-xs pb-2.5">
                    <span class="text-red">*</span>
                    <span class="text-middleGray">필수입력사항</span>
                </div>
                <FormInput/>
            </div>
        </div>
    );
};
        
export default CreateAccount;