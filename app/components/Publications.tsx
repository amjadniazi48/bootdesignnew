import React from "react";

const Publications = () => {
  return (
    <div className="col-12 mb-4">
      <div className="block-area p-4 " style={{backgroundColor:"#F7F7F5",border:"1px solid #C2CBCD"}}>
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>Interior Design</span>
          </h4>
          <div className="dot-line"></div>
        </div>

        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                    
                      src="./assets/img/400x340/img1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        An elegant Modern office design in California and Nevada
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                    
                   
                      src="./assets/img/400x340/img2.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Here’s All The Property News You Missed This Week
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                     
                    
                      src="./assets/img/400x340/img3.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        Why We Love the Look of White Calacatta Marble?
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                    
                      src="./assets/img/400x340/img4.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        The event showcases products like homewares and
                        furniture
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                   
                      src="./assets/img/400x340/img5.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        The Best Street Style Looks from New York Property show
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">Oct 18, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Publications;
