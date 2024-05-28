"use client";
import React, { useState, useEffect } from "react";
import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import { API_URL } from "@/config/index";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import ReactPaginate from "react-paginate";

import "moment/locale/ur";
import "react-loading-skeleton/dist/skeleton.css";

const HighLights = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slidesData, setSlidesData] = useState("");
  let limit = 10;

  useEffect(() => {
    setLoading(true);
    const getHighlights = async () => {
      const res = await fetch(
        `${API_URL}/api/posts?populate=deep&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const photos = await res.json();
      const total = photos.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      let mydata = new Array();
      photos.data?.map((clip) => {
        mydata.push({
          title: clip.attributes.title,
          id: clip.id,
          src: clip.attributes.image.data[0].attributes.url,
          width: clip.attributes.image.data[0].attributes.width,
          height: clip.attributes.image.data[0].attributes.height,
          images: [
            { src: clip.attributes.image.data[0].attributes.formats.thumbnail.url },
            {
              src: clip.attributes.image.data[0].attributes.formats.thumbnail
                .url,
            },
          ],
        });
      }); 
    //  console.log("mydatass",mydata)
      setItems(mydata);
      
    };
    getHighlights();
  }, [limit]);

 
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "20px",
        background: "#E5E5CC",
      }}
    >
      <div ref={containerRef} {...containerProps}>
        {children}
      </div>
    </div>
  );
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { src, tags, title },
  }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "4px",
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        padding: `${layoutOptions.padding - 2}px`,
        paddingBottom: 0,
        backgroundColor: "white",
      }}
    >
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0 }}
        {...restImageProps}
      />
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "8px",
          overflow: "visible",
          textAlign: "center",
          fontSize: "13px",
          overflowWrap: "break-word",
          fontWeight: "bolder",
          color: "#545E63",
          // inlineSize: "350px"
        }}
      >
        {title.length > 30 ? title.slice(0, 45) + "..." : title}
      </div>
    </div>
  );
  //===================
  const fetchSlidesForLightBox = async (id) => {
    const res = await fetch(
      `${API_URL}/api/posts?filters[id][$eq]=${id}&populate=*&sort=createdAt:desc`
    );
    const data = await res.json();
    console.log("slidesdata",data);
    //return false;
    let slidesData = new Array();
    data.data?.map((clip) => {
      clip.attributes.image.data?.map((newClip) => {
        slidesData.push({
          src: newClip.attributes.url,
          width: newClip.attributes.width,
          height: newClip.attributes.height,
          images: [
            {
              src: newClip.attributes.formats.small.url,
            },
            {
              src: newClip.attributes.formats.thumbnail.url,
            },
          ],
        });
      });
    });
    setSlidesData(slidesData);
  };
//========
const fetchPhotos = async (currentPage) => {
  const res = await fetch(
    `${API_URL}/api/posts?populate=deep&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
  );
  const data = await res.json();
  let mydata = new Array();
  data.data?.map((clip) => {
    mydata.push({
      title: clip.attributes.title,
      id: clip.id,
      src: clip.attributes.image.data[0].attributes.url,
      width: clip.attributes.image.data[0].attributes.width,
      height: clip.attributes.image.data[0].attributes.height,
      images: [
        {
          src: clip.attributes.image.data[0].attributes.formats.thumbnail.url,
        },
        {
          src: clip.attributes.image.data[0].attributes.formats.thumbnail.url,
        },
      ],
    });
  });
  return mydata;
};

  //this is basically the pagination click
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log("currentpageclicked",currentPage);
    const commentsFormServer = await fetchPhotos(currentPage);
    setItems(commentsFormServer);
  };
  return (
    <div className="wrapper ">
      {/* main content */}
      <main id="content">
        <div className="container">
          <div className="row p-4 mt-20">
            <div className="col-sm-12">
              <div className="block-title-6 text-center">
                <h4 className="h5 border-primary">
                  <span className="bg-primary text-white">فو ٹو گیلر ی</span>
                </h4>
              </div>
              <PhotoAlbum
                layout="rows"
                photos={items}
                containerWidth={900}
                spacing={20}
                padding={20}
                targetRowHeight={200}
                renderContainer={renderContainer}
                renderPhoto={renderPhoto}
                onClick={({ photo: { src, id, title }, index }) => {
                  setOpen(true);
                  fetchSlidesForLightBox(id);
                }}
              />
              <Lightbox
                slides={slidesData}
                close={() => setOpen(false)}
                open={open}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
              />
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center mt-2"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default HighLights;
