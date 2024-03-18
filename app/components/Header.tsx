import React from "react";
import HeadertopMenu from "./HeadertopMenu";

const Header = () => {
  return (
    <header className="header" >
  
        <HeadertopMenu/>
   

      <div className="second-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                id="main-logo"
                className="main-logo my-2 my-lg-4 d-none d-lg-block"
              >
                <a className="navbar-brand" href="index.html">
                  <img
                    className="img-fluid"
                    src="../../assets/img/logo/logo.png" width={100}
                    alt="Logo site"
                  />
                </a>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
