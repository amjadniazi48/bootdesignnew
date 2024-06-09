import React from "react";

const Header = () => {
  return (
    <header className="header" >
        <div className="container">
          <div className="row">
            <div className="col-12">          
                <a className="navbar-brand" href="/">
                  <img
                    className="img-fluid"
                    src="../../assets/img/BANNER_FINAL.jpg" width={1200}
                    alt="Logo site"
                  />
                </a>  
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
