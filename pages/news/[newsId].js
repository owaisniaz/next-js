import React from "react";
import { useRouter } from "next/router";
const NewsDetails = () => {
    const router = useRouter();
    console.log("router",router?.query)
  return <div>NewsDetails</div>;
};

export default NewsDetails;
