import React from "react";
import { API_URL } from "@/config/index";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "moment/locale/ur";
async function getData() {
  const res = await fetch(`${API_URL}/api/posts?populate=deep&pagination[pageSize]=5`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PopularpostSidebar = async () => {
  const post = await getData();
  return (
    <aside className="widget">
      <div className="block-title-4">
        <h4 className="h5 title-arrow">
          <span>مقبول سرگرمیاں </span>
        </h4>
      </div>

      <ul className="post-number list-unstyled border-bottom-last-0 rounded mb-3">
        {post.data.map((clip) => {
          return (
           <li> <Link href={`/post/${clip.attributes.slug}`}>
              {clip.attributes.title.length > 30
                ? clip.attributes.title.slice(0, 30) + "..."
                : clip.attributes.title}
            </Link></li>
          );
        })}
      </ul>

      <div className="gap-0"></div>
    </aside>
  );
};

export default PopularpostSidebar;
