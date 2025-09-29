"use client";

import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import "moment/locale/ur";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import qs from "qs";

const limit = 10;

const HighLights = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const buildQuery = (page = 1) => {
    return qs.stringify(
      {
        populate: {
          image: {
            fields: ["name", "url", "alternativeText", "formats"],
          },
          categories: {
            fields: ["title", "slug"],
          },
        },
        filters: {
          categories: {
            slug: {
              $eq: slug,
            },
          },
        },
         sort: ["createdAt:desc"], // ✅ latest first
        pagination: {
          page,
          pageSize: limit,
        },
      },
      { encodeValuesOnly: true }
    );
  };

  const fetchHighlights = async (page = 1) => {
    const query = buildQuery(page);
    const res = await fetch(`${API_URL}/api/posts?${query}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (!slug) return;

    const loadInitialHighlights = async () => {
      setLoading(true);
      const data = await fetchHighlights(1);
      setItems(data.data || []);
      setPageCount(Math.ceil(data.meta.pagination.total / limit));
      setLoading(false);
    };

    loadInitialHighlights();
  }, [slug]);

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    setLoading(true);
    const result = await fetchHighlights(currentPage);
    setItems(result.data || []);
    setLoading(false);
  };

  const categoryTitle =
    items?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title || "";

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

              <div className="border-bottom-last-0 first-pt-0">
                {loading ? (
                  <div className="loader-container border-bottom">
                    <article className="card card-full hover-a py-5">
                      <div className="row">
                        <div className="col-sm-3">
                          <Skeleton count={10} height={200} />
                        </div>
                        <div className="col-sm-9">
                          <Skeleton count={10} height={200} />
                        </div>
                        <hr />
                      </div>
                    </article>
                  </div>
                ) : (
                  items.map((highlight) => {
                    const { attributes } = highlight;
                    const image =
                      attributes.image?.data?.[0]?.attributes?.formats?.thumbnail;

                    return (
                      <article
                        className="card card-full hover-a py-5"
                        key={highlight.id}
                      >
                        <div className="row">
                          <div className="col-sm-3">
                            {image && (
                              <Image
                                width={image.width}
                                height={image.height}
                                src={image.url}
                                alt={
                                  attributes.image?.data?.[0]?.attributes
                                    ?.alternativeText || "Highlight Image"
                                }
                              />
                            )}
                          </div>
                          <div className="col-sm-9 mt-3">
                            <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                              <Link href={`/post/${attributes.slug}`}>
                                <h3 className="card-title h2 h3-sm h2-md">
                                  {attributes.title}
                                </h3>
                              </Link>
                              <div className="card-text mb-2 text-muted small">
                                <time dateTime={attributes.createdAt}>
                                  {moment(attributes.createdAt).format(
                                    "Do MMMM YYYY"
                                  )}
                                </time>
                              </div>
                              <p className="card-text">
                                <ReactMarkdown>
                                  {attributes.description.length > 350
                                    ? attributes.description.slice(0, 350) +
                                      "..."
                                    : attributes.description}
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
                previousLabel={"Previous"}
                nextLabel={"Next"}
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
