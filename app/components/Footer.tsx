import React from "react";

const Footer = () => {
  return (
  
    <footer>  
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
            <ul className="navbar-nleav ms-auto text-center nav-link">
              <li style={{listStyle:"none"}}>Copyright © 2024 IK Trust. All Rights Reserved. </li>
            </ul>
         
          </nav>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
