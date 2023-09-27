import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import useProductRQ from "./useProductRQ";
import { useParams } from "react-router-dom";

const SingleProductRQ = () => {
  const { productId } = useParams();
  const { isLoading, isFetching, data } = useProductRQ(productId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);
  return (
    <div>
      <h1 className="text-xl font-bold text-center bg-lime-200">
        Single Product React query custom hooks
      </h1>
      <div>
        <span className="font-semibold"> Name: {data?.data.name}</span>
        <p>Id: {data?.data.id}</p>
        <p>Email: {data?.data.email}</p>
        <h1>Phone: {data?.data.phone}</h1>
        <span className="font-semibold">Address:</span>
        <p>
          {data?.data.address.street}, {data?.data.address.city},{" "}
          {data?.data.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default SingleProductRQ;
