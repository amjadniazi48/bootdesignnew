import React from 'react'
import { API_URL } from "./../config/index";
async function getData() {
  const res = await fetch('http://localhost:1337/api/post-slider?populate=deep')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function RevolvingCarousel() {
  const data = await getData()
   console.log(data.data.attributes.createdAt)
  return (
    <div className="col-md-6 pb-05 pt-05 pe-md-05">
    <div className="position-relative overflow-hidden">
      <div className="nav-slider-hover nav-dots-top-right light-dots" data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'>
      {data.data.attributes?.posts?.data.map((clip:any)=>{      
     return(
        <article className="col-12" key={data.data.attributes?.posts?.id}>
          <div className="card card-full text-light overflow zoom">
         
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img  src={`${API_URL}${clip.attributes.image.data.attributes.url}`} alt="وصف الصورة"/>
              </a>
              <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
               
                <a href="#">
                  <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">{clip.attributes.title}</h2>
                </a>
               
                <div className="news-meta">
                  <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">
                    {clip.attributes.createdBy}
                    </a></span>
                  <time className="news-date" dateTime="2019-10-22">   {`${new Date(clip.attributes.publishedAt).toLocaleString()}`}</time>
                </div>
              </div>
            </div>
          </div>
        </article>
     )
        })}     
      </div>
    </div>
  </div>
  
  )
}

export default RevolvingCarousel