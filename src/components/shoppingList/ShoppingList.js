import React, { useState } from "react";
import ShoppingListItem from "./ShoppingListItem";
import ShoppingListCheck from "./ShoppingListCheck";

const ShoppingList = ({ setCartDetails }) => {
  const [isChecked, setIsChecked] = useState(false);

  const items = [
    {
      id: 1,
      title: "냉동 상품",
      name: "[Kim's Butcher] 돌돌말이 대패 삼겹살 1kg(냉동)",
      price: 16990,
      discount: 5100,
    },
    {
      id: 2,
      title: "상온 상품",
      name: "[동원참치] 살코기 참치 85g X 6개",
      price: 9980,
      discount: 500,
    },
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const totalDiscount = items.reduce((acc, item) => acc + item.discount, 0);

  React.useEffect(() => {
    setCartDetails({ totalPrice, totalDiscount });
  }, [totalPrice, totalDiscount, setCartDetails]);

  return (
    <div className="flex flex-col w-742 min-w-742 h-942 min-h-942">
      <ShoppingListCheck
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          item={item}
        />
      ))}
      <ShoppingListCheck
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default ShoppingList;
