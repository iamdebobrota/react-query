import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useRQ } from "./hooks/useRQ";

const getRQProducts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
// IF YOU WANT TO FECTH THE DATA BY ONCLICK

const SideEffect = () => {
  const onSuccess = () => {
    //perform side effect after data fetching
    console.log("perform side effect after data fetching");
  };
  const onError = () => {
    //perform side effect after encounter error.
    console.log("perform side effect after encounter error");
  };

  const { isLoading, isError, error, data, isFetching, refetch } = useQuery(
    "RQ-products",
    getRQProducts,
    {
      onSuccess: onSuccess,
      onError: onError,
      select: (data) => {
        const newData = data.data.map((el) => el.name); //can filter the data
        return newData;
      },
    }
  );

  if (isLoading || isFetching) {
    return <h1>Data is fetching now</h1>;
  }

  return (
    <div>
      {data?.data.map((el) => (
        <div className="border border-red-500 m-4">
          <h3>Name: {el.name}</h3>
          <p>Email: {el.email}</p>
        </div>
      ))}
    </div>
  );
};

export default SideEffect;
