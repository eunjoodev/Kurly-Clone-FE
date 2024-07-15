import React, { useState } from "react";
import ShoppingListGroup from "./ShoppingListGroup";
import ShoppingListCheck from "./ShoppingListCheck";
import { sun, water } from "../../assets/icon";
import { cookie, egg, peach } from "../../assets/item";

const ShoppingList = ({ setCartDetails }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      icon: water,
      title: "냉장 상품",
      img: egg,
      name: "[KF365] 1+등급 무항생제 특란 20구",
      price: 7390,
      discount: 1260,
    },
    {
      id: 2,
      icon: water,
      title: "냉장 상품",
      img: peach,
      name: "백도 복숭아 1.2kg (5~6입)",
      price: 17900,
      discount: 2000,
    },
    {
      id: 3,
      icon: sun,
      title: "상온 상품",
      img: cookie,
      name: "[제니쿠키] 마카다미아 코코아 크리스피 255g",
      price: 36800,
      discount: 3680,
    },
  ]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const deleteItem = (index) => {
    const beforeArray = items.slice(0, index);
    const afterArray = items.slice(index + 1);
    setItems([...beforeArray, ...afterArray]);
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {});

  // reduce함수는 배열을 순회하면서 누적값('acc')를 계산하고 초기값은 '0'으로 설정한다.
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
      {Object.entries(groupedItems).map(([title, groupedItems], index) => (
        <ShoppingListGroup
          key={title}
          title={title}
          items={groupedItems}
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          deleteItem={deleteItem}
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
