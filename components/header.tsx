import React, { useState } from "react";
import { Cart } from "../pages";
import CartList from "./cart_list";
import styles from "./header.module.css";

interface IProps {
  cart: Cart;
}

export default function Header({ cart }: IProps) {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setIsOpenCart(!isOpenCart);
        }}
        className={isOpenCart ? styles.opened : styles.closed}
      >
        My Cart ( {cart.length} )
      </button>
      {isOpenCart && <CartList cart={cart} />}
    </div>
  );
}
