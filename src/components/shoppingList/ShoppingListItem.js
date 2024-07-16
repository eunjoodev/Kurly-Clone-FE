import React from "react";
import ShoppingListItemInfo from "./ShoppingListItemInfo";
import { minusBlack, plus, deleted } from "../../assets/icon";
import ShoppingListItemCheck from "./ShoppingListItemCheck";

const ShoppingListItem = ({
  item,
  onCheckboxChange,
  deleteItem,
  updateQuantity,
}) => {
  const { id, price, discount, quantity, isChecked } = item;

  const incrementQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  };

  const totalCost = quantity * (price - discount);

  return (
    <div
      className="py-5 pl-0.5 h-28 flex items-center"
      style={{ borderBottom: "1px solid #f7f7f7" }}
    >
      <label
        htmlFor={`checkbox-${id}`}
        className="cursor-pointer flex items-center"
      >
        <ShoppingListItemCheck
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
      <button
        className="w-[1.875rem] h-[1.875rem] ml-2"
        onClick={() => deleteItem(id)}
      >
        <img src={deleted} alt="삭제" />
      </button>
    </div>
  );
};

export default ShoppingListItem;
