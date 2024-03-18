import React from 'react'

function CarouselHighlights() {
  return (
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
  )
}

export default CarouselHighlights