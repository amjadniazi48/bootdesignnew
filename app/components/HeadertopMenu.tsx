"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function HeadertopMenu() {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set 768px as the mobile breakpoint
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener on unmount
    };
  }, []);

  return (
    <div className="mobile-sticky fs-6 bg-black">
      <div className="container">
        {isMobile && <Navbar />} {/* Only show Navbar (with hamburger) for mobile */}
      </div>
    </div>
  );
}

export default HeadertopMenu;
