import React from "react";
import { API_URL } from "./../config/index";
import "moment/locale/ur";
async function getData() {
  const res = await fetch(
    `${API_URL}/api/posts?populate=deep&filters[type][$eq]=StaticSlider&locale=ur-PK`,
    { cache: "no-store" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function StaticCarousel() {
  const data = await getData();
  return (
    <div className="col-md-6 pt-05 ps-md-05">
      <div className="row newsbox">
        {data.data.map((clip: any) => {
          {
            console.log(clip.attributes.type);
           
          }
          return (
            <article className="col-6" key={clip.id}>
              <div className="card card-full text-white overflow zoom">
                <div className="height-ratio image-wrapper">
                  {clip.attributes.image.data[0].attributes.formats.medium?.url? (
                  <a href="#">
                    <img
                      src={clip.attributes.image.data[0].attributes.formats.medium.url}
                      alt="Image description"
                    />
                  </a>
                  ):(
                    <a href="#">
                    <img
                    src={clip.attributes.image.data[0].attributes.formats.thumbnail.url}
                    alt="Image description"
                  />
                   </a>
                  )
        }

                  <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                    <a className="p-1 badge bg-primary text-white" href="#">
                  
                    </a>
                    <a href="#">
                      <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">
                     { clip.attributes.title}
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default StaticCarousel;
