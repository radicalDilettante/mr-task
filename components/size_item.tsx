import React from "react";
import styles from "./size_item.module.css";

interface IProps {
  label: string;
  sizeStatus?: string;
  setSize: Function;
}

export default function SizeItem({ label, sizeStatus, setSize }: IProps) {
  const isSelected = label === sizeStatus;

  return (
    <li
      className={`${styles.container} ${
        isSelected ? styles.selected : styles.unselected
      }`}
      onClick={() => {
        isSelected ? setSize() : setSize(label);
      }}
    >
      {label}
    </li>
  );
}
