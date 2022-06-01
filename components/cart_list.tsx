import React from "react";
import styles from "./cart_list.module.css";
import { Cart } from "../pages";
import CartItem from "./cart_item";

interface IProps {
  cart: Cart;
}

export default function CartList({ cart }: IProps) {
  return (
    <div className={styles.container}>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}
