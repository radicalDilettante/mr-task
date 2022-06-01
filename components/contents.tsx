import React, { useState } from "react";
import { Result } from "../pages";
import styles from "./contents.module.css";
import SizeItem from "./size_item";

interface IProps {
  data: Result;
  setCart: Function;
}

export default function Contents({ data, setCart }: IProps) {
  const [size, setSize] = useState<"S" | "M" | "L">();

  return (
    <section className={styles.container}>
      <div className={styles.image_wrapper}>
        <img src={data.imageURL} />
      </div>
      <div className={styles.detail}>
        <h1>{data.title}</h1>
        <p className={styles.price}>${data.price.toFixed(2)}</p>
        <p className={styles.desc}>{data.description}</p>
        <p className={styles.size}>
          Size<span className={styles.star}>*</span>{" "}
          <span className={styles.size_status}>{size}</span>
        </p>
        <ul>
          {data.sizeOptions.map((item, index) => (
            <SizeItem
              key={index}
              label={item.label}
              sizeStatus={size}
              setSize={setSize}
            />
          ))}
        </ul>
        <button className={styles.button}>Add To Cart</button>
      </div>
    </section>
  );
}
