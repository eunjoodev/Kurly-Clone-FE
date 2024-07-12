import React, { useState } from "react";
import ShoppingListItem from "./ShoppingListItem";
import ShoppingListCheck from "./ShoppingListCheck";

const ShoppingList = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col w-742 min-w-742 h-942 min-h-942">
      <ShoppingListCheck
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      <ShoppingListItem
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      <ShoppingListCheck
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default ShoppingList;
