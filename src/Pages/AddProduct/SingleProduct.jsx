import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchData = (email) => {
  return axios.get(`/api/${email}`);
};
const fetchById = (id) => {
  return axios.get(`/api/${id}`);
};

const SingleProduct = (email) => {
  const { data: user } = useQuery(["product", email], () => fetchData(email));
  const userId = user.data.id;
  const { data: singleData } = useQuery(
    ["product", userId],
    () => fetchById(userId),
    {
      enabled: !!userId,
    }
  );

  return <div>SingleProduct</div>;
};

export default SingleProduct;
