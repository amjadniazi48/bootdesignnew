import Image from "next/image";

import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
