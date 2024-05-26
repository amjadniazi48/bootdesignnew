import React from "react";
import { API_URL } from "@/config/index";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import 'moment/locale/ur'
async function getData() {
  const res = await fetch(
    `${API_URL}/api/posts?populate=*&filters[type][$eq]=NormalPost`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Highlights = async () => {
  const post = await getData();
  // console.log("mydata is", post.data.attributes.title);

  return (
    <div className="col-md-8">
      <div
        className="block-area p-4"
        style={{ backgroundColor: "#F7F7F5", border: "1px solid #C2CBCD" }}
      >
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">
              {post.data.attributes?.categories.data.attributes.title}
            </span>
          </h4>
        </div>

        <div className="border-bottom-last-0 first-pt-0">
          {post.data.map((clip: any) => {
            return (
              <article className="card card-full hover-a py-4" style={{borderBottom:"1px solid #C2CBCD" }}
              key={clip.attributes.id}
              >
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="ratio_360-202 image-wrapper">
                      {clip.attributes.image.data[0].attributes.formats.small
                        ?.url ? (
                        <a href="#">
                          <img
                            src={
                              clip.attributes.image.data[0].attributes.formats
                                .small.url
                            }
                            alt="Image description"
                          />
                        </a>
                      ) : (
                        <a href="#">
                          <img
                            src={
                              clip.attributes.image.data.attributes.formats
                                .thumbnail.url
                            }
                            alt="Image description"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                      <h3 className="card-title h2 h3-sm h2-md">
                      <Link href={`/post/${clip.attributes.slug}`}>
                          {clip.attributes.title.length > 30
                            ? clip.attributes.title.slice(0, 30) + "..."
                            : clip.attributes.title}
                        </Link>
                      </h3>
                      <div className="card-text mb-2 text-muted small">
                        
                        <time dateTime="2019-10-21"> {moment(clip.attributes.createdBy)
                              .locale('ur-PK')
                              .format("LL")}
                          </time>
                      </div>

                 
                        <ReactMarkdown>
                          {clip.attributes.description
                            .toString().substring(0, 300)
                            .concat("...")}
                        </ReactMarkdown>
                     
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
export default Highlights;
