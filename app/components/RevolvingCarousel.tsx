import React from "react";
import moment from "moment";
import { API_URL } from "./../config/index";
import 'moment/locale/ur'
async function getData() {
  const res = await fetch(`${API_URL}/api/posts?populate=deep&filters[type][$eq]=revolving`,
  { cache: 'no-store' }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function RevolvingCarousel() {
  const data = await getData();
  // console.log(data.data.attributes.createdAt)
  return (
    <div className="col-md-6 pb-05 pt-05 pe-md-05">
      <div className="position-relative overflow-hidden">
        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          {data.data.map((clip: any) => {
            // {console.log(clip.attributes.slider)}
            return (
            
              <article className="col-12" key={clip.id}>
                  {clip.attributes.image? (
                <div className="card card-full text-light overflow zoom">
                  <div className="height-ratio image-wrapper">
                  
                      <a href="#">
                        <img
                          src={clip.attributes.image.data[0].attributes.formats
                            .medium.url}
                          alt="وصف الصورة"
                        />
                      </a>
                   
                    <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                      <a href={`/post/${clip.attributes.slug}`}>
                        <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">
                          {clip.attributes.title}
                        </h2>
                      </a>
                      <div className="news-meta">
                        <span className="news-author">
                          <a className="text-white font-weight-bold" href="#">
                            {moment(clip.attributes.createdBy)
                              .locale('ur')
                              .format("LL")}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                  ) : (
                    <p aria-hidden="true">
                    <span className="placeholder col-12" style={{height:"500px"}}></span>
                  </p>
                  )}
              </article>
            
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RevolvingCarousel;
