import Head from "next/head";
import styles from "@/pages/index.module.css";
import Header from "@/components/header";
import Contents from "@/components/contents";
import useSWR from "swr";
import { useState } from "react";

export type Result = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: { id: number; label: string }[];
};

export default function Home() {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR<Result>("/api/data", fetcher);

  const [cart, setCart] = useState<{
    data: Result;
    size: string;
    qty: number;
  }>();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contents data={data} setCart={setCart} />
    </div>
  );
}
