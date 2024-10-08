import React from "react";
import { API_URL } from "@/config/index";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import 'moment/locale/ur'
async function getData() {
  const res = await fetch(
    `${API_URL}/api/posts?filters[type][$eq]=normal&filters[Latest][$eq]=true&populate[image][fields][0]=name&populate[image][fields][1]=url&pagination[pageSize]=10&pagination[page]=1&publicationState=live`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Marquee = async () => {
  const post = await getData();
  // console.log("mydata is", post.data.attributes.title);


  
  return (
    <div className="row py-2">
     <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                 
                  <span className="d-none d-md-inline-block">تازہ ترین </span>&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                  </svg>
                </div>
              </div>
          
              <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                <div className="breaking-box position-relative py-2">
                  <div className="box-carousel" data-flickity='{ "cellAlign": "left", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'>
                  {post.data.map((clip: any) => {
                      return (

                    <div className="col-12 aribudin"   key={clip.attributes.id}>
                        <Link className="h6 font-weight-light" href={`post/${clip.attributes.slug}`}>{clip.attributes.title}</Link>
                    </div>
                      )
                    })}    
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Marquee