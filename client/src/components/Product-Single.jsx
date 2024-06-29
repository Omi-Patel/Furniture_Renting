import axios from "axios";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductOne() {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  // console.log(productId);

  const getSingleProduct = async () => {
    try {
      const singleProduct = await axios.get(
        import.meta.env.VITE_BASE_URL + `/api/products/${productId}`
      );

      // console.log(singleProduct);
      setProduct(singleProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Nike Air Max 21A"
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src={product.imageUrl}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                NIKE
              </h2>
              <h1 className="my-4 text-3xl font-semibold text-black">
                {product.name}
              </h1>
              <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                  <span className="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="ml-auto flex items-center">
                  <span className="mr-3 text-sm font-semibold">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <ChevronDown size={16} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="title-font text-xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Confirm Order!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
