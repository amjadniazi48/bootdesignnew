import React from 'react'

function RevolvingCarousel() {
  return (
    <div className="col-md-6 pb-05 pt-05 pe-md-05">
    <div className="position-relative overflow-hidden">
      <div className="nav-slider-hover nav-dots-top-right light-dots" data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'>
      
        <article className="col-12">
          <div className="card card-full text-light overflow zoom">
         
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/568x484/img1.jpg" alt="وصف الصورة"/>
              </a>
              <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
               
                <a href="#">
                  <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">رئيس البنك يحذر من تحركات موظفي بريكست</h2>
                </a>
               
                <div className="news-meta">
                  <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                  <time className="news-date" dateTime="2019-10-22">22 أكتوبر 2019</time>
                </div>
              </div>
            </div>
          </div>
        </article>
       
        <article className="col-12">
          <div className="card card-full text-light overflow zoom">
         
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/568x484/img2.jpg" alt="وصف الصورة"/>
              </a>
              <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
              
                <a href="#">
                  <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">أول مزرعة عائمة في العالم تحدث الأمواج في روتردام</h2>
                </a>
              
                <div className="news-meta">
                  <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                  <time className="news-date" dateTime="2019-10-22">22 أكتوبر 2019</time>
                </div>
              </div>
            </div>
          </div>
        </article>
      
        <article className="col-12">
          <div className="card card-full text-light overflow zoom">
          
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/568x484/img3.jpg" alt="وصف الصورة"/>
              </a>
              <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
              
                <a href="#">
                  <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">سهم Walmart يزيد بنسبة 10 ٪ في زيادة المبيعات عبر الإنترنت</h2>
                </a>
             
                <div className="news-meta">
                  <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                  <time className="news-date" dateTime="2019-10-22">22 أكتوبر 2019</time>
                </div>
              </div>
            </div>
          </div>
        </article>
       
        <article className="col-12">
          <div className="card card-full text-light overflow zoom">
          
            <div className="height-ratio image-wrapper">
              <a href="#">
                <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/568x484/img4.jpg" alt="وصف الصورة"/>
              </a>
              <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
            
                <a href="#">
                  <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">أول مزرعة عائمة في العالم تحدث الأمواج في روتردام</h2>
                </a>
             
                <div className="news-meta">
                  <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                  <time className="news-date" dateTime="2019-10-22">22 أكتوبر 2019</time>
                </div>
              </div>
            </div>
          </div>
        </article>
       
      </div>
    </div>
  </div>
  
  )
}

export default RevolvingCarousel