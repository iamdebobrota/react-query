import React from "react";
import { useRQ } from "./useRQ";

const CustomH = () => {
  const onSuccess = () => {
    //perform side effect after data fetching
    console.log("perform side effect after data fetching");
  };
  const onError = () => {
    //perform side effect after encounter error.
    console.log("perform side effect after encounter error");
  };
  const { isLoading, isError, data, error, isFetching } = useRQ(
    onSuccess,
    onError
  );
  return (
    <div>
      {data.data.map((el) => (
        <>
          <h1>{el.name}</h1>
        </>
      ))}
    </div>
  );
};

export default CustomH;
