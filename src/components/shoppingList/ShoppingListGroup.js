import React, { useState } from "react";
import ShoppingListItem from "./ShoppingListItem";
import { down, up } from "../../assets/icon";

const ShoppingListGroup = ({
  title,
  items,
  isChecked,
  onCheckboxChange,
  deleteItem,
}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);

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
            <img src={items[0].icon} alt={title} />
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
      {isDetailsVisible &&
        items.map((item, index) => (
          <ShoppingListItem
            key={item.id}
            index={index}
            isChecked={isChecked}
            onCheckboxChange={onCheckboxChange}
            item={item}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
};

export default ShoppingListGroup;
