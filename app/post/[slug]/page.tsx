import React from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "../../layout";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
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
  const content: BlocksContent = post.data[0].attributes.description;
  return (
    <Layout>
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">Post details</span>
                  </h4>
                </div>
                <div className="">
                  <div className="card border-0  p-3">
                    <h3 className="card-title">
                      {post.data[0].attributes.title}
                    </h3>
                    <div className="card-body">
                      <BlocksRenderer content={content}></BlocksRenderer>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default PostDetails;
