import React from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import Link from "next/link";
async function getData() {
  const res = await fetch(`${API_URL}/api/amam-khmyny-trst?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const PostDetails = async () => {
  const post = await getData();
  console.log("mydata is", post.data.attributes.title);

  return (
    <div className="wrapper ">
      {/* main content */}
      <main id="content">
        <div className="container">
          <div className="d-flex flex-row mt-3 p-3  mb-3">
            <div className=" h-auto col-md-12">
              <div className="block-title-6 text-center">
                <h4 className="h5 border-primary ">
                  <span className="bg-primary text-white">
                    {
                      post.data.attributes
                        .title
                    }
                  </span>
                </h4>
              </div>
              <div className="">
                <div
                  className="card   p-3"
                  style={{
                    backgroundColor: "#F7F7F5",
                    border: "1px solid #C2CBCD",
                  }}
                >
                  <h3 className="card-title">{post.data.attributes?.title}</h3>
                  <div className="block-area p-4">
                    <ReactMarkdown>
                      {post.data.attributes.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom-last-0 first-pt-0">
          {post &&
            post.data.attributes.media.data.map((highlight: any) => {
              return (
                <article
                  className="card card-full hover-a py-5"
                  key={highlight.attributes.id}
                >
                  <div className="row">
                    <div className="col-sm-3">
                      <div>
                        {highlight && (
                          <Image
                            width={
                              highlight.attributes.formats
                                .thumbnail.width
                            }
                            height={
                                highlight.attributes.formats
                                .thumbnail.height
                            }
                            src={
                                highlight.attributes.formats
                                .thumbnail.url
                            }
                            alt="Image description"
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-sm-9 mt-3">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                        <Link href={`post/${highlight.attributes.slug}`}>
                          <h3 className="card-title h2 h3-sm h2-md">
                            {highlight.attributes.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </main>
    </div>
  );
};
export default PostDetails;
