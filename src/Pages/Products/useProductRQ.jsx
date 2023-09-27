import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSingleProduct = (productId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${productId}`);
};
const useProductRQ = (productId) => {
  return useQuery(["products", productId], () => fetchSingleProduct(productId));
};

export default useProductRQ;
