import React from "react";

const Footer = () => {
  return (
  
    <footer>  
      <div id="footer" className="footer-dark bg-dark bg-footer py-5 px-3">
        <div className="container">
          <div className="row">
            <div className="widget col-md-4">
              <h3 className="h5 widget-title border-bottom border-smooth">معلومات عنا</h3>
              <div className="widget-content">
                <img className="footer-logo img-fluid mb-2" src="./assets/img/logo/logo-mobile.png" alt="شعار التذييل" />
                <p>قوالب تمهيد المجلات الإخبارية.تم تصميم هذا العرض التوضيحي خصيصًا لعرض استخدام السمة كموقع للمجلة. م بزيارة صفحتنا الرئيسية لمزيد من العروض التوضيحية.</p>
                <address>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>Amphitheatre, Mountain View,
                  San Francisco, CA 9321, United States
                </address>
                <p className="footer-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>+(123) 456-7890</p>
                <p className="footer-info mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-envelope-fill me-2" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                  </svg>support@example.com</p>
                <div className="social mb-4">
               
                  <span className="my-2 me-3">
                    <a target="_blank" href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                  </span>
                
                  <span className="my-2 me-3">
                    <a target="_blank" href="https://twitter.com" aria-label="Twitter" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </span>
                
                  <span className="my-2 me-3">
                    <a target="_blank" href="https://youtube.com" aria-label="Youtube" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                      </svg>
                    </a>
                  </span>
               
                  <span className="my-2 me-3">
                    <a target="_blank" href="https://instagram.com" aria-label="Instagram" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
                    </a>
                  </span>
                
                </div>
              </div>
            </div>
          
            <div className="widget col-sm-6 col-md-4">
              <h3 className="h5 widget-title border-bottom border-smooth">منشورات شائعة</h3>
              <div className="posts-list">
             
                <article className="card card-full hover-a mb-4">
                  <div className="row">
                  
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/115x80/img6.jpg" alt="وصف الصورة"/>
                        </a>
                      </div>
                    </div>
                 
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">لماذا دخلت Apple في حرب مع Facebook و Google هذا الأسبوع</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-16">16 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
             
                <article className="card card-full hover-a mb-4">
                  <div className="row">
                  
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img5.jpg" alt="وصف الصورة"/>
                        </a>
                      </div>
                    </div>
                 
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">كان الغرب يأمل في الديمقراطية في تركيا. كانت لدى أردوغان أفكار أخرى</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-15">15 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
            
                <article className="card card-full hover-a mb-4">
                  <div className="row">
                 
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img4.jpg" alt="وصف الصورة"/>
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">يتذكر التسبب في نقص أدوية ضغط الدم: ما يمكنك القيام به</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-14">14 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
             
              </div>
            </div>
          
            <div className="widget col-sm-6 col-md-4">
              <h3 className="h5 widget-title border-bottom border-smooth">اختيارات المحرر</h3>
              <div className="posts-list">
           
                <article className="card card-full hover-a mb-4">
                  <div className="row">
               
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img3.jpg" alt="وصف الصورة"/>
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">كان الغرب يأمل في الديمقراطية في تركيا. كانت لدى أردوغان أفكار أخرى</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-16">16 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              
                <article className="card card-full hover-a mb-4">
                  <div className="row">
                 
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="./assets/img/115x80/img2.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">Dale Earnhardt Jr. يعود إلى مضمار السباق وهواية قديمة</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-15">15 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
             
                <article className="card card-full hover-a mb-4">
                  <div className="row">
                  
                    <div className="col-3 col-md-4 pe-2 pe-md-0">
                      <div className="ratio_115-80 image-wrapper">
                        <a href="single.html">
                          <img className="img-fluid lazy" src="./assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img1.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                   
                    <div className="col-9 col-md-8">
                      <div className="card-body pt-0">
                        <h3 className="card-title h6">
                          <a href="single.html">حفلة يانكيز مثلها 1998 ، على الأقل ليوم واحد</a>
                        </h3>
                        <div className="card-text small text-muted">
                          <time dateTime="2019-10-14">14 أكتوبر 2019</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-secondary">
        <div className="container">
          <nav className="navbar navbar-expand navbar-dark px-0">    
            <ul className="navbar-nav footer-nav text-center first-start-lg-0">
              <li className="nav-item"><a className="nav-link" href="about-us.html">حول</a></li>
              <li className="nav-item"><a className="nav-link" href="contact-us.html">اتصل</a></li>
              <li className="nav-item"><a className="nav-link" href="term-of-use.html">شروط الاستخدام</a></li>
              <li className="nav-item"><a className="nav-link" href="privacy-policy.html">خصوصية</a></li>
              <li className="nav-item"><a className="nav-link" href="#" target="_blank">اشتري الآن</a></li>
            </ul>   
            <ul className="navbar-nav ms-auto text-center">
              <li className="d-inline navbar-text">حقوق النشر © BootNews - جميع الحقوق محفوظة.</li>
            </ul>
         
          </nav>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
