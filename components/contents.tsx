import React from "react";
import { Result } from "../pages";
import styles from "./contents.module.css";

interface IProps {
  data: Result;
}

export default function Contents({ data }: IProps) {
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
          Size<span>*</span>
        </p>
        <ul>
          {data.sizeOptions.map((size, index) => (
            <li key={index}>{size.label}</li>
          ))}
        </ul>
        <button className={styles.button}>Add To Cart</button>
      </div>
    </section>
  );
}
