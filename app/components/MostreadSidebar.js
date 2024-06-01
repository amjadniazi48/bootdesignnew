"use client"
import React from "react";
import { FacebookEmbed } from "react-social-media-embed";

function MostreadSidebar() {
  return (
    <aside className="widget">
      <div className="block-title-4">
        <h4 className="h5 title-arrow">
          <span>فیس بک</span>
        </h4>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <FacebookEmbed
          url="https://www.facebook.com/iktrustmariindus"
          width={306}
        />
      </div>

      <div className="gap-0"></div>
    </aside>
  );
}

export default MostreadSidebar;
