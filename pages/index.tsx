import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import Home from "../components/Home";
import Navigation from "../components/Navigation";

export default function Index() {
  return (
    <>
      <Head>
        <title>Rendell Web-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="scroll-smooth">
        <Navigation />
        <div>
          <Home />
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js" async></script>
    </>
  );
}
