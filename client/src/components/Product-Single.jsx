import axios from "axios";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function ProductOne() {
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const [isVerified, setIsVerified] = useState(false);

  const { productId } = useParams();

  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Replace with the actual token

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

  // Open Razorpay
  const handleOpenRazorpay = async (data) => {
    const key = await axios.get(import.meta.env.VITE_BASE_URL + `/api/getkey`);
    console.log(key.data.key, "KEY");

    const options = {
      key: key.data.key, // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Furniture Renting",
      description: "BookYourFurniture-Online",
      image: "https://avatars.githubusercontent.com/u/122214228?v=4",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      // callback_url: import.meta.env.VITE_MAIN_URL + "/api/paymentvarification",
      handler: function (response) {
        // console.log(response, "Varification");
        axios
          .post(
            import.meta.env.VITE_BASE_URL + `/api/paynow/paymentvarification`,
            {
              response: response,
            }
          )
          .then((res) => {
            console.log(res, "Order Varified");
            console.log("ORDER SAVED TO DB");
            makeOrder(qty);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: "OM PATEL",
        email: "ompate@example.com",
        contact: "7777777777",
      },
      notes: {
        address: "Book Your Meal.PVT-Ltd",
      },
      theme: {
        color: "#3321cd",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Checkout Handler
  const checkoutHandler = async (amount) => {
    if (!location) {
      return toast.error("Please Give Your Location..!");
    }
    console.log(amount);
    const _data = { amount: amount };
    axios
      .post(import.meta.env.VITE_BASE_URL + `/api/paynow/checkout`, _data)
      .then((res) => {
        console.log(res.data, "Order Data");
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(order, "ORDER");

    //
  };

  // Send Order to DB
  const makeOrder = async (count) => {
    try {
      const userId = localStorage.getItem("userId");
      // console.log(userId, "USER");
      // console.log(productId, "PID");

      const user = userId;
      const product = productId;
      const startDate = Date.now();
      const endDate = Date.now();

      if (!product || !startDate || !endDate) {
        return toast.error("All Fields Are Required..!");
      }

      const response = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            user,
            product: productId,
            startDate,
            endDate,
            qty: count,
          }),
        }
      );

      // order response
      const orderRes = await response.json();
      console.log(orderRes);

      // condition
      if (orderRes) {
        toast.success(orderRes.success);
        setQty(1);
        navigate("/paymentsuccess");
      } else {
        toast.error(orderRes.error);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
              <div>
                <label htmlFor="size">Enter Quantity</label>
                <input
                  type="number"
                  className="w-20 ml-6 mt-10  py-1 px-2 rounded-lg border-2 border-gray-200"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="title-font text-xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                <button
                  onClick={() => checkoutHandler(qty * product.price)}
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
