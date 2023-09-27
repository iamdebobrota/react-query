import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getRQProducts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

const RQProducts = () => {
  const { isLoading, isError, error, data, isFetching } = useQuery(
    "RQ-products",
    getRQProducts,
    {
        // refetchOnMount: false, //true/"always"
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000 // fetch afterfew sec
        // refetchIntervalInBackground: true
        

    }
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
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

export default RQProducts;
