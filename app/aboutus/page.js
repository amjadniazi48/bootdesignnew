"use client";
import React, { useEffect } from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import { useState, useCallback } from "react";
import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import Link from "next/link";
//======================
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
//==================
export default function Intro() {
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    fetch(`${API_URL}/api/amam-khmyny-trst?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        //============
        let gallerydata = new Array();
        data.data.attributes.media.data.map((clip) => {
          gallerydata.push({
            src: clip.attributes.url,
            width: clip.attributes.width,
            height: clip.attributes.height,
            images: [
              {
                src: clip.attributes.formats.thumbnail.url,
              },
            ],
          });
        });
        setItems(gallerydata);
        //=========
      });
  }, []);
  console.log("items", items);

  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { file, tags },
  }) => (
    <div className="card shadow-sm" style={{ margin: "10px" }}>
      <div class="card-body">
        <img
          alt={alt}
          style={{ ...style, width: "100%", padding: 0 }}
          {...restImageProps}
        />
        <h5 className="card-title text-center mt-2">
          {file && (
            <Link href={file}>
              <span className="badge  bg-danger text-light">Download</span>
            </Link>
          )}
        </h5>
      </div>
    </div>
  );

  //console.log(data)
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
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
                  تعارفs
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
                  <h3 className="card-title">
                    {data.data.attributes?.title}
                  </h3>
                  <div className="block-area p-4">
                    <ReactMarkdown>
                      {data.data.attributes.description}
                    </ReactMarkdown>
                  </div>

                  <PhotoAlbum
                    layout="rows"
                    photos={items}
                    containerWidth={900}
                    spacing={20}
                    padding={20}
                    targetRowHeight={200}
                    renderPhoto={renderPhoto}
                    onClick={({ photo: { File }, index }) => setIndex(index)}
                  />
                  <Lightbox
                    slides={items}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
