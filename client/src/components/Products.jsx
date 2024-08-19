// import ProductOne from "./Product-Single"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Loader from "../components/Loader";

export default function ProductThree() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const allProducts = await axios.get(
        import.meta.env.VITE_BASE_URL + `/api/products`
      );
      console.log(allProducts);
      setProducts(allProducts.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Helmet>
          <title>
            Products
          </title>
        </Helmet>
      </div>
      <h1 className="max-w-7xl mx-auto px-2 py-4 text-center text-3xl mt-2 text-zinc-700 font-semibold">
        All Products
      </h1>
      {loading ? (
        <div className="h-screen  p-4 w-full mx-auto">
          <Loader size={"lg"} />
        </div>
      ) : (
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products.map((product, i) => (
            <div key={i} className="rounded-md border">
              <img
                src={product.imageUrl}
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.name}
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Sneakers
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Nike
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Airmax
                  </span>
                </div>
                <NavLink to={`/product/${product._id}`}>
                  <button
                    type="button"
                    className="mt-4 w-full text-lg font-bold rounded-xl bg-black px-4 py-4 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
