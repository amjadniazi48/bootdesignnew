"use client";
import React, { useState, useEffect } from "react";
import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import ReactPaginate from "react-paginate";

import "moment/locale/ur";
import "react-loading-skeleton/dist/skeleton.css";

const Publications = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slidesData, setSlidesData] = useState("");
  const [index, setIndex] = useState(-1);
  let limit = 10;

  useEffect(() => {
    setLoading(true);
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/publications?populate=deep&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const photos = await res.json();
      console.log("photos",photos);
     // return false;
      const total = photos.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      let mydata = new Array();
      photos.data?.map((clip) => {
        mydata.push({
          file: clip.attributes.Report.file.data?.attributes.url,
          src: clip.attributes.Report.cover.data?.attributes.url,
          width: clip.attributes.Report.cover.data?.attributes.width,
          height: clip.attributes.Report.cover.data?.attributes.height,
          images: [
            {
              src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
                .url,
            },
            {
              src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
                .url,
            },
          ],
        });
      });
    //  console.log("mydatass",mydata)
      setItems(mydata);
      
    };
    getPublications();
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
  //rendering the photo
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { file, tags },
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
          textAlign: "left",
          fontSize: "13px",
          overflowWrap: "break-word",
          fontWeight: "bolder",
          color: "#545E63",
          // inlineSize: "350px"
        }}
      >
      <h5 className="card-title text-center mt-2">
          {file && (
            <Link href={file} target="_blank">
              <span className="badge  bg-danger text-light">Download</span>
            </Link>
          )}
        </h5>
   
      </div>
    </div>
  );
  //===================
//   const fetchSlidesForLightBox = async (id) => {
//     const res = await fetch(
//       `${API_URL}/publications?populate=deep&filters[id][$eq]=${id}&populate=*&sort=createdAt:desc`
//     );
//     const data = await res.json();
//     console.log("slidesdata",data);
//     //return false;
//     let slidesData = new Array();
//     data.data?.map((clip) => {
//         slidesData.push({
//           file: clip.attributes.Report.file.data?.attributes.url,
//           src: clip.attributes.Report.cover.data?.attributes.url,
//           width: clip.attributes.Report.cover.data?.attributes.width,
//           height: clip.attributes.Report.cover.data?.attributes.height,
//           images: [
//             {
//               src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
//                 .url,
//             },
//             {
//               src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
//                 .url,
//             },
//           ],
//         });
//       });
//     setSlidesData(slidesData);
//   };
//========
const fetchPhotos = async (currentPage) => {
    console.log("I m here on click event");
    const res = await fetch(
      `${API_URL}/api/publications?populate[0]=Report&populate[1]=Report.cover&populate[2]=Report.file&sort=updatedAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array();
    data.data?.map((clip) => {
      mydata.push({
        file: clip.attributes.Report.file.data?.attributes.url,
        src: clip.attributes.Report.cover.data?.attributes.url,
        width: clip.attributes.Report.cover.data?.attributes.width,
        height: clip.attributes.Report.cover.data?.attributes.height,
        images: [
          {
            src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
              .url,
          },
          {
            src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
              .url,
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
                  onClick={({ photo: { File }, index }) => setIndex(index)}
                />
                <Lightbox
                  slides={items.map((slide) => ({
                    ...slide,
                    download: `${slide.file}?download`,
                  }))}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  // enable optional lightbox plugins
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Download,Share]}
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
export default Publications;
