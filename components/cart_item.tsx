import React from "react";
import styles from "./cart_item.module.css";
import { Result } from "../pages";

interface IProps {
  item: {
    data: Result;
    size: string;
    qty: number;
  };
}

export default function CartItem({ item }: IProps) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={item.data.imageURL} />
      <div className={styles.detail}>
        <p>{item.data.title}</p>
        <p>
          {item.qty}x <b>${item.data.price.toFixed(2)}</b>
        </p>
        <p>Size: {item.size}</p>
      </div>
    </div>
  );
}
