import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Max-dev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>I am Index page</p>
    </>
  );
};

export default HomePage;
