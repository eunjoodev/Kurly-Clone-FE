import React from "react";

const ShoppingListCheckBox = ({ isChecked, onCheckboxChange }) => {
  return (
    <div className="flex justify-center items-center pr-3">
      <input
        type="checkbox"
        id="checkbox"
        className="appearance-none"
        checked={isChecked}
        onChange={onCheckboxChange}
      />
      {isChecked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#5f0080"
          />
          <path
            d="M7 12.6667L10.3846 16L18 8.5"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
            stroke="#ddd"
            fill="#fff"
          />
          <path
            d="M7 12.6667L10.3846 16L18 8.5"
            stroke="#ddd"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default ShoppingListCheckBox;
