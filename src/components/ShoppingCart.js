import React from "react";
import ShoppingList from "./shoppingList/ShoppingList";
import Payment from "./payment/Payment";

const ShoppingCart = () => {
  return (
    <div className="flex justify-center align-start">
      <div className="w-1050 h-1075 min-w-1050 min-h-1075 flex flex-col relative">
        <h2
          style={{ fontSize: "1.75rem" }}
          className="text-center py-12 font-semibold"
        >
          장바구니
        </h2>
        <div className="flex">
          <ShoppingList />
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
