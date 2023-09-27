import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getRQProducts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
// IF YOU WANT TO FECTH THE DATA BY ONCLICK

const ClickData = () => {
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery(
    "RQ-products",
    getRQProducts,
    {
      enabled: false,
    }
  );

  //   console.log(data);

  //   if (isLoading || isFetching) {
  //     return <h1>Data is fetching now</h1>;
  //   }

  return (
    <div>
      <button
        className="bg-green-400 p-1 mt-2 rounded-md text-white"
        onClick={refetch}>
        Fetch Data
      </button>
      {isLoading  ? (
        <div className="">Loading........</div>
      ) : isError ? (
        <div className="">{error.message}</div>
      ) : (
        data?.data.map((el) => (
          <div className="border border-red-500 m-4">
            <h3>Name: {el.name}</h3>
            <p>Email: {el.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ClickData;
