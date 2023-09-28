import axios from "axios";
import { useRef, useState } from "react";
import { useMutation } from "react-query";

const editProductFn = async ({ id, formData }) => {
  return await axios.patch(`http://localhost:8080/data/${id}`, formData);
};


export default function EditProduct({ setShowEdit, title, body }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const { mutate: editProduct } = useMutation(
    ({ id, formData }) => editProductFn({ id, formData }),
    {
      onSuccess(data) {
      },
      onError(error) {},
    }
  );

// console.log(title, body)
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-transparent">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div>
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <p className="text-lg font-semibold">Edit product</p>
              <div className="sm:flex sm:items-start">
                <div className="grid mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="outline rounded-sm outline-1"
                    placeholder="edit title here..."
                  />
                  <label htmlFor="">Body</label>
                  <input
                    type="text"
                    name="body"
                    placeholder="edit body here...."
                    className="outline rounded-sm outline-1"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={() => setShowEdit(false)}>
                Edit
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setShowEdit(false)}
                ref={cancelButtonRef}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
