// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Loading from "../Loader";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const blob = await fetch(import.meta.env.VITE_BASE_URL + `/api/products`);
      const response = await blob.json();

      // console.log(response);

      setProducts(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="container min-h-screen max-w-7xl  mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-3xl font-bold">Admin Dashboard</h1>
        <Button
          value="shadow"
          color="success"
          className=" text-white px-0 py-2 rounded-lg font-semibold font- tracking-tighter text-[16px]"
        >
          <NavLink className="flex gap-1 p-2" to={"/create-product"}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span>Create New Product</span>
          </NavLink>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <div className="mt-10 py-2">
          <h1 className="text-xl sm:text-2xl text-zinc-700 font-semibold">
            Available Products..
          </h1>
        </div>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          {loading ? (
            <Loading />
          ) : (
            <tbody className="text-center">
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      height={70}
                      width={70}
                      className="rounded-lg mx-auto"
                    />
                  </td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">₹ {product.price}</td>
                  <td className=" py-2 border">
                    <Button
                      variant="flat"
                      color="primary"
                      className="m-1 sm:mx-2 font-semibold font-mono"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="flat"
                      color="danger"
                      className="m-1 sm:mx-2 font-semibold font-mono"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
