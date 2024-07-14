import React, { useState } from "react";
import ShoppingListItemInfo from "./ShoppingListItemInfo";
import ShoppingListCheckBox from "./ShoppingListCheckBox";
import { down, minusBlack, plus, up, deleted } from "../../assets/icon";

const ShoppingListItem = ({ item, isChecked, onCheckboxChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  const { title, price, discount, icon } = item;

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
            <img src={icon} alt={title} />
          </div>
          <div className="font-semibold text-[17px]">{title}</div>
        </div>
        <div onClick={toggleDetails} className="cursor-pointer">
          {isDetailsVisible ? (
            <img src={up} alt="리스트 닫기" className="w-6 h-6" />
          ) : (
            <img src={down} alt="리스트 열기" className="w-6 h-6" />
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
              <img src={minusBlack} alt="minusBlack" />
            </button>

            <div className="w-7 h-7 text-sm flex justify-center items-center">
              {quantity}
            </div>

            <button
              className="w-7 h-7 flex justify-center items-center"
              onClick={incrementQuantity}
            >
              <img src={plus} alt="plus" />
            </button>
          </div>
          <div className="w-[7.9375rem] text-right text-base font-bold">
            {totalCost.toLocaleString()}
          </div>
          <button className="w-[1.875rem] h-[1.875rem] ml-2">
            <img src={deleted} alt="삭제" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingListItem;
