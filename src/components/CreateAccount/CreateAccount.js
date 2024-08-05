import React from "react";
import FormInput from "./FormInput";

const CreateAccount = () => {
  return (
    <div class="mt-12">
      <div class="text-[28px] font-medium text-darkGray mb-12 leading-9 grid place-items-center tracking-[-1px]">
        회원가입
      </div>
      <div class="grid w-[640px] mx-auto box-border">
        <div class="text-right text-xs text-middleGray pb-2.5 border-b-2 border-darkGray">
          <span class="text-red mr-1">*</span>필수입력사항
        </div>
        <FormInput />
      </div>
    </div>
  );
};

export default CreateAccount;
