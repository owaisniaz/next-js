import React from "react";
import Link from "next/link";
const News = () => {
  return (
    <>
      <h2>News</h2>

      <ul>
        <li>
          <Link href={`/news/newsId`}>Detail 1</Link>
        </li>
        <li>
          <Link href={`/news/newsId`}>Detail 2</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
