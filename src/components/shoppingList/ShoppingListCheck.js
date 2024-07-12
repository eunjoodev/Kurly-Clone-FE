import React from "react";
import ShoppingListCheckBox from "./ShoppingListCheckBox";

const ShoppingListCheck = ({ isChecked, onCheckboxChange }) => {
  return (
    <div className="flex justify-start items-center py-4 pl-0.5 pr-2.5">
      <label htmlFor="checkbox" className="cursor-pointer flex items-center">
        <ShoppingListCheckBox
          isChecked={isChecked}
          onCheckboxChange={onCheckboxChange}
        />
        <span className="text-sm">전체선택</span>
      </label>
      <span className="px-5" style={{ color: "#e5e5e5" }}>
        |
      </span>
      <button className="text-sm">선택삭제</button>
    </div>
  );
};

export default ShoppingListCheck;
