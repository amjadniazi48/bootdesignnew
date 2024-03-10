import React from 'react'

const MainCarousel = () => {
  return (
    <div className="row featured-1 mb-5">
    <div className="col-md-6 pb-05 pt-05 pe-md-05">
      <div className="position-relative overflow-hidden">
        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity={'{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'}
        >
          <article className="col-12">
            <div className="card card-full text-light overflow zoom">
              <div className="height-ratio image-wrapper">
                <a href="#">
                  <img
                  
                    src="./assets/img/568x484/img1.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                  <a href="#">
                    <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                      Superstar calls for football clean up amid
                      series of shocking allegations
                    </h2>
                  </a>
    
                  <div className="news-meta">
                    <span className="news-author">
                      by{" "}
                      <a className="text-white fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time className="news-date" dateTime="2019-10-22">
                      Oct 22, 2019
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </article>
    
          <article className="col-12">
            <div className="card card-full text-light overflow zoom">
              <div className="height-ratio image-wrapper">
                <a href="#">
                  <img
                 
                    src="./assets/img/568x484/img2.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                  <a href="#">
                    <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                      Walmart shares up 10% on online sales lift
                    </h2>
                  </a>
    
                  <div className="news-meta">
                    <span className="news-author">
                      by{" "}
                      <a className="text-white fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time className="news-date" dateTime="2019-10-22">
                      Oct 22, 2019
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </article>
    
          <article className="col-12">
            <div className="card card-full text-light overflow zoom">
              <div className="height-ratio image-wrapper">
                <a href="#">
                  <img
                  
                    src="./assets/img/568x484/img1.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                  <a href="#">
                    <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                      Bank chief warns on Brexit staff moves
                    </h2>
                  </a>
    
                  <div className="news-meta">
                    <span className="news-author">
                      by{" "}
                      <a className="text-white fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time className="news-date" dateTime="2019-10-22">
                      Oct 22, 2019
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </article>
    
          <article className="col-12">
            <div className="card card-full text-light overflow zoom">
              <div className="height-ratio image-wrapper">
                <a href="#">
                  <img
                
                    src="./assets/img/568x484/img2.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                  <a href="#">
                    <h2 className="h1-sm h2-md display-4-lg fw-bold text-capitalize heading-letter-spacing text-white">
                      The world's first floating farm making waves in
                      Rotterdam
                    </h2>
                  </a>
    
                  <div className="news-meta">
                    <span className="news-author">
                      by{" "}
                      <a className="text-white fw-bold" href="#">
                        John Doe
                      </a>
                    </span>
                    <time className="news-date" dateTime="2019-10-22">
                      Oct 22, 2019
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    
    <div className="col-md-6 pt-05 ps-md-05">
      <div className="row newsbox">
        <article className="col-6">
          <div className="card card-full text-white overflow zoom">
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img
               
                 
                  src="./assets/img/282x240/img1.jpg"
                  alt="Image description"
                />
              </a>
    
              <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                <a
                  className="p-1 badge bg-primary text-white"
                  href="#"
                >
                  Business
                </a>
                <a href="#">
                  <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">
                    Should you see the Fantastic Beasts sequel?
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </article>
    
        <article className="col-6">
          <div className="card card-full text-white overflow zoom">
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/282x240/img2.jpg"
                  alt="Image description"
                />
              </a>
    
              <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                <a
                  className="p-1 badge bg-primary text-white"
                  href="#"
                >
                  Science
                </a>
                <a href="#">
                  <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">
                    Three myths about Florida elections recount
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </article>
    
        <article className="col-6">
          <div className="card card-full text-white overflow zoom">
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/282x240/img3.jpg"
                  alt="Image description"
                />
              </a>
    
              <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                <a
                  className="p-1 badge bg-primary text-white"
                  href="#"
                >
                  Travel
                </a>
                <a href="#">
                  <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">
                    Finding Empowerment in Two Wheels and a Helmet
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </article>
    
        <article className="col-6">
          <div className="card card-full text-white overflow zoom">
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/282x240/img4.jpg"
                  alt="Image description"
                />
              </a>
    
              <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                <a
                  className="p-1 badge bg-primary text-white"
                  href="#"
                >
                  Lifestyle
                </a>
                <a href="#">
                  <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">
                    Ditch receipts and four other tips to be a green
                    shopper
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    </div>
  )
}

export default MainCarousel
