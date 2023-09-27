import axios from "axios";
import { useQuery } from "react-query";

const getRQProducts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

export const useRQ = (onSuccess, onError) => {
  return useQuery("RQ-products", getRQProducts, {
    onSuccess,
    onError,
    select: (data) => {
      const newData = data.data.map((el) => el.name); //can filter the data
      return newData;
    },
  });
};
