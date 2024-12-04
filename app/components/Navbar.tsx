import { useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${API_URL}/api/navigation/render/1?type=TREE`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Navbar = async () => {
  const Nav = await getData();
  return (
    <div
      id="showbacktop"
      className="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0"
    >
      <div className="container">
        <nav
          id="main-menu"
          className="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
        >
          <div
            id="navbarTogglerDemo1"
            className="collapse navbar-collapse hover-mode"
          >
            <div className="logo-showbacktop">
              <a href="/">
                {/* <img
                  className="img-fluid"
                  src="../../assets/img/logo/default-logo.png"
                  alt="Logo site"
              */}
              امام خمینی ٹرسٹ
              </a> 
            </div>
            <ul
              id="start-main"
              className="navbar-nav main-nav navbar-uppercase first-start-lg-0"
            >
              {Nav.map((nav: any) => {
                return (
                  <>
                    {nav.items.length === 0 ? (
                      <li key={nav.id}>
                        {nav.path === "/" ? (
                          <a
                            className="nav-link active text-dark"
                            href={nav.path}
                          >
                            {" "}
                            {nav.title}
                          </a>
                        ) : (
                          <Link
                            className="nav-link active text-dark"
                            href={nav.path}
                          >
                            {nav.title}
                          </Link>
                        )}
                      </li>
                    ) : (
                      <li className="nav-item dropdown" key={nav.id}>
                        <Link
                          className="nav-link active dropdown-toggle text-dark"
                          href={nav.path}
                        >
                          {nav.title}
                        </Link>

                        {nav.items !== null ? (
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarhome"
                          >
                            {nav.items.map((item: any) => {
                              return (
                                <>
                                  <li key={item.id}>
                                    <Link
                                      className="dropdown-item"
                                      href={item.path}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
