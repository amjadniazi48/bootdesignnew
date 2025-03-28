"use client"
import { useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${API_URL}/api/navigation/render/1?type=TREE`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Navbar = () => {
  const [navData, setNavData] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setNavData(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

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
          {/* Hamburger button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo1"
            aria-controls="navbarTogglerDemo1"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarTogglerDemo1"
            className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          >
            <div className="logo-showbacktop">
              <a href="/">
              امام خمینی ٹرسٹ
              </a>
            </div>
            <ul
              id="start-main"
              className="navbar-nav main-nav navbar-uppercase first-start-lg-0"
            >
              {navData.map((nav: any) => {
                return (
                  <>
                    {nav.items.length === 0 ? (
                      <li key={nav.id}>
                        {nav.path === "/" ? (
                          <a
                            className="nav-link active text-dark"
                            href={nav.path}
                          >
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
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {nav.title}
                        </Link>

                        {nav.items !== null ? (
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarhome"
                          >
                            {nav.items.map((item: any) => {
                              return (
                                <li key={item.id}>
                                  <Link
                                    className="dropdown-item"
                                    href={item.path}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
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
