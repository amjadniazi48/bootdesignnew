import React from "react";
import Image from "next/image";
import { API_URL } from "@/config/index";
import HeadertopMenu from "./HeadertopMenu";

async function getData() {
  const res = await fetch(
    `${API_URL}/api/banner?populate[bannerimage][fields][0]=url&populate[bannerimage][fields][1]=alternativeText`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Header = async () => {
  const bannerData = await getData();
  const bannerImage = bannerData.data?.attributes?.bannerimage?.data?.attributes;

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a className="navbar-brand" href="/">
              {bannerImage && (
                <Image
                  width={1200}
                  height={213}
                  className="img-fluid"
                  src={bannerImage.url}
                  alt={bannerImage.alternativeText || "Site Logo"}
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
