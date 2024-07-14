import React, { useState } from "react";
import ShoppingListItemInfo from "./ShoppingListItemInfo";
import ShoppingListCheckBox from "./ShoppingListCheckBox";

const ShoppingListItem = ({ item, isChecked, onCheckboxChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  const { title, price, discount } = item;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate total cost based on quantity
  const totalCost = quantity * (price - discount);

  // Toggle the visibility of the details and change the icon
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div>
      <div
        className="flex justify-between py-4 pr-1 pl-0.5"
        style={{ borderTop: "1px solid black" }}
      >
        <div className="flex justify-start items-center">
          <div className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
          <div className="font-semibold text-[17px]">{title}</div>
        </div>
        <div onClick={toggleDetails} className="cursor-pointer">
          {isDetailsVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </div>

      {isDetailsVisible && (
        <div
          className="py-5 pl-0.5 h-28 flex items-center"
          style={{ borderBottom: "1px solid #f7f7f7" }}
        >
          <label
            htmlFor="checkbox"
            className="cursor-pointer flex items-center"
          >
            <ShoppingListCheckBox
              isChecked={isChecked}
              onCheckboxChange={onCheckboxChange}
            />
          </label>

          <ShoppingListItemInfo item={item} />

          <div className="flex" style={{ border: "1px solid #e2e3e4" }}>
            <button
              className="w-7 h-7 flex justify-center items-center"
              onClick={decrementQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="w-7 h-7 text-sm flex justify-center items-center">
              {quantity}
            </div>

            <button
              className="w-7 h-7 flex justify-center items-center"
              onClick={incrementQuantity}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          </div>
          <div className="w-[7.9375rem] text-right text-base font-bold">
            {totalCost.toLocaleString()}
          </div>
          <button className="w-[1.875rem] h-[1.875rem] ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingListItem;
