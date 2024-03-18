import React from 'react'

function MostreadSidebar() {
  return (
    <aside className="widget">
    <div className="block-title-4">
      <h4 className="h5 title-arrow">
        <span>Most read</span>
      </h4>
    </div>

    <div className="small-post">
      <article className="card card-full hover-a mb-4">
        <div className="row">
          <div className="col-3 col-md-4 pe-2 pe-md-0">
            <div className="ratio_110-77 image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/110x77/img1.jpg"
                  alt="Image description"
                />
              </a>
            </div>
          </div>

          <div className="col-9 col-md-8">
            <div className="card-body pt-0">
              <h3 className="card-title h6 h5-sm h6-md">
                <a href="#">
                  Apple stock rout starts and ends with the iPhone
                </a>
              </h3>
              <div className="card-text small text-muted">
                <time dateTime="2019-10-16">Oct 16, 2019</time>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="card card-full hover-a mb-4">
        <div className="row">
          <div className="col-3 col-md-4 pe-2 pe-md-0">
            <div className="ratio_110-77 image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/110x77/img2.jpg"
                  alt="Image description"
                />
              </a>
            </div>
          </div>

          <div className="col-9 col-md-8">
            <div className="card-body pt-0">
              <h3 className="card-title h6 h5-sm h6-md">
                <a href="#">
                  94 Easy Chicken Recipes for Fuss-Free Family Dinners
                </a>
              </h3>
              <div className="card-text small text-muted">
                <time dateTime="2019-10-15">Oct 15, 2019</time>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="card card-full hover-a mb-4">
        <div className="row">
          <div className="col-3 col-md-4 pe-2 pe-md-0">
            <div className="ratio_110-77 image-wrapper">
              <a href="#">
                <img
                  className="img-fluid lazy"
                  src="./assets/img/assets/lazy-empty.png"
                  data-src="./assets/img/110x77/img3.jpg"
                  alt="Image description"
                />
              </a>
            </div>
          </div>

          <div className="col-9 col-md-8">
            <div className="card-body pt-0">
              <h3 className="card-title h6 h4-sm h6-md">
                <a href="#">
                  Ford reveals autonomous vehicle philosophies, priorities
                </a>
              </h3>
              <div className="card-text small text-muted">
                <time dateTime="2019-10-14">Oct 14, 2019</time>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div className="gap-0"></div>
  </aside>
  )
}

export default MostreadSidebar