import React from "react";
import { checked, unchecked } from "../../assets/icon";

const ShoppingListCheck = ({ allChecked, onCheckboxChange }) => {
  return (
    <div className="flex justify-start items-center py-4 pl-0.5 pr-2.5">
      <label htmlFor="checkbox" className="cursor-pointer flex items-center">
        <div className="flex justify-center items-center pr-3">
          <input
            type="checkbox"
            id="checkbox"
            className="appearance-none"
            checked={allChecked}
            onChange={onCheckboxChange}
          />
          {allChecked ? (
            <img src={checked} alt="checked" className="h-6 w-6" />
          ) : (
            <img src={unchecked} alt="unchecked" className="h-6 w-6" />
          )}
        </div>
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
