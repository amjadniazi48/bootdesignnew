import React from "react";

import moment from "moment";
import { API_URL } from "./../config/index";
import Image from "next/image";
import "moment/locale/ur";
import Link from "next/link";
async function getData() {
  const res = await fetch(
    `${API_URL}/api/publications?populate=deep&filters[PublicationSlider][$eq]=true`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Publications = async () => {
  const publications = await getData();
  return (
    <div className="col-12 mb-4">
      <div
        className="block-area p-4"
        style={{ backgroundColor: "#F7F7F5", border: "1px solid #C2CBCD" }}
      >
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span> مطبو عا ت</span>
          </h4>
          <div className="dot-line"></div>
        </div>
        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          {publications &&
            publications.data.map((publication, index) => {
              return (
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                      <Link href="#">
                  <Image
                      width={300}
                      height={350}
                      src={publication && publication.attributes.Report.cover.data.attributes.url}
                      data-src="../../assets/img/400x340/img1.jpg"
                      alt="Image description"
                    /></Link>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">
                            {publication && publication.attributes.title}
                            </a>
                          </h4>

                          <div className="small text-light">
                          <time dateTime="2019-10-18">   {moment(publication.attributes.createdBy)
                              .locale('ur')
                              .format("LL")}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
