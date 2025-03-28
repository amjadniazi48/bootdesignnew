"use client";

import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import ReactMarkdown from "react-markdown";
import "moment/locale/ur";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HighLights = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [items, setItems] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [pageCount, setpageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  let limit = 10;

  useEffect(() => {
    setLoading(true);
    const getHighlights = async () => {
      // First fetch the category details to get the title
      const categoryRes = await fetch(
        `${API_URL}/api/categories?filters[slug][$eq]=${slug}`
      );
      const categoryData = await categoryRes.json();
      
      if (categoryData.data && categoryData.data.length > 0) {
        setCategoryTitle(categoryData.data[0].attributes.title);
      }

      // Then fetch the posts
      const res = await fetch(
        `${API_URL}/api/posts/?populate?populate[image][fields][0]=name&populate[image][fields][1]=url&populate[image][fields][2]=aletrnativeText&populate[image][fields][3]=formats&populate[categories][fields][0]=title&populate[categories][fields][1]=slug&filters[categories][slug][$eq]=${slug}&pagination[pageSize]=${limit}`
      );
      const data = await res.json();
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      setLoading(false);
      setItems(data);
    };
    getHighlights();
  }, [slug]);

  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/posts/?populate?populate[image][fields][0]=name&populate[image][fields][1]=url&populate[image][fields][2]=aletrnativeText&populate[image][fields][3]=formats&populate[categories][fields][0]=title&populate[categories][fields][1]=slug&filters[categories][slug][$eq]=${slug}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const publicationFromServer = await fetchPublications(currentPage);
    setItems(publicationFromServer);
  };

  return (
    <div className="wrapper">
      <main id="content">
        <div className="container">
          <div className="row p-4 mt-20">
            <div className="col-sm-12">
              <div className="block-title-6 text-center">
                <h4 className="h5 border-primary">
                  <span className="bg-primary text-white">
                    {categoryTitle || <Skeleton width={150} />}
                  </span>
                </h4>
              </div>
              {/* Rest of your component remains the same */}
              <div className="border-bottom-last-0 first-pt-0">
                {loading ? (
                  <div className="loader-container border-bottom">
                    <article className="card card-full hover-a py-5">
                      <div className="row">
                        <div className="col-sm-3">
                          <Skeleton count={10} height={200} />
                        </div>
                        <div className="col-sm-9 ">
                          <Skeleton count={10} height={200} />
                        </div>
                        <hr></hr>
                      </div>
                    </article>
                  </div>
                ) : (
                  items &&
                  items.data?.map((highlight) => {
                    return (
                      <article
                        className="card card-full hover-a py-5"
                        key={highlight.attributes.id}
                      >
                        <div className="row">
                          <div className="col-sm-3">
                            <div>
                              {highlight.attributes.image.data && (
                                <Image
                                  width={
                                    highlight.attributes.image.data[0].attributes
                                      .formats.thumbnail.width
                                  }
                                  height={
                                    highlight.attributes.image.data[0].attributes
                                      .formats.thumbnail.height
                                  }
                                  src={
                                    highlight.attributes.image.data[0].attributes
                                      .formats.thumbnail.url
                                  }
                                  alt="Image description"
                                />
                              )}
                            </div>
                          </div>
                          <div className="col-sm-9 mt-3">
                            <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                              <Link href={`/post/${highlight.attributes.slug}`}>
                                <h3 className="card-title h2 h3-sm h2-md">
                                  {highlight.attributes.title}
                                </h3>
                              </Link>
                              <div className="card-text mb-2 text-muted small">
                                <time dateTime="2019-10-21">
                                  {moment(
                                    highlight.attributes.createdAt
                                  ).format("Do MMMM YYYY")}
                                </time>
                              </div>
                              <p className="card-text">
                                <ReactMarkdown>
                                  {highlight.attributes.description.length > 350
                                    ? highlight.attributes.description.slice(
                                        0,
                                        350
                                      ) + "..."
                                    : highlight.attributes.description}
                                </ReactMarkdown>
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HighLights;