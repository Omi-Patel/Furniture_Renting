import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Avatar, Button } from "@nextui-org/react";
import Loader from "../components/Loader";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/users/profile/${userId}`
      );

      const response = await blob.json();

      setProfile(response.user);
      setOrders(response.user.orders);
      setLoading(false);
      // console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto ">
      {/* Profile Info */}
      <div className=" mt-4  flex flex-col sm:flex-row justify-between items-center">
        <div className="flex  sm:flex-row gap-4  sm:p-4  items-center">
          <Avatar
            isBordered
            color="primary"
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className=""
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Welcome, {profile.name} 👋
          </h1>
        </div>
        <div className="sm:p-4 ">
          <h2 className="flex justify-center items-center gap-2 text-xl font-semibold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </span>
            <span>{profile.email}</span>
          </h2>
          <h3 className="flex gap-2 items-center  justify-center sm:justify-start">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span>+91 {profile.mobile}</span>
          </h3>
        </div>
      </div>

      {/* Order History */}
      <div className=" mt-6">
        <div className="">
          <h1 className="flex gap-2 items-center text-zinc-700 p-4 text-2xl font-semibold tracking-tight">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </span>
            <span>Order History</span>
          </h1>
          <div>
            {/* Table */}

            {orders.length > 0 ? (
              <div className="relative overflow-x-auto shadow-md sm:rounded-xl mb-4">
                {/* table  */}
                <table className="w-full border-2 border-black shadow-md text-sm text-left text-gray-900">
                  {/* thead  */}
                  <thead className="text-lg bg-slate-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Sr.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Product Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        QTY.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment Status
                      </th>
                    </tr>
                  </thead>

                  {/* tbody  */}
                  {loading ? (
                    <div className="  p-4 w-full mx-auto">
                      <Loader size={"lg"} />
                    </div>
                  ) : (
                    <>
                      {orders.map((order, index) => {
                        return (
                          <tbody key={index}>
                            <tr className=" border-b-2 border-gray-300 text-slate-900 font-medium">
                              {/* S.No   */}
                              <td className="px-6 py-4">{index + 1}.</td>

                              {/* Product Image */}
                              <td className="px-6 py-4">
                                <img
                                  src={order.product.imageUrl}
                                  alt={order.product.name}
                                  height={60}
                                  width={60}
                                  className="rounded-lg"
                                />
                              </td>

                              {/* Product Name */}
                              <td className="px-6 py-4 ">
                                {order.product.name}
                              </td>

                              {/* Price */}
                              <td className="px-6 py-4 uppercase">
                                ₹ {order.product.price}
                              </td>

                              {/* QTY */}
                              <td className="px-6 py-4 uppercase">
                                {order.qty}
                              </td>

                              {/* Payment Status */}
                              <td className="px-6 py-4 uppercase">{"DONE"}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </>
                  )}
                </table>
              </div>
            ) : (
              <div className="p-5 flex flex-col text-zinc-600 w-52 gap-2 ">
                <h1 className="font-medium tracking-tight">
                  No Orders Yet...!
                </h1>
                <Button
                  color="primary"
                  variant="flat"
                  className="font-medium tracking-wider"
                >
                  <NavLink to={"/products"} className=" px-4 py-3">
                    Continue Shopping!
                  </NavLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
