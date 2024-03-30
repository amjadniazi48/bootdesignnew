import React from "react";

const Publications = () => {
  return (
    <div className="col-12 mb-4">
      <div
        className="block-area p-4"
        style={{ backgroundColor: "#F7F7F5", border: "1px solid #C2CBCD" }}
      >
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>تصميم داخلي</span>
          </h4>
          <div className="dot-line"></div>
        </div>
        <div
          className="nav-slider-hover nav-dots-top-right light-dots"
          data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'
        >
          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="./assets/img/assets/lazy-empty.png"
                      data-src="./assets/img/400x340/img1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        تصميم مكتب حديث أنيق في كاليفورنيا ونيفادا
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">18 أكتوبر 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="./assets/img/assets/lazy-empty.png"
                      data-src="./assets/img/400x340/img2.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        إليك جميع أخبار العقارات التي فاتتك هذا الأسبوع
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">18 أكتوبر 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="./assets/img/assets/lazy-empty.png"
                      data-src="./assets/img/400x340/img3.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        لماذا نحب مظهر رخام كلكتا الأبيض؟
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">18 أكتوبر 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="./assets/img/assets/lazy-empty.png"
                      data-src="./assets/img/400x340/img4.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        يعرض الحدث منتجات مثل الأدوات المنزلية والأثاث
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">18 أكتوبر 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="col-12 col-sm-6 col-lg-4 me-2">
            <div className="mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                  <a href="#">
                    <img
                      className="img-fluid lazy"
                      src="./assets/img/assets/lazy-empty.png"
                      data-src="./assets/img/400x340/img5.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                    <h4 className="h3 h4-sm h3-md card-title">
                      <a className="text-white" href="#">
                        أفضل إطلالات على طراز ستريت ستايل من معرض نيويورك
                        للعقارات
                      </a>
                    </h4>

                    <div className="small text-light">
                      <time dateTime="2019-10-18">18 أكتوبر 2019</time>
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
