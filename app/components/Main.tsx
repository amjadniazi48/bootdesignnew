import React from "react";
import MainCarousel from "./MainCarousel";
import Marquee from "./Marquee";
import Publications from "./Publications";
import Highlights from "./Highlights";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <main id="content">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-05">
            <Marquee />
            <MainCarousel />
          </div>
          <Publications />
          <Highlights />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Main;
