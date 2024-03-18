import React from 'react'

const Marquee = () => {
  return (
    <div className="row py-2">
     <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                  </svg>
                  <span className="d-none d-md-inline-block">أخبار عاجلة</span>
                </div>
              </div>
          
              <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                <div className="breaking-box position-relative py-2">
                  <div className="box-carousel" data-flickity='{ "cellAlign": "left", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'>
                  
                    <div className="col-12 aribudin">
                        <a className="h6 font-weight-light" href="#">موظفو Google يحتجون على العمل السري على محرك البحث الخاضع للرقابة في الصين</a>
                    </div>
                  
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">حقق المستثمرون الذين يراهنون ضد تسلا مليار دولار يوم الجمعة</a>
                    </div>
                  
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">وقع كارميلو أنتوني رسميًا مع فريق هيوستن روكتس</a>
                    </div>
                   
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">الليمون يجعل بشرتك نضرة ومتوهجة</a>
                    </div>
                   
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">5 نصائح من مقابلة Elon Musk مع التايمز حول Tesla</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Marquee