import React from "react";
import Image from "next/image";
import { API_URL } from "@/config/index";
async function getData() {
  const res = await fetch(
    `${API_URL}/api/banner?populate[bannerimage][fields][0]=url&populate[bannerimage][fields][1]=alternativeText`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Header =  async () => {
  const bannerData= await getData();
  //console.log(bannerData)
  return (
    <header className="header" >
        <div className="container">
          <div className="row">
            <div className="col-12">          
                <a className="navbar-brand" href="/">
                <Image
                      width={1200}
                      height={213}
                    className="img-fluid"
                    src={bannerData.data.attributes.bannerimage.data.attributes.url}
                    alt="Logo site"
                  />
                </a>  
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;