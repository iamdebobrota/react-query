import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getProduct = async () => {
  return await axios.get("http://localhost:8080/data");
};

const postProduct = async (newPost) => {
  return await axios.post("http://localhost:8080/data", newPost);
};

const putProduct = async (id, updatedData) => {
  return await axios.put(`http://localhost:8080/data/${id}`, updatedData);
};

const deleteProductFn = async (id) => {
  return await axios.delete(`http://localhost:8080/data/${id}`);
};

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editData, setEditData] = useState(null); // Track the item being edited
  const navigate = useNavigate();

  const { isLoading, isError, data, refetch } = useQuery(
    "get-product",
    getProduct
  );

  const mutation = useMutation((newPost) => postProduct(newPost), {
    onSuccess() {
      refetch();
      setTitle("");
      setBody("");
    },
  });

  const editMutation = useMutation((data) => putProduct(data.id, data), {
    onSuccess() {
      refetch();
      setEditData(null); // Close the edit form after success
    },
  });

  const { mutate: deleteProduct } = useMutation((id) => deleteProductFn(id), {
    onSuccess(data) {
      refetch();
    },
    onError(error) {},
  });

  const submitData = () => {
    if (editData) {
      editMutation.mutate({ id: editData.id, title, body });
    } else {
      mutation.mutate({ title, body });
    }
  };
  const handleDelete = (id) => {
    deleteProduct(id);
  };
  const handleEdit = (item) => {
    // Open the edit form for the selected item
    setEditData(item);
    setTitle(item.title);
    setBody(item.body);
  };

  const handleCancelEdit = () => {
    // Close the edit form
    setEditData(null);
    setTitle("");
    setBody("");
  };

  if (mutation.isError || editMutation.isError) {
    return (
      <span>
        Error: {mutation.error?.message || editMutation.error?.message}
      </span>
    );
  }

  return (
    <div>
      <div>
        {mutation.isLoading && (
          <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
          </div>
        )}
        <div className="w-1/3 shadow grid gap-6 p-4 m-auto mt-4">
          <p className="font-extrabold text-lg">Add Products</p>
          <div className="text-start">
            <label htmlFor="title" className="text-start font-medium">
              Title
            </label>
            <input
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="write something......"
            />
          </div>
          <div className="text-start">
            <label htmlFor="body" className="text-start font-medium">
              Body
            </label>
            <input
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="write something......"
            />
          </div>
          <button
            onClick={() => {
              submitData();
              refetch();
            }}
            className="bg-red-400 rounded-md text-white hover:text-red-600 hover:bg-transparent border hover:border-red-600 p-1 transition-colors">
            Submit
          </button>
        </div>
        <div className="mt-4 grid grid-cols-4 shadow w-full bg-gray-200"></div>
      </div>
      {/* ... rest of your component code ... */}
      <div className="mt-4 grid grid-cols-4 shadow w-full bg-gray-200">
        {isLoading ? (
          <>Loading......</>
        ) : (
          data?.data.map((el) => (
            <div
              key={el.id}
              className="group/item flex flex-wrap gap-4 justify-between p-4 text-start ml-4 bg-gray-400 m-3">
              <div>
                <div>Title: {el.title}</div>
                <div className="bg-slate-100">{el.body}</div>
              </div>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => handleDelete(el.id)}
                  className="invisible group-hover/item:visible bg-red-500 h-8 p-1 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(el)}
                  className="invisible group-hover/item:visible bg-blue-500 h-8 p-1 text-white rounded-md hover:bg-blue-600">
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Form */}
      {editData && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Edit Item</h2>
            <input
              type="text"
              className="border rounded p-2 mb-2 w-full"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="border rounded p-2 mb-2 w-full"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={submitData}>
              Save
            </button>
            <button
              className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
              onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
