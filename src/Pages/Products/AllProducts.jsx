import axios from "axios";
import React from "react";
import { useQueries, useQuery } from "react-query";
import { Link } from "react-router-dom";

const getRQProducts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

const AllProducts = () => {
  const { isLoading, isFetching, data } = useQuery("products", getRQProducts);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <div>
      <h1>AllProducts</h1>
      {data?.data.map((el) => (
        <div key={el.id}>
          <Link
            to={`${el.id}`}
            className="text-blue-500 hover:font-semibold">
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
