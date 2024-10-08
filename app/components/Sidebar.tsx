import React from "react";
import SocialmediaSidebar from "./SocialmediaSidebar";
import PopularpostSidebar from "./PopularpostSidebar"
import MostreadSidebar from  "./MostreadSidebar";
import SubscriptionSidebar from "./SubscriptionSidebar";


const Sidebar = () => {
  return (
    <aside className="col-md-4 end-sidebar-lg">
      <div className="sticky">
        <SocialmediaSidebar />
        <PopularpostSidebar />
        <MostreadSidebar />
        <SubscriptionSidebar />
      </div>
    </aside>
  );
};

export default Sidebar;
