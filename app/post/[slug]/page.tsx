import React from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";


type Props = {
  params: {
    slug: string;
  };
};
async function getData(slug: string) {
  const res = await fetch(
    `${API_URL}/api/posts?populate=*&filters[slug][$eq]=${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const PostDetails = async ({ params }: Props) => {
  const post = await getData(params.slug);
 console.log("mydata is", post.data[0].attributes.title);
 
  return (
   
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">{post.data[0].attributes?.categories.data[0].attributes.title}</span>
                  </h4>
                </div>
                <div className="">
                  <div className="card   p-3"  style={{backgroundColor:"#F7F7F5", border:"1px solid #C2CBCD"}} >
                    <h3 className="card-title" >
                      {post.data.attributes?.title}
                    </h3>
                    <div className="block-area p-4">
                    <ReactMarkdown>
                    {post.data[0].attributes.description}
                    </ReactMarkdown>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
 
  );
};
export default PostDetails;
