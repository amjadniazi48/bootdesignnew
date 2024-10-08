"use client";
import { API_URL } from "@/config/index";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const MostreadSidebar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/payam?populate=*`); // Replace with your API
        const result = await response.json();
        setData(result.data); // Store the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data available</p>; // Handle empty or null data
  }
  return (
    
    <aside className="widget">
      <div className="block-title-4">
        <h4 className="h5">
          <span>پیام زینب</span>
        </h4>
      </div>
      {console.log( "hello11",data.attributes.url)}
      <div style={{ display: "flex", justifyContent: "center" }}>
      {data ? (
        <Link
          href={data.attributes.url}
        >
          <Image
            src={data.attributes.image.data.attributes.url}
            width={306}
            height={400}
          ></Image>
        </Link>
          ):("no data")}
      </div> 
    
      <div className="gap-0"></div>
    </aside>
  );
};
export default MostreadSidebar;
